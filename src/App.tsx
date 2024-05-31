import "./App.css";
import Layout from "./Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";
import Profile from "./pages/Profile/Profile";
import Auth from "./HOC/Auth";
import Favorite from "./pages/Favorite/Favorite";
import Confirmation from "./pages/Confirmation/Confirmation";
import Activation from "./pages/Activation/Activation";
import SignUp from "./pages/SignUp";
import SignIN from "./pages/SignIN";
import CreatePost from "./pages/CreatePost/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about-us" element={<Navigate to="/about" />} />
          <Route path="sign-up" element={<SignUp />} />
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
          <Route path="favorite" element={<Favorite/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/confirmation" element={<Confirmation/>}/>
          <Route path="activate/:uid/:token" element={<Activation/>}/>
          <Route path="sign-in"element={<SignIN/>}/>    
          <Route path="create-post" element={<CreatePost/>}/>
           </Route>
      </Routes>
    </>
  );
}

export default App;
