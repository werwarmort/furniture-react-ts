import React from "react";

import "./scss/App.scss";
import "./scss/style.scss";
import "./scss/index.scss";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import GalleryPage from "./pages/gallery";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import BlogPost from "./pages/blogPost";

import Layout from "./layouts/LayOut";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="post" element={<BlogPost />} />
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
