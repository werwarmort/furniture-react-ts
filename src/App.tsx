import "./scss/App.scss";
import "./scss/style.scss";
import "./scss/index.scss";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import GalleryPage from "./pages/gallery";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import BlogPost from "./pages/blogPost";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/registerPage";
import Layout from "./layouts/layout.tsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./firebase.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="blog/:postId" element={<BlogPost />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
