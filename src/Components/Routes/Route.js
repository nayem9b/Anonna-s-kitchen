import { createBrowserRouter } from "react-router-dom";
import AddServices from "../AddServices/AddServices";
import Blogs from "../Blogs/Blogs";
import EditReview from "../EditReview/EditReview";
import Home from "../Home/Home";
import MyReviews from "../MyReviews/MyReviews";
import Root from "../Root/Root";
import AllService from "../Service/AllService/AllService";
import ServiceDetails from "../Service/ServiceDetails";
import LogIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <LogIn></LogIn>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews/edit/:id",
        element: (
          <PrivateRoute>
            <EditReview></EditReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-nayem9b.vercel.app/myreviews/edit/${params.id}`
          ),
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <AllService></AllService>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://server-side-nayem9b.vercel.app/services/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
