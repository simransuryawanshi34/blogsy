import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPosts,
  selectCursor,
  selectHasMore,
  selectTotalPosts,
} from "../store/selectors";
import { getFeed } from "../appwrite/database";
import { setPosts } from "../store/feedSlice";
import { useAuthState, useNotification } from ".";

const useFeed = () => {
  const { user } = useAuthState();
  const posts = useSelector(selectPosts);
  const cursor = useSelector(selectCursor);
  const hasMore = useSelector(selectHasMore);
  const total = useSelector(selectTotalPosts);
  const dispatch = useDispatch();
  const { notify } = useNotification();
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const fetchFeed = async () => {
    if (!hasMore || isFetching) {
      setLoading(false);
      return;
    }
    setIsFetching(true);
    setLoading(true);

    try {
      const postsData = await getFeed({
        userId: user?.$id,
        limit: 20,
        cursor,
      });
      dispatch(setPosts(postsData));
    } catch (error) {
      notify({ type: "error", message: error.message });
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  };

  return { posts, hasMore, total, fetchFeed, loading };
};

export default useFeed;
