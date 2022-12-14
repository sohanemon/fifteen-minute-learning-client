import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
const Courses = () => {
  const courses = useLoaderData();
  return (
    <>
      <section>
        <div className='py-16 '>
          <div className='container m-auto px-6 text-gray-500 md:px-12 xl:px-0'>
            <div className='grid lg:grid-cols-2 gap-6'>
              {courses.map((el) => (
                <Card key={el.id} {...el} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;

function Card({ thumbnail, title, id, description }) {
  return (
    <motion.div
      initial={{
        y: "60px",
        opacity: 0.1,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      className='max-w-sm mx-auto'
    >
      <div className='bg-white dark:bg-gray-500 rounded-xl shadow hover:shadow-md px-8 space-y-4 py-4 sm:px-12 lg:px-8'>
        <img
          className='object-contain h-36 mx-auto drop-shadow-sm'
          src={thumbnail}
          alt='illustration'
          loading='lazy'
        />
        <h3 className='text-2xl font-semibold text-cyan-900 dark:text-cyan-300'>
          {title}
        </h3>
        <p className='mb-6 line-clamp-2 dark:text-gray-100'>{description}</p>
        <Link
          to={`/courses/${id}`}
          className='block font-medium text-blue-600 dark:text-blue-200'
        >
          Know more
        </Link>
      </div>
    </motion.div>
  );
}
