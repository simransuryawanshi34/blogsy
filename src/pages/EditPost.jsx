import { useEffect } from "react";
import { PostForm, Loading } from "../components";
import { useParams } from "react-router-dom";
import { usePost } from "../hooks";

const EditPost = () => {
  const { id } = useParams();
  const { fetchPost, loading, post } = usePost();

  useEffect(() => {
    fetchPost(id, true);
  }, [id]);

  return loading ? (
    <Loading />
  ) : post && post.isOwner ? (
    <div className="max-w relative flex flex-col items-center lg:py-4 py-3">
      <PostForm post={post} />
    </div>
  ) : null;
};

export default EditPost;
