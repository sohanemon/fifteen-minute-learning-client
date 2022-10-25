import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_host}/courses`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
    return () => {};
  }, []);
  return (
    <section>
      <h1 className='text-xl font-semibold'>Latest courses</h1>
      <div className='mt-3'>
        {courses.map((el) => (
          <Course key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
};

export default Sidebar;

const Course = ({ title, id }) => {
  return (
    <>
      <NavLink
        to={`/courses/${id}`}
        className='block font-semibold text-gray-800'
      >
        {title}
      </NavLink>
    </>
  );
};
