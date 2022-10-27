import { useLoaderData } from "react-router-dom";

const Faq = () => {
  const data = useLoaderData();
  return (
    <>
      <section className='dark:bg-gray-800 dark:text-gray-100'>
        <div className='container flex flex-col justify-center p-4 mx-auto md:p-8'>
          <p className='p-2 text-sm font-medium tracking-wider text-center uppercase'>
            How we works
          </p>
          <h2 className='mb-12 text-4xl font-bold leading-none text-center sm:text-5xl'>
            Frequently Asked Questions
          </h2>
          <div className='grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32'>
            {data.map((el) => (
              <>
                <div key={el.id}>
                  <h3 className='font-semibold'>{el.question}?</h3>
                  <p className='mt-1 dark:text-gray-400'>{el.answer}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
