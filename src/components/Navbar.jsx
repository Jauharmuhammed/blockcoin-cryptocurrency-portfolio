import { Link } from "react-router-dom";

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <div className="md:flex justify-between p-4 md:px-16 md:py-4 bg-slate-100 dark:bg-slate-900 md:mb-10">
      <div className="flex gap-5 items-center justify-between md:justify-start">
        <Link to="/">
          <h2 className="font-morganite text-5xl cursor-pointer tracking-[1px] dark:text-white">
            block<span className="text-gray-500 dark:text-gray-400">coin</span>
          </h2>
        </Link>
        <div className="cursor-pointer dark:text-white" onClick={()=> setDarkMode(!darkMode)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
            />
          </svg>
        </div>
      </div>
      <ul className="list-none hidden md:flex gap-5 items-center ">
        <Link to="/">
          <li className="text-slate-700 hover:text-slate-900 hover:pb-1 transition duration-300  dark:text-white ">
            Home
          </li>
        </Link>
        <Link to="/coins">
          <li className="text-slate-700 hover:text-slate-900 hover:pb-1 transition duration-300  dark:text-white ">
            Cryptocurrencies
          </li>
        </Link>
        <Link to="/exchanges">
          <li className="text-slate-700 hover:text-slate-900 hover:pb-1 transition duration-300  dark:text-white ">
            Exchange
          </li>
        </Link>
        <Link to="/news">
          <li className="text-slate-700 hover:text-slate-900 hover:pb-1 transition duration-300  dark:text-white ">
            News
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
