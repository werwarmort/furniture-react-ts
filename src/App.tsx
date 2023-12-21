import "./scss/App.scss";
import "./scss/style.scss";
import "./scss/index.scss";

import HomePage from "./pages/homePage.tsx";
import ContactPage from "./pages/contactPage.tsx";
import GalleryPage from "./pages/galleryPage.tsx";
import BlogPage from "./pages/blogPage.tsx";
import AboutPage from "./pages/aboutPage.tsx";
import BlogPost from "./pages/blogPostPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/registerPage";
import Layout from "./layouts/Layout.tsx";

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
