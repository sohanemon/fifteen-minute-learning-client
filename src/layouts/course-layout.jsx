import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const CourseLayout = () => {
  return (
    <div className='container grid grid-cols-12 mx-auto '>
      <aside className='sm:col-span-3 col-span-full sticky top-[90px] h-max hidden sm:block'>
        <Sidebar />
      </aside>
      <main className='sm:col-span-9 col-span-full'>
        <Outlet />
      </main>
    </div>
  );
};

export default CourseLayout;
