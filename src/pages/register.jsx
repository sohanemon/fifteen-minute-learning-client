import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/user-provider";
const Register = () => {
  const { googleSignIn, githubSignIn, emailSignUp } = useUser();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    emailSignUp(data).then(() => navigate("/"));
  };
  const handleGoogle = async () => {
    googleSignIn().then(() => navigate("/"));
  };
  const handleGithub = async () => {
    githubSignIn().then(() => navigate("/"));
  };
  return (
    <>
      <div className='m-auto container px-12 sm:px-0 mx-auto'>
        <div className='mx-auto h-full md:w-10/12 lg:w-6/12'>
          <div className='m-auto  py-8 sm:px-20 xl:w-10/12'>
            <div className=' rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10'>
              <div className='grid gap-6 sm:grid-cols-2'>
                <button
                  onClick={handleGoogle}
                  className='h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700'
                >
                  <div className='flex items-center justify-center space-x-4'>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/300/300221.png'
                      className='w-5'
                      alt=''
                    />

                    <span className='block w-max text-xs tracking-wide text-indigo-700 dark:text-white'>
                      With Google
                    </span>
                  </div>
                </button>
                <button
                  onClick={handleGithub}
                  className='h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700'
                >
                  <div className='flex items-center justify-center space-x-4 text-white'>
                    {" "}
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/733/733553.png'
                      className='w-5'
                      alt=''
                    />
                    <span className='block w-max text-xs tracking-wide text-white'>
                      With Github
                    </span>
                  </div>
                </button>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='mt-10 space-y-8 dark:text-white'
              >
                <div>
                  <div className='relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-indigo-400 dark:before:bg-indigo-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
                    <input
                      {...register("displayName")}
                      type='text'
                      placeholder='Enter name'
                      className='w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition'
                    />
                  </div>
                </div>
                <div>
                  <div className='relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-indigo-400 dark:before:bg-indigo-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
                    <input
                      {...register("email")}
                      type='email'
                      placeholder='Enter email'
                      className='w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition'
                    />
                  </div>
                </div>
                <div>
                  <div className='relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-indigo-400 dark:before:bg-indigo-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
                    <input
                      {...register("photoURL")}
                      type='text'
                      placeholder='Enter photo URL'
                      className='w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition'
                    />
                  </div>
                </div>
                <div className='flex flex-col items-end'>
                  <div className='w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-indigo-400 dark:before:bg-indigo-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
                    <input
                      {...register("password")}
                      type='password'
                      placeholder='Enter password'
                      className='w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition'
                    />
                  </div>
                  <button type='reset' className='-mr-3 w-max p-3'>
                    <span className='text-sm tracking-wide text-indigo-600 dark:text-indigo-400'></span>
                  </button>
                </div>
                <div>
                  <button className='w-full rounded-full bg-indigo-500 dark:bg-indigo-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-indigo-600 focus:bg-indigo-600 active:bg-indigo-800'>
                    <span className='text-base font-semibold text-white dark:text-gray-900'>
                      Register
                    </span>
                  </button>
                  <Link to={"/login"} type='reset' className='-ml-3 w-max p-3'>
                    <span className='text-sm tracking-wide text-indigo-600 dark:text-indigo-400'>
                      Have an account
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
