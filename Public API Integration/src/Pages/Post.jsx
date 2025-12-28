import { useEffect, useState, useCallback  } from "react";
import PostCard  from "../Component/PostCard.jsx";
import Loader from "../Component/loader.jsx";
import Error from "../Component/Error.jsx";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const LIMIT = 6;

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (err) {
       setError(err.message || "Something went wrong");
    } finally {
       setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>

      {error && <Error message={error} />}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard  key={post.id} post={post} />
        ))}
      </div>

      {loading && <Loader />}

      <div className="text-center mt-6">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Post;