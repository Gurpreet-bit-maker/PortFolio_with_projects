export default function FormValidation() {
  return (
    <div className="bg-[#171717] text-[#4F4F4F] h-[40vh]">
      <h1 className="text-center text-white font-bold ">Get in touch</h1>
      {/* Form div  */}
      <div className="flex flex-col justify-center ">
        <div className="flex justify-center items-start h-full p-5 pt- ">
          <div className=" text-center">
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 placeholder-[#4F4F4F] w-30 text-[13px] pt-5 h-10"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border-b-2 placeholder-[#4F4F4F] w-30 text-[13px] pt-5 h-10"
            />
          </div>
          <div className="text-center">
            <input
              type="text"
              placeholder="email"
              className="border-b-2 placeholder-[#4F4F4F] w-30 text-[13px] pt-5 h-10"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border-b-2 placeholder-[#4F4F4F] w-30 text-[13px] pt-5 h-10"
            />
          </div>
        </div>
        <textarea
          name="msg"
          placeholder="Massege here .. "
          id=""
          className="placeholder-[#4F4F4F] border h-30 w-90 ml-6"
        ></textarea>
      </div>
    </div>
  );
}
