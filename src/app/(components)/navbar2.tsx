import React from 'react';
import Title from './Title';

const Navbar2 = () => {
    return (
        <nav className={`navbar transition-all font-myFont3 w-full fixed top-0 left-0 right-0 z-50 bg-greenDefault bg-white text-black`}>
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl ">
            <Title/>
          </a>
          <ul className="menu menu-horizontal hidden lg:inline-flex px-1 text-base">
            <li><a>Buy</a></li>
            <li><a>Refinance</a></li>
            <li><a>HELOC</a></li>
            <li><a>Rates</a></li>
            <li><a>Better+</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Click</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <a className={`text-black`}>Sign in</a>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar2;