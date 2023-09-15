import { Link } from "react-scroll";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  return (
    <div className="w-full z-50 fixed bg-gray-900 -mt-20">
      <nav className="container relative flex flex-wrap items-center justify-start p-8 mx-auto lg:justify-start xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <Image
                      src="/img/logo.svg"
                      alt="logo image"
                      width="195"
                      height="35"
                      className="sm:w-32 sm:h-6 lg:w-36 lg:h-8 xl:w-48 xl:h-10"
                    />
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden hover:text-teal-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-8 h-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="nonzero"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="nonzero"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 md:hidden">
                  <>
                    <Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} className="transition ease-in-out delay-80  hover:-translate-y hover:scale-90 duration-300 hover:bg-teal-900 cursor-pointer sm:text-md w-full px-4 py-2 -ml-4 text-white rounded-md hover:text-teal-100 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                      Услуги
                    </Link>
                    <Link to="works" spy={true} smooth={true} offset={50} duration={500} className="transition ease-in-out delay-80  hover:-translate-y hover:scale-90 duration-300 hover:bg-teal-900 cursor-pointer sm:text-md w-full px-4 py-2 -ml-4 text-white rounded-md hover:text-teal-100 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                      Как мы работаем
                    </Link>
                    <Link to="results" spy={true} smooth={true} offset={50} duration={500} className="transition ease-in-out delay-80  hover:-translate-y hover:scale-90 duration-300 hover:bg-teal-900 cursor-pointer sm:text-md w-full px-4 py-2 -ml-4 text-white rounded-md hover:text-teal-100 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                      Результат
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="transition ease-in-out delay-80  hover:-translate-y hover:scale-90 duration-300 hover:bg-teal-900 cursor-pointer sm:text-md w-full px-4 py-2 -ml-4 text-white rounded-md hover:text-teal-100 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                      Заказать
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center md:flex md:items-center">
          <ul className="flex items-center justify-end flex-1 pt-6 list-none md:pt-0 md:flex">
            <li className="nav__item">
              <Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} className="transition ease-in-out delay-80 hover:bg-teal-900 hover:-translate-y hover:scale-90 duration-200 cursor-pointer inline-block sm:px-6 lg:px-10 xl:px-12 py-2 sm:text-sm lg:text-lg xl:text-xl font-normal text-white no-underline rounded-md hover:text-teal-100 focus:bg-indigo-100 focus:outline-none">
                Услуги
              </Link>
            </li>
            <li className="nav__item">
              <Link to="works" spy={true} smooth={true} offset={50} duration={500} className="transition ease-in-out delay-80 hover:bg-teal-900 hover:-translate-y hover:scale-90 duration-200 cursor-pointer inline-block sm:px-6 lg:px-10 xl:px-12 py-2 sm:text-sm lg:text-lg xl:text-xl font-normal text-white no-underline rounded-md hover:text-teal-100 focus:bg-indigo-100 focus:outline-none">
                Как мы работаем
              </Link>
            </li>
            <li className="nav__item">
              <Link to="results" spy={true} smooth={true} offset={50} duration={500} className="transition ease-in-out delay-80 hover:bg-teal-900 hover:-translate-y hover:scale-90 duration-200 cursor-pointer inline-block sm:px-6 lg:px-10 xl:px-12 py-2 sm:text-sm lg:text-lg xl:text-xl font-normal text-white no-underline rounded-md hover:text-teal-100 focus:bg-indigo-100 focus:outline-none">
                Результат
              </Link>
            </li>
            <li className="nav__item">
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="transition ease-in-out delay-80 hover:bg-teal-900 hover:-translate-y hover:scale-90 duration-200 cursor-pointer inline-block sm:px-6 lg:px-10 xl:px-12 py-2 sm:text-sm lg:text-lg xl:text-xl font-normal text-white no-underline rounded-md hover:text-teal-100 focus:bg-indigo-100 focus:outline-none">
                Заказать
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
