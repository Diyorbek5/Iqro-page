import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div style={{ background: 'var(--secondary-gradient-blue, linear-gradient(180deg, #131A15 0%, #090B3A 100%))' }} className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-center p-8 mx-auto lg:justify-center xl:px-0">
        {/* menu  */}
        <div className="text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 md:flex">
            <li className="mr-3 nav__item">
              <Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer z-10 inline-block sm:px-6 lg:px-10 xl:px-12 py-2 sm:text-sm lg:text-lg xl:text-xl px-12 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                Услуги
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link to="works" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer z-10 inline-block sm:px-6 lg:px-10 xl:px-12 py-2 sm:text-sm lg:text-lg xl:text-xl px-12 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                Как мы работаем
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link to="results" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer z-10 inline-block sm:px-6 lg:px-10 xl:px-12 py-2 sm:text-sm lg:text-lg xl:text-xl px-12 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                Результат
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer z-10 inline-block sm:px-6 lg:px-10 xl:px-12 py-2 sm:text-sm lg:text-lg xl:text-xl px-12 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                Заказать
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
