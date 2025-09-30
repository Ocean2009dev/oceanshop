import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Contact from "./pages/Contact.tsx";
import Features from "./pages/Features.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import NotFound from "./pages/NotFound.tsx";
import { Payment } from "./pages/Payment.tsx";
import Product from "./pages/Product.tsx";
import Sneaker from "./pages/Sneaker.tsx";
import Text from "./pages/Text.tsx";
import "./styles/global.css";
import Signup from "./pages/Signup.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      // Home page
      {
        index: true,
        element: <Home />,
      },

      // Product pages
      {
        path: "sneaker",
        element: <Sneaker />,
      },
      {
        path: "product/:title",
        element: <Product />,
      },

      // Auth pages
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },

      // Other pages
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "features",
        element: <Features />,
      },

      // Legacy route redirect
      {
        path: "pay",
        element: <Payment />,
      },

      // Catch all 404
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "text",
        element: <Text />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
