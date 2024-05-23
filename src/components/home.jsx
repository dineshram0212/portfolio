import React from "react";
import nn from "../assets/nn.png";
import qu from "../assets/quote.png";
const Home = () => {
  return (
    <div className="text-black flex justify-start items-center h-[90vh] w-full ">
      <div className="flex felx-col items-end w-full space-x-3 m-20 p-3 gap-6">
        <div className="flex justify-start items-end gap-3">
          <div className="text-[7rem] font-poppins leading-tight items-end pr-0 text-right whitespace-normal">
            <h1>
              Working
              <br />
              with
            </h1>
          </div>
          <div className="text-[13rem] font-medium pb-[14px] leading-none bg-gradient-to-r from-gray-500 via-cyan-900 to-gray-600 text-transparent bg-clip-text inline-block">
            <h1>AI.</h1>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="object-contain max-w-xs ">
            <img
              className="shadow-[0_35px_60px_-15px_rgba(0,5,32,0.5)] rounded-tl-2xl rounded-br-2xl"
              src={nn}
              alt="mlim"
            />
          </div>
          <div className="object-contain max-w-xs">
            <img
              className="shadow-[0_35px_60px_-15px_rgba(96,117,117,0.5)] rounded-tr-2xl rounded-bl-2xl"
              src={qu}
              alt="mlim"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
