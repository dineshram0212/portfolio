import React from "react";
import srec from "../assets/srec.png";
import edsols from "../assets/edsols.png";

function Edexp() {
  return (
    <div id="edexp" className="flex w-full bg-gradient-to-r  from-gray-500 via-cyan-900 to-gray-600 h-[100vh] justify-start ">
      <div className="flex items-start p-6 gap-4">
        <div className="flex flex-col gap-2 justify-center rounded-3xl shadow-[0px_0px_10px_-1px_rgba(0,0,0,0.1)] card ">
          <div className="pl-8 pt-7 pb-6">
            <div className="text-[18px] font-bold font-poppins">Education</div>
            <div className="flex gap-5 items-center p-4 w-full ">
              <div className="w-32">
                <img src={srec} alt="srec logo" />
              </div>
              <div>
                <div className="text-[20px]">
                  Sri Ramakrishna Engineering College
                </div>
                <div className="text-gray-600">Bachelor of Technology</div>{" "}
                <div> Artificial Intelligence and Data Science</div>
                <div>CGPA 9.07</div>
              </div>
            </div>
          </div>
        </div>
        <a href="" target="_blank">
          <div className="flex flex-col gap-2 justify-center rounded-3xl card shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
            <div className="pl-8 pt-7 pb-6">
              <div className="text-[18px] font-bold font-poppins">
                Experience
              </div>
              <div className="flex gap-5 items-center p-4 w-full ">
                <div className="w-32">
                  <img src={edsols} alt="srec logo" />
                </div>
                <div>
                  <div className="text-[20px]">
                    Edsols Innovations Private Limited
                  </div>
                  <div className="text-gray-600">
                    AI Development and Testing Intern
                  </div>
                  <div className="font-light text-[1rem]">October 2021</div>
                  <div>
                    <a href="http://edsols.in/" target="_blank">
                      edsols.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Edexp;
