import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import AddMovie from "../pages/Dashboard/AddNewMovie";
import Movie from "../pages/Dashboard/Movie";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/movie"
          element={
            <PrivateRoutes>
              <Movie />
            </PrivateRoutes>
          }
        />
        <Route
          path="/add-movie"
          element={
            <PrivateRoutes>
              <AddMovie />
            </PrivateRoutes>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
