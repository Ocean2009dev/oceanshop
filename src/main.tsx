import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Contact from "./pages/Contact.tsx";
import Features from "./pages/Features.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import News from "./pages/News.tsx";
import NewsDetail from "./pages/NewsDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import { Payment } from "./pages/Payment.tsx";
import { PaymentReturn } from "./pages/PaymentReturn.tsx";
import { Orders } from "./pages/Orders.tsx";
import Product from "./pages/Product.tsx";
import Sneaker from "./pages/Sneaker.tsx";
import Text from "./pages/Text.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import "./styles/global.css";
import Signup from "./pages/Signup.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute.tsx";
import { PublicRoute } from "./components/Auth/PublicRoute.tsx";

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

      // Auth pages (public routes - redirect if already logged in)
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },

      // Protected routes
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },

      // Other pages
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <NewsDetail />,
      },
      {
        path: "features",
        element: <Features />,
      },

      // Payment routes
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment/return",
        element: <PaymentReturn />,
      },
      {
        path: "orders",
        element: <Orders />,
      },

      // Legacy route redirect

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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
