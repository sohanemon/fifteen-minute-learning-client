import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/course-details";
import CourseLayout from "../layouts/course-layout";
import Main from "../layouts/main";
import About from "../pages/about";
import Blogs from "../pages/blogs";
import Checkout from "../pages/checkout";
import Courses from "../pages/courses";
import Faq from "../pages/faq";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import PrivateRoute from "./private-route";

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
            loader: () => fetch(`${process.env.REACT_APP_host}/courses`),
            element: <Courses />,
          },
          {
            path: ":id",
            element: <CourseDetails />,
          },
        ],
      },
      {
        path: "/faq",
        loader: () => fetch(`${process.env.REACT_APP_host}/faq`),
        element: <Faq />,
      },
      {
        path: "/blogs",
        loader: () => fetch(`${process.env.REACT_APP_host}/blogs`),
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_host}/courses/${params?.id}`),
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
