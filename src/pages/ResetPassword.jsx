import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, PasswordInput, Loader, Loading } from "../components";
import { usePasswordReset, useNotification } from "../hooks";

const ResetPassword = () => {
  const { notify } = useNotification();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");
  const [isValid, setIsValid] = useState(false);
  const { reset, resetting } = usePasswordReset();

  useEffect(() => {
    if (!userId || !secret) {
      notify({
        type: "error",
        message: "Invalid password reset link!",
      });
      navigate("/forgot-password", { replace: true });
    } else {
      setIsValid(true);
    }
  }, [userId, secret]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const renderErrors = () => {
    const errorMessages = [
      errors?.password?.message,
      errors?.confirmPassword?.message,
    ]
      .filter(Boolean)
      .join(", ");

    return errorMessages.length ? (
      <p className="text text-red text-center">{errorMessages}</p>
    ) : null;
  };

  return isValid ? (
    <div className="max-w my-auto relative flex flex-col items-center justify-center sm:gap-4 gap-3 py-4 text-center">
      <h1 className="h1">Reset Password</h1>
      <form
        onSubmit={handleSubmit(({ password, confirmPassword }) =>
          reset({ userId, secret, password, confirmPassword })
        )}
        className="w-full max-w-sm relative flex flex-col lg:gap-4 gap-3"
      >
        <PasswordInput
          placeholder="Enter new password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />

        <PasswordInput
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />

        {renderErrors()}

        <Button type="submit" disabled={resetting}>
          {resetting ? <Loader size="sm" color="white" /> : "Reset"}
        </Button>
      </form>
    </div>
  ) : (
    <Loading />
  );
};

export default ResetPassword;
