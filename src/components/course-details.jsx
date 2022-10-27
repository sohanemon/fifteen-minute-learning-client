import { useEffect, useRef, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { MdVideoSettings } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";
import { PrimaryBtn } from "./buttons";
import { FaFileDownload } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";
const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_host}/courses/${params?.id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));

    return () => {};
  }, [params]);
  const ref = useRef(null);
  return (
    <>
      <div className='py-16 bg-white '>
        <div
          className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'
          ref={ref}
        >
          <div className='space-y-6 md:space-y-0  md:gap-6 lg:items-center lg:gap-12'>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
              <img
                className='object-cover order-last md:order-first max-w-lg w-full rounded-xl shadow-lg'
                src={course.image}
                alt={course.title}
                loading='lazy'
              />
              <h2 className='text-2xl text-gray-900 font-bold md:text-4xl'>
                {course.title}
                <span className='text-xs font-semibold align-middle font-cedarville'>
                  with
                  <span className='text-sm font-cursive'>
                    {course.instructor}
                  </span>
                </span>

                <ReactToPdf
                  options={{
                    orientation: "landscape",
                    unit: "in",
                  }}
                  targetRef={ref}
                  x={0.5}
                  y={0.5}
                  scale={0.8}
                  filename={course?.title}
                >
                  {({ toPdf }) => (
                    <FaFileDownload
                      onClick={toPdf}
                      title='Download as PDF'
                      className='mt-2 text-2xl text-indigo-500 hover:animate-bounce transition-all cursor-pointer'
                    />
                  )}
                </ReactToPdf>
              </h2>
            </div>
            <div className='md:7/12 mx-auto'>
              <p className='first-letter:text-2xl mt-6 text-gray-600'>
                {course.description}
              </p>
            </div>
          </div>
          <Statistics course={course} />
          <h1 className='text-xl font-semibold text-gray-800 pt-4'>
            Your learning outcomes:
          </h1>
          <ul className='list-disc list-inside'>
            {course.outcomes?.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>

          {/* <div className='ml-auto w-max flex flex-col items-center'>
            <p className='text-2xl  font-semibold text-indigo-600 text-center font-cursive mb-2'>
              <span className='font-bold text-sm text-gray-600 decoration-solid decoration-2 decoration-indigo-500  line-through'>
                2000/=
              </span>
              <span className='flex items-center '>{course.price}/=</span>
            </p>
            <PrimaryBtn>Checkout</PrimaryBtn>
          </div> */}
          <Link to={`/checkout/${course.id}`} className='w-max ml-auto block'>
            <PrimaryBtn>Get Premium Access</PrimaryBtn>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;

function Statistics({ course }) {
  return (
    <section className='flex text-3xl justify-evenly mt-10'>
      <div className='flex flex-col items-center gap-2'>
        <MdVideoSettings />
        <p className='text-sm'>{course.duration}+ hrs. recorded video.</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <BsFillStarFill />
        <p className='text-sm'>{course.rating} star ratings.</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <VscProject />
        <p className='text-sm'>{course.projects} awesome projects.</p>
      </div>
    </section>
  );
}
