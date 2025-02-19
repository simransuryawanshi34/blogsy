import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Input, Loader } from "../components";
import { useAuthState, usePasswordReset } from "../hooks";

const ForgotPassword = () => {
  const { user } = useAuthState();
  const { sendLink, sending } = usePasswordReset();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email || "",
    },
  });

  return (
    <div className="max-w my-auto relative flex flex-col items-center justify-center py-4 sm:gap-4 gap-3 text-center">
      <h1 className="h1">Send Password Reset Link</h1>
      <form
        id="ForgotPasswordForm"
        onSubmit={handleSubmit(sendLink)}
        className="w-full max-w-sm relative flex flex-col lg:gap-4 gap-3 pt-1"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: true,
            maxLength: {
              value: 128,
              message: "Email must be less than 128 characters",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
        />

        {errors?.email?.message ? (
          <p className="text text-red text-center">{errors.email.message}</p>
        ) : null}

        <Button type="submit" disabled={sending}>
          {sending ? <Loader size="sm" color="white" /> : "Send"}
        </Button>
      </form>

      {!user?.email && (
        <Link
          to="/login"
          className="text text-black/60 border-b-1.5 border-black/10 hover:border-blue hover:text-blue transition-all pt-1"
        >
          Go back to login
        </Link>
      )}
    </div>
  );
};

export default ForgotPassword;
