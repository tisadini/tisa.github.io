import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='font-playFair bg-white border-b-2 py-4 text-center sm:grid sm:grid-cols-2 sm:px-8 md:px-12' >
        <Link className='hidden sm:block sm:text-left sm:font-bold sm:tracking-wide sm:text-xl' to='/'>Tisadini Ossiana</Link>
        <nav className='sm:text-right '>
          <Link to="/">Home</Link>
          <Link className='px-4' to="/Collection">Collection</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
