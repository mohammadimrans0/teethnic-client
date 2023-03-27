import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
// import AdminRoute from "../AdminRoute/AdminRoute";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },

  // DashBoard
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute>
      //   <DashboardLayout />
      // </PrivateRoute>
      <DashboardLayout />
    ),
    errorElement: <DisplayError />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/all-users",
        element: (
          // <AdminRoute>
          //   <AllUsers />
          // </AdminRoute>
          <AllUsers />
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: (
          // <AdminRoute>
          //   <AddDoctor />
          // </AdminRoute>
          <AddDoctor />
        ),
      },
      {
        path: "/dashboard/manage-doctors",
        element: (
          // <AdminRoute>
          //   <ManageDoctor />
          // </AdminRoute>
          <ManageDoctor />
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          // <PrivateRoute>
          //   <Payment />
          // </PrivateRoute>
          <Payment />
        ),
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-eta-red.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
