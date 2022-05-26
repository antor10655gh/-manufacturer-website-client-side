import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Pages/Blog/Blog";
import BusinessSummary from "./Pages/BusinessSummary/BusinessSummary";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Reviews from "./Pages/Reviews/Reviews";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import Tools from "./Pages/Tools/Tools";
import ToolsOrder from "./Pages/Tools/ToolsOrder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import DashboardIndex from "./Pages/Dashboard/DashboardIndex";
import Payment from "./Pages/Dashboard/Payment";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="lg:px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/tools"
          element={
            <RequireAuth>
              <Tools></Tools>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<DashboardIndex></DashboardIndex>}></Route>
          <Route path="myOrders" element={<MyOrder></MyOrder>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:orderId" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/myPortfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route
          path="/businessSummary"
          element={<BusinessSummary></BusinessSummary>}
        ></Route>
        <Route
          path="/toolsOrder/:productId"
          element={
            <RequireAuth>
              <ToolsOrder></ToolsOrder>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
