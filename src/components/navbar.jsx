import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div
      id="home"
      className="flex h-[10vh] items-center p-3 outline-none w-full bg-[#e9e9e9]"
    >
      <div className="flex font-poppins text-4xl pr-3 font-bold">
        <h1 className="tracking-wider">DINESH RAM R.</h1>
        {/* <div className="text-lg font-light ">
          <h3>AI and Data Science</h3>
        </div> */}
      </div>
      <div class="flex-grow h-[1px] mt-6 bg-black"></div>

      <div className="flex  gap-10 mr-5 text-[17px] pl-7 font-poppins font-light ">
        <div className="about underline underline-offset-[6px]  hover:underline-offset-4 hover:duration-100">
          <a href="#about">whoami.</a>
        </div>
        <div className="projects underline underline-offset-[6px] hover:underline-offset-4 hover:duration-100">
          <a href="#edex">projects.</a>
        </div>
        <div className="exp underline underline-offset-[6px] hover:underline-offset-4 hover:duration-100">
          <a href="#edex">experience.</a>
        </div>
        <div className="contact underline underline-offset-[6px] hover:underline-offset-4 hover:duration-100">
          <a href="#contact">contact.</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;