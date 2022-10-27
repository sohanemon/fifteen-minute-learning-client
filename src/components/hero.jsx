import { Link } from "react-router-dom";
import { PrimaryBtn, SecondaryBtn } from "./buttons";

const Hero = () => {
  return (
    <>
      <div className='relative container border-l border-r m-auto !p-4 px-6 md:px-12 lg:px-7 lg:mt-12 '>
        <div className='p-4 md:w-9/12 lg:w-7/12  mx-auto'>
          <h1 className='text-gray-900 dark:text-white font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl'>
            Shaping a world with an endless{" "}
            <span className='text-indigo-600'>imagination.</span>
          </h1>
          <p className='mt-8 text-gray-700 dark:text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            incidunt nam itaque sed eius modi error totam sit illum. Voluptas
            doloribus asperiores quaerat aperiam. Quidem harum omnis beatae
            ipsum soluta!
          </p>
          <div className='mt-16 gap-4 flex flex-col sm:flex-row'>
            <Link to='/about'>
              <SecondaryBtn>About us</SecondaryBtn>
            </Link>

            <Link to={"/courses"}>
              <PrimaryBtn>Get started</PrimaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
