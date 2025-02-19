import { Button } from "../components";

const Home = () => {
  return (
    <div className="max-w my-auto relative flex flex-col items-center justify-center gap-4 text-center py-4">
      <h1 className="h1">Write Freely. Share Instantly. Inspire the World.</h1>
      <p className="text text-black/60 max-w-3xl">
        Blogsy is your go-to platform for easy blogging. Share your stories,
        ideas, and creativity with a lively community of readers. Whether you're
        writing for fun, exploring new ideas, or growing your audience, Blogsy
        makes it easy to succeed.
      </p>
      <Button as="link" to="/signup" className="mt-2">
        Get Started
      </Button>
    </div>
  );
};

export default Home;
