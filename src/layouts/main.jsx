import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Main = () => {
  return (
    <div
      className='dark:bg-gray-800
    '
    >
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Main;
