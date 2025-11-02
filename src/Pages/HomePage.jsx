import About from "./About";
import img from "../../public/github.png";
import WhatDo from "./WhatDo";
import Skills from "./Skills";
import FormValidation from "./FormValidation";

export default function HomePage() {
  return (
    //!perent div
    <>
      <div
        className="h-[35vh] md:h-[100vh]  flex gap-17 md:gap-30 pt-10 p-2 pl-2 "
        style={{ backgroundColor: "#171717" }}
      >
        {/* //* child divs */}
        {/* //todo text-content div */}
        <div className="  w-40 md:w-180 h-50 md:h-150 pl-3 md:pl-10  flex flex-col justify-center items-center ">
          <h1 className="text-white text-[18px] md:text-[3rem] md:font-bold">
            Hi, I am <br /> Gurpreet Singh
          </h1>
          <p
            className="text-white text-[12px] md:text-lg tracking-wider md:w-85"
            style={{ color: "#676767" }}
          >
            FullStack Developer
          </p>
          {/* btn div */}
          <div className="relative flex gap-1 mt-2 w-35 md:w-85 h-4  justify-center">
            <a
              className=" h-1  w-20"
              href="/files/Gurpreet_updated (1).pdf"
              download
            >
              <button className=" absolute top-0 left-0  text-white bg-green-600 text-[10px] md:text-lg border-white border-1 w-1/2  md:w-30 h-6 md:h-10 hover:bg-black hover:text-white rounded">
                Download CV
              </button>
            </a>
            <button className="text-white md:ml-20 bg-gray-500 text-[10px] md:text-lg border-white border-1 w-1/2 md:w-30 h-6 md:h-10 hover:bg-white hover:text-black rounded">
              Learn More
            </button>
          </div>
        </div>
        {/* //todo img content div*/}
        <div className=" w-40 md:w-180 h-50 md:h-150  flex justify-center items-center">
          <img
            className="bg-white w-40 md:w-100 h-40 md:h-100 rounded-[50%] "
            src={img}
            alt=""
          />
        </div>
        {/* About section */}
      </div>
      <div></div>
      <About />
      <Skills />
      <WhatDo />
      <FormValidation/>
    </>
  );
}
