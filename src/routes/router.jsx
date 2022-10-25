import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import About from "../pages/about";
import Blogs from "../pages/blogs";
import Courses from "../pages/courses";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
