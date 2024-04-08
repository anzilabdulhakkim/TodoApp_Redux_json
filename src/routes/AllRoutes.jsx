import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
function AllRoutes() {
  return (
      <Routes>
        <Route path="/" element={ <PrivateRoutes> <Home /> </PrivateRoutes>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default AllRoutes;
