import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
const Blogs = () => {
  const data = useLoaderData();
  return (
    <section className='container mx-auto mt-12 p-5 space-y-10'>
      <>
        {data.map((el) => (
          <motion.div {...pingMotion} key={el.id} className='md:flex-grow'>
            <h2 className='text-2xl font-medium text-gray-900 dark:text-white title-font mb-2'>
              {el.question}
            </h2>
            <p className='leading-relaxed dark:text-gray-300'>{el.answer}</p>
          </motion.div>
        ))}
      </>
    </section>
  );
};

export default Blogs;
export const pingMotion = {
  initial: { opacity: 0.1 },
  whileInView: { opacity: 1, transition: { delay: 0.1 } },
};
