import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../Component/loader.jsx";
import Error from "../Component/Error.jsx";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPost = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch post");
      }

      const data = await response.json();
      setPost(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <Link to="/" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">
        ← Back
      </Link>

      <h1 className="text-2xl font-bold mb-4 capitalize mt-8">
        {post?.title}
      </h1>

      <p className="text-gray-700 leading-relaxed">
        {post?.body}
      </p>
    </div>
  );
};

export default PostDetails;