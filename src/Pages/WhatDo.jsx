export default function WhatDo() {
  let border = " h-20 md:h-60 w-25 md:w-100 text-center pt-4 px-1 bg-[#212121] hover:bg-white hover:text-white";
  return (
    <>
    <h1 className=" bg-[#171717] md:text-4xl font-bold text-center text-white" >What i Do</h1>
    <div className="  bg-[#171717] md:pt-10 h-35 md:h-[100vh] md:items-start   flex items-center justify-center">

      {/* Four divs */}
      <div className="flex  gap-5 justify-center ">
        <div className={border}>
          <i className="fa-solid fa-laptop-code  text-green-400  md:text-[50px]"></i>
          <h1 className="text-[9px] md:text-2xl md:pt-5 text-[#535353]"> Frontend <br /> Development</h1>
        </div>
        <div className={border}>
          <i className="fa-solid fa-code  text-green-400 md:text-[50px]"></i>
          <h1 className="text-[9px] md:text-2xl md:pt-5 text-[#535353]"> Backend <br /> Development</h1>
        </div>
        <div className="border-green-300 border-b-2 text-center pt-4 px-1 bg-[#212121] hover:bg-white hover:text-white  w-25 md:w-100">
          <i className="fa-brands fa-dev text-green-400 md:text-[50px]"></i>
          <h1 className="text-[9px] md:text-2xl md:pt-5 text-[#535353]"> Full Stack <br /> Development</h1>
        </div>
      </div>
    </div>

    </>
  );
}
