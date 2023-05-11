// import React, { useContext } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
// import useAdmin from "../CustomHooks/useAdmin";
// import { AuthContext } from "../contexts/AuthProvider";

const DashboardLayout = () => {
  // const { user } = useContext(AuthContext);
  // const [isAdmin] = useAdmin(user.email);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content bg-gray-300 md:bg-inherit">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/all-users">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/add-doctor">Add Doctor</Link>
            </li>
            <li>
              <Link to="/dashboard/manage-doctors">Manage Doctor</Link>
            </li>

            {/* {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/all-users">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-doctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage-doctors">Manage Doctor</Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
