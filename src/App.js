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
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
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
      </Routes>
    </div>
  );
}

export default App;
