import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Main = () => {
  return (
    <div className='dark:bg-gray-800 min-h-screen   '>
      <Toaster position='top-center' reverseOrder={false} />
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Main;
