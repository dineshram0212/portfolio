import {React, useState} from "react";
import ln from "../assets/liname.png";
import gh from "../assets/ghub.png";
import md from "../assets/medium.png";
import gm from "../assets/gmail.png";
import sa from "../assets/arrow.png";
import da from "../assets/doublearrow.png";

// function Contact() {
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the entered email and message to the console
    console.log("Email:", email);
    console.log("Message:", message);

    // Optionally, you can send this data to your backend or perform other actions
  };
  return (
    <div id="contact" className="flex flex-col bg-white h-[100vh]">
      <div className="flex h-[70vh] ">
        <div className="font-poppins text-[3rem] flex justify-center items-center  w-1/2">
          mail me!
        </div>
        <div className="border-l-[1px] border-black my-14"></div>
        <div className="flex w-1/2 justify-between items-center ">
          <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 pl-36">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-[0px_3px_30px_-1px_rgba(0,0,0,0.1)] p-3 rounded-lg outline-none w-96 h-12 text-gray-600 mb-6"
                placeholder="Your Email Address"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow-[0_3px_30px_-1px_rgba(0,0,0,0.1)] p-3 text-gray-600 outline-none rounded-lg w-96 h-56 mb-6"
                placeholder="Enter Message..."
                required
              ></textarea>
              <button
                type="submit"
                className="shadow-[0_-1px_20px_-1px_rgba(0,0,0,0.1)] hover:text-black hover:bg-gray-500 hover:duration-100 hover:ease-in-out h-10 rounded-2xl w-24 bg-slate-300 text-gray-600"
              >
                Send
              </button>
            </form>
          </div>

          {/* <div className="flex flex-col">
            <div className="flex flex-col gap-6 pl-36 items-end">
              <input
                className=" shadow-[0px_3px_30px_-1px_rgba(0,0,0,0.1)] p-3 rounded-lg outline-none w-96 h-12 text-gray-600"
                type="email"
                placeholder="Your Email Address"
              />
              <textarea
                className="shadow-[0_3px_30px_-1px_rgba(0,0,0,0.1)] p-3 text-gray-600 outline-none rounded-lg w-96 h-56"
                type="message"
                placeholder="Enter Message..."
              ></textarea>
              <button className="shadow-[0_-1px_20px_-1px_rgba(0,0,0,0.1)] hover:text-black hover:bg-gray-500 hover:duration-100 hover:ease-in-out h-10 rounded-2xl w-24 bg-slate-300 text-gray-600">
                Send
              </button>
            </div>
          </div> */}
          <div className="flex flex-col h-full w-12 justify-end items-center">
            <a href="#home">
              <img
                className="h-10 p-2 hover:mb-2 hover:duration-100 hover:ease-in-out"
                src={da}
                alt="home"
              />
            </a>
          </div>
        </div>
      </div>

      <div id="namebox" className="flex bg-black h-[30vh]">
        <div className="flex flex-col w-1/2 font-serif items-end pr-7 justify-center">
          <div className=" text-[25px] text-gray-500">Dinesh Ram R.</div>
          <div className="text-gray-500">AI and Data Science</div>
        </div>
        <div className="border-l-[1px] border-gray-500 my-14"></div>

        <div className="flex flex-col items-start justify-center w-1/2 pl-7">
          <div className="grid grid-cols-2 gap-4 items-center  ">
            <div>
              <a
                href="https://www.linkedin.com/in/dineshram-r/"
                target="_blank"
              >
                <img
                  className="w-[75px] opacity-50 hover:opacity-100 hover:duration-100"
                  src={ln}
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/dineshram0212" target="_blank">
                <img
                  className="w-[75px] opacity-50 hover:opacity-100 hover:duration-100"
                  src={gh}
                  alt=""
                />
              </a>
            </div>{" "}
            <div>
              <a href="mailto:dineshramdsml@gmail.com" target="_blank">
                <img
                  className="w-[70px] opacity-50 hover:opacity-100 hover:duration-100"
                  src={gm}
                  alt=""
                />
              </a>
            </div>{" "}
            <div>
              <a href="" target="_blank">
                <img
                  className="w-[85px] opacity-50 hover:opacity-100 hover:duration-100"
                  src={md}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
