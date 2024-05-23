import React from "react";
import dot from "../assets/dot.png";

function Edex() {
  return (
    <div id="edex" className="flex h-[100%] justify-between w-full bg-white">
      <div className="flex flex-col items-center h-[100vh] w-[40vw] justify-between">
        <div className="flex flex-col mt-12 gap-9 opacity-70">
          <div className="flex items-center">
            <div className="text-[18px] -rotate-90 font-bold font-poppins">
              Education
            </div>
            <div className="flex gap-5 justify-center items-center font-poppins p-4 w-full ">
              {/* add education */}
              <div>
                <div className="text-[20px]">
                  Sri Ramakrishna Engineering College
                </div>
                <div className="text-gray-600">
                  Bachelor of Technology | 2020-2024
                </div>{" "}
                <div> Artificial Intelligence and Data Science</div>
                <div>CGPA 9.07</div>
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-black "></div>
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <div className="-rotate-90 text-[18px] font-bold font-poppins">
                Experience
              </div>
              {/* add experience  */}
              <div className="flex flex-col gap-5 justify-center items-center p-4 w-full font-poppins">
                <div>
                  <div className="text-[20px]">
                    Edsols Innovations Private Limited
                  </div>
                  <div className="text-gray-600">
                    AI Development and Testing Intern
                  </div>
                  <div className="font-light text-[1rem]">October 2022</div>
                  <div className="flex gap-4">
                    <a
                      className=" hover:underline hover:underline-offset-2 hover:duration-200 hover:ease-in-out"
                      href="http://edsols.in/"
                      target="_blank"
                    >
                      edsols.in
                    </a>
                    <a
                      className=" hover:underline hover:underline-offset-2 hover:duration-200 hover:ease-in-out"
                      href=""
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-[20px]">
                    Edsols Innovations Private Limited
                  </div>
                  <div className="text-gray-600">
                    AI Development and Testing Intern
                  </div>
                  <div className="font-light text-[1rem]">July 2023 - ...</div>
                  <div className="flex gap-4">
                    <a
                      className=" hover:underline hover:underline-offset-2 hover:duration-200 hover:ease-in-out"
                      href="http://edsols.in/"
                      target="_blank"
                    >
                      edsols.in
                    </a>
                    <a
                      className=" hover:underline hover:underline-offset-2 hover:duration-200 hover:ease-in-out"
                      href=""
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-[2rem] gap-3">
            <div className="w-[20px]">
              <img src={dot} alt="" />
            </div>
            <div className="w-[20px]">
              <img src={dot} alt="" />
            </div>
            <div className="w-[20px]">
              <img src={dot} alt="" />
            </div>
            <div className="text-[1rem]">Yet to be Updated.</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[40vw] p-12 bg-[rgb(0,3,16)] h-[100vh] justify-center ">
        <div className="flex flex-col gap-10 text-[16px] font-poppins pb-10 border-b-2 border-[rgb(92,23,122)]">
          <div className="flex justify-start items-center gap-5">
            <div className="flex -rotate-90 justify-center text-[18px] w-[40px] text-white font-bold">
              Skills
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 font-medium text-white">
                <div className="tracking-wide">Programming: </div>{" "}
                <div className="tracking-wide">Frameworks: </div>
                <div className="tracking-wide">DBMS: </div>{" "}
                <div className="tracking-wide">Web Technologies: </div>
              </div>

              <div className="flex flex-col gap-2 text-gray-400">
                <div className="flex">
                  <div className="font-bold">Python</div>, C++, Java, R
                </div>{" "}
                <div>TensorFlow, Pandas, NumPy</div>
                <div>SQL, NoSQL</div>
                <div>HTML, CSS, React</div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="flex flex-col gap-10 text-[16px] font-poppins py-10 border-b-2 border-[rgb(171,0,86)]">
          <div className="flex justify-start items-center gap-5">
            <div className="flex -rotate-90 justify-center w-[40px] text-[18px] text-white font-bold">
              Certifications
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 text-white">
                <div className=" flex gap-2 tracking-wide">
                  <div> Deep Learning Fundamentals with Keras</div>
                  <div className="opacity-70">NVIDIA</div>
                </div>
                <div className=" flex gap-2 tracking-wide">
                  <div> Fundamentals of Deep Learning</div>
                  <div className="opacity-70">NVIDIA</div>
                </div>
                <div className=" flex gap-2 tracking-wide">
                  <div> Getting Started with AI on Jetson Nano</div>
                  <div className="opacity-70">NVIDIA</div>
                </div>
                <div className=" flex gap-2 tracking-wide">
                  <div>Deploying Scalable ML for Data Science</div>
                  <div className="opacity-70">LinkedIn</div>
                </div>
                <div className=" flex gap-2 tracking-wide">
                  <div> AWS Machine Learning Essential Training</div>
                  <div className="opacity-70">LinkedIn</div>
                </div>
                <div className=" flex gap-2 tracking-wide">
                  <div>B1 Business Preliminary </div>
                  <div className="opacity-70">BEC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 text-[16px] font-poppins py-10">
          <div className="flex justify-start items-center gap-5">
            <div className="flex -rotate-90 justify-center w-[40px] text-[18px] text-white font-bold">
              Achievements
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 text-white">
                <div className=" flex gap-2 tracking-wide">
                  <div> EU-REKA 2021 by IEEE</div>
                  <div className="opacity-70">Runner Up</div>
                </div>
                <div className=" flex gap-2 tracking-wide">
                  <div>Innotech Ideation Contest</div>
                  <div className="opacity-70">Winner</div>
                </div>
                <div className=" flex gap-2 tracking-wide">
                  <div>5 Star Gold Badge for Python</div>
                  <div className="opacity-70">HackerEarth</div>
                </div>
                <div className=" flex gap-2 tracking-wide">
                  <div>5 Star Gold Badge for Problem Solving</div>
                  <div className="opacity-70">HackerEarth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="edexbg w-[20vw] p-4 flex flex-col-reverse items-end justify-between">
        <button className="bg-black border border-pink-700 font-poppins text-white py-3 px-4 rounded-lg my-2 hover:bg-pink-700 hover:duration-150">
          download resume
        </button>
      </div>
    </div>
  );
}

export default Edex;
