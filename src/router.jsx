import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { LogIn } from "./pages/LogIn";
import { Dashboard } from "./pages/Dashboard";
import { MakeLetter } from "./pages/MakeLetter";
import App from "./App";
import { ErrorPage } from "./components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/signin", element: <SignIn /> },
      { path: "/login", element: <LogIn /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/writeLetter", element: <MakeLetter /> },
      { path: "/allLetters", element: <App /> },
      { path: "/about", element: <App /> },
    ],
  },
]);
