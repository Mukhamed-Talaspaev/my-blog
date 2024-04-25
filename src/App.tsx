import "./App.css";
import Layout from "./Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";
import Profile from "./pages/Profile/Profile";
import Auth from "./HOC/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about-us" element={<Navigate to="/about" />} />
          <Route path="login" element={<Login />} />
          <Route
            path="posts"
            element={
              <Auth>
                <Posts />
              </Auth>
            }
          />
          <Route path="posts/:isbn13" element={<Post />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
