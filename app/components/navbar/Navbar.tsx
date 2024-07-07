import React from "react";

const Navbar = () => {
  return (
    <div className=" text-white w-1/5 h-screen bg-gradient-to-b from-darkblue to-lightpurple">
      <div className="p-4 font-bold text-lg">Property Manager</div>
      <nav className="">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block p-4 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/50 transition duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-4 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-400/50 transition duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-4 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-300/50 transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
