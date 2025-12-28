import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./Pages/Post.jsx";
import PostDetails from "./Pages/PostDetails.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;