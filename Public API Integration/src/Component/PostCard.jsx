const PostCard = ({ post }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-gray-200">
      <h2 className="font-bold text-xl mb-3 text-gray-800">{post.title}</h2>
      <p className="text-gray-600 text-sm mb-4">
        {post.body.slice(0, 120)}...
      </p>

      <a
        href={`/posts/${post.id}`}
        className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:scale-105 transform transition-all duration-200"
      >
        Read More →
      </a>
    </div>
  );
};

export default PostCard;