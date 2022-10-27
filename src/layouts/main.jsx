import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Main = () => {
  return (
    <div className='dark:bg-gray-800 min-h-screen   '>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Main;
