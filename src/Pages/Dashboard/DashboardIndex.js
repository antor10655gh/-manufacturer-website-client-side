import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const DashboardIndex = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?customerEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  return (
    <div>
      <div className="lg:px-12 pt-5 lg:pt-12 grid lg:grid-cols-3 place-items-center gap-5">
        <div>
          <div class="p-3 flex justify-between items-center w-72 bg-info text-white shadow-xl">
            <div>
              <h2 className="text-2xl font-bold">Total Orders</h2>
              <p>Last Year Expenses</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">{orders.length}</h2>
            </div>
          </div>
        </div>
        <div>
          <div class="p-3 flex justify-between items-center w-72 bg-warning text-white shadow-xl">
            <div>
              <h2 className="text-2xl font-bold">Clients</h2>
              <p>Total Clients Profit</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">$ 558</h2>
            </div>
          </div>
        </div>
        <div>
          <div class="p-3 flex justify-between items-center w-72 bg-success text-white shadow-xl">
            <div>
              <h2 className="text-2xl font-bold">Followers</h2>
              <p>People Interested</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">46%</h2>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------- */}
      <div className="lg:px-12 pt-5 lg:pt-24 grid lg:grid-cols-3 place-items-center gap-5">
        <div>
          <div class="p-3 w-72 bg-white text-error shadow-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">72%</h2>
              <progress
                class="progress progress-info w-32"
                value="70"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-gray-400">Income Target</p>
            </div>
          </div>
        </div>
        <div>
          <div class="p-3 w-72 bg-white text-success shadow-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">54%</h2>
              <progress
                class="progress progress-success w-32"
                value="50"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-gray-400">Expenses Target</p>
            </div>
          </div>
        </div>
        <div>
          <div class="p-3 w-72 bg-white text-warning shadow-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">42%</h2>
              <progress
                class="progress progress-warning w-32"
                value="40"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-gray-400">Spendings Target</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
