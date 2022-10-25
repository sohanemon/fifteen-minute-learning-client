import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/course-details";
import CourseLayout from "../layouts/course-layout";
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
        element: <CourseLayout />,
        children: [
          {
            index: true,
            element: <Courses />,
          },
          {
            path: ":id",
            element: <CourseDetails />,
          },
        ],
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
