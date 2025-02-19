import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loading } from "../components";
import { useVerify } from "../hooks";

const Verification = () => {
  const { verify } = useVerify();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  useEffect(() => {
    verify(userId, secret);
  }, []);

  return <Loading />;
};

export default Verification;
