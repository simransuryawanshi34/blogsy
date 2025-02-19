import { Button } from "../components";
import { useAuthState } from "../hooks";

const NotFound = () => {
  const { isLoggedIn } = useAuthState();
  return (
    <div className="max-w my-auto flex flex-col items-center py-4 gap-8">
      <h1 className="leading-[0.8] text-8xl font-zen-dots text-blue tracking-wider">
        4O4
      </h1>
      <h2 className="h1">Opps! Page Not Found</h2>
      <Button as="link" to={isLoggedIn ? "/feed" : "/"}>
        Go To Home
      </Button>
    </div>
  );
};

export default NotFound;
