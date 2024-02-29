import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./screens/Home/Home";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Home />} />
      <Route path="collection" element={<Home />} />
      <Route path="about" element={<Home />} />
      <Route path="gallery" element={<Home />} />
      <Route path="favourites" element={<Home />} />

      {/* <Route path="products" element={<Products />} />
      <Route path="products/:productsChild" element={<Products />} />

      <Route path="partners" element={<Partners />} />

      <Route path="services" element={<ServicesPage />} />
      <Route path="services/:servicesChild" element={<TestServicePage />} />

      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} /> */}
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
