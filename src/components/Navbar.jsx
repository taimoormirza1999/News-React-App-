import { useState } from "react";
import { Link } from "react-router-dom";
import { memo } from "react";
import CategoryLink from "./CategoryLink";

function Navbar({setNewsTitle}){
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  console.log("Navbar render");
  return (
    <div>
      <nav className="bg-gray-700 ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex-1 flex items-center md:justify-between sm:justify-center">
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  className="text-white font-bold text-xl dark:text-white"
                >
                  News 
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex justify-end ">
                <Link
                  to="/login"
                  className="bg-gray-200  px-3 p-2 rounded-sm">
                
               Sign In
                </Link>
               7
                </div>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              
            <Link
                to="/login"
                className="text-gray-300 text-end hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
Login
              </Link>  
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
export default memo(Navbar);