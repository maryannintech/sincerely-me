import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { LogIn } from "./pages/LogIn";
import { Dashboard } from "./pages/Dashboard";
import { MakeLetter } from "./pages/MakeLetter";
import { ErrorPage } from "./pages/ErrorPage";
import { AppLayout } from "./AppLayout";
import { About } from "./pages/About";
import { AllLetters } from "./pages/AllLetters";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "write", element: <MakeLetter /> },
      { path: "makeletters", element: <MakeLetter /> },
      { path: "about", element: <About /> },
      { path: "all-letters", element: <AllLetters /> },
    ],
  },
]);
