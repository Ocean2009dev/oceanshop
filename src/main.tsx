import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";
import Sneaker from "./pages/Sneaker.tsx";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Features from "./pages/Features.tsx";
import { SignIn, SignUp } from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sneaker",
        element: <Sneaker />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
