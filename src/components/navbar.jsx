import { Menu } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../contexts/user-provider";

const Navbar = () => {
  const { pathname } = useLocation();
  const { user, logOut } = useUser();
  return (
    <>
      <header className='sticky top-0 bg-white z-50 shadow'>
        <nav className=' w-full bg-white '>
          <div className='container m-auto px-6 md:px-12 lg:px-6'>
            <div className='flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0'>
              <div className='w-full flex justify-between lg:w-auto'>
                <Link to={"/"} className='flex items-center'>
                  <img
                    src='https://images.vexels.com/media/users/3/151566/isolated/lists/2e8706eaadcd2d297a542ac2385de370-15-minutes-clock-icon.png'
                    className='mr-3 h-6 sm:h-9'
                    alt='15ml Logo'
                  />
                  <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                    15MinuteLearning
                  </span>
                </Link>

                <button
                  aria-label='humburger'
                  id='hamburger'
                  className='relative w-10 h-10 -mr-2 lg:hidden'
                >
                  <div
                    aria-hidden='true'
                    id='line'
                    className='inset-0 w-6 h-0.5 m-auto rounded bg-gray-500 transtion duration-300'
                  />
                  <div
                    aria-hidden='true'
                    id='line2'
                    className='inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-gray-500 transtion duration-300'
                  />
                </button>
              </div>

              <div
                hidden
                className='w-full bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-auto lg:flex'
              >
                <div className='block w-full lg:items-center lg:flex'>
                  <ul className='space-y-6 pb-6 tracking-wide font-medium text-gray-600 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0'>
                    {navItems.map((el) => (
                      <li key={el} className='block md:px-3'>
                        <Link
                          to={`/${el === "home" ? "" : el}`}
                          className={
                            pathname.includes(el) ||
                            (pathname === "/" && el === "home")
                              ? "text-indigo-500 dark:text-white" + LinkClass
                              : "dark:text-gray-400 text-gray-700 " + LinkClass
                          }
                          aria-current='page'
                        >
                          {el}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ul className='border-t space-y-2 pt-2 lg:space-y-0 lg:space-x-2 lg:pt-0 lg:pl-2 lg:border-t-0 lg:border-l lg:items-center lg:flex'>
                    {user?.uid ? (
                      <>
                        <Menu>
                          <Menu.Button title='more' className='group relative'>
                            {" "}
                            <img
                              data-tip='ok'
                              data-for='#ok'
                              src={
                                user?.photoURL
                                  ? user.photoURL
                                  : "https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
                              }
                              className='w-7 h-7 ring-1 rounded-full'
                              alt=''
                            />
                            <p className='hidden group-hover:inline-block absolute w-max right-0 mt-4 bg-white px-4 py-2 rounded-md shadow-lg'>
                              {user?.displayName}
                            </p>
                          </Menu.Button>
                          <Menu.Items className='mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={logOut}
                                  className={`${
                                    active &&
                                    "hover:ring-indigo-500 ring-1 text-indigo-500 "
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  href='/account-settings'
                                >
                                  Sign Out
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            type='button'
                            to={"/login"}
                            className='w-full py-3 px-6 rounded-md text-center transition active:bg-sky-200 focus:bg-sky-100 sm:w-max'
                          >
                            <span className='block text-indigo-600 font-semibold'>
                              Sign in
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={"/register"}
                            type='button'
                            className='w-full py-3 px-6 rounded-md text-center transition bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:bg-sky-600 sm:w-max'
                          >
                            <span className='block text-white font-semibold'>
                              Register
                            </span>
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

const LinkClass =
  " capitalize block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 md:dark:hover:text-white font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
const navItems = ["home", "courses", "blogs", "FAQ", "about"];
