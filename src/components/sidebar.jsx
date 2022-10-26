import { useEffect, useState, useTransition } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink, useParams } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
const Sidebar = () => {
  const [courses, setCourses] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_host}/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setIsPending(false);
      });
    return () => {};
  }, []);
  return (
    <section className='text-center sm:text-left'>
      <h1 className='text-xl font-semibold'>Latest courses</h1>
      {isPending ? (
        <VscLoading className='animate-spin text-3xl w-full h-12 mt-12' />
      ) : (
        <div className='mt-3 space-y-4'>
          {courses.map((el) => (
            <Course key={el.id} {...el} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Sidebar;

const Course = ({ title, id }) => {
  const params = useParams();
  return (
    <>
      <NavLink
        to={`/courses/${id}`}
        className={({ isActive }) => {
          return isActive
            ? "text-indigo-500" + navStyle
            : "text-gray-800 " + navStyle;
        }}
      >
        {title}
        <IoIosArrowForward
          className={`${
            params.id === id ? "block" : "hidden"
          } group-hover:block transition-all`}
        />
      </NavLink>
    </>
  );
};
const navStyle =
  " flex items-center mx-auto w-max sm:mx-0 group font-semibold gap-1 hover:text-indigo-500";
