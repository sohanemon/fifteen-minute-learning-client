import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const CourseLayout = () => {
  return (
    <div className='container grid grid-cols-12 mx-auto '>
      <aside className='col-span-3'>
        <Sidebar />
      </aside>
      <main className='col-span-9'>
        <Outlet />
      </main>
    </div>
  );
};

export default CourseLayout;
