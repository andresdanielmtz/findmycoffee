import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="h-full px-5 py-4 overflow-y-auto bg-gray-50 dark:bg-secondary">
        <nav className="flex flex-col  space-y-2 justify-center">
          <ul>
            <li className="px-2 py-1 text-xl font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
              <Link to="/home"> Home </Link>
            </li>
            <li className="px-2 py-1 text-xl font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
              <Link to="/aboutUs"> About Us </Link>
            </li>
            <li className="px-2 py-1 text-xl font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
              <Link to="/dashboard"> Dashboard </Link>
            </li>
            
            <li className="px-2 py-1 text-xl font-bold text-white dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md">
              <Link to="/profile"> Profile </Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  );
}
