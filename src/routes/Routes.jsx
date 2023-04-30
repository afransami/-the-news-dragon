import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/Home/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Home/Terms/Terms";
import Career from "../Pages/Career/Career";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: 'career',
        element: <Career></Career>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },

  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://the-dragon-news.vercel.app/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: (
      <PrivateRoute>
        <NewsLayout></NewsLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`https://the-dragon-news.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
