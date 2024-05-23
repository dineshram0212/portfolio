import React from "react";
function About() {
  return (
    <div id="about" className="flex h-[100vh]">
      <div className="flex items-end justify-center w-[4%]">
        <h1 className="font-mono text-2xl -rotate-90 whitespace-nowrap mb-16">
          whoami.
        </h1>
      </div>

      <div className="bg-black w-[40vw] h-full p-10">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col font-poppins">
            <h1 className="text-white text-[2rem]">Hello, I'm Ram</h1>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              deserunt, eveniet debitis, facere natus reiciendis doloribus eaque
              incidunt vel cumque sit ratione delectus temporibus eum asperiores
              tempore, voluptas assumenda error?
            </p>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <div className="text-white text-[28px] font-bold font-serif text-justify">
              “Curiosity is the wick in the candle of learning.”
            </div>
            <div className="text-white text-[16px] font-medium font-poppins">
              - William Arthur Ward
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full image bg-[rgb(255,255,255)] h-[100vh] justify-start "></div>
    </div>
  );
}

export default About;
