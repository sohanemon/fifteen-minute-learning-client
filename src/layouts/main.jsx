import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Outlet />
    </div>
  );
};

export default Main;
