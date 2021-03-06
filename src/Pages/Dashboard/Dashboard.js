import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div className="px-6 lg:px-12">
          <h1 className="text-secondary lg:text-4xl">
            Welcome To Your Dashboard
          </h1>
        </div>
        <Outlet />
      </div>
      <div
        class="drawer-side"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>

              <li>
                <Link to="/dashboard/addReview">Add Review</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/manageOrders">Manage All Orders</Link>
              </li>

              <li>
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>

              <li>
                <Link to="/dashboard/users">Make Admin</Link>
              </li>

              <li>
                <Link to="/dashboard/manageProducts">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
