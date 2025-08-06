import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
  let { register, handleSubmit, reset } = useForm();

  let submitForm = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-[#171717] text-[#4F4F4F] h-[50vh]">
      <h1 className="text-center text-white font-bold ">Get in touch</h1>
      {/* Form div  */}

      <form
        onSubmit={handleSubmit(submitForm)}
        className=" flex justify-center items-start h-full p-5 "
      >
        <div className="flex flex-col ">
          <div className=" text-center">
            <input
              type="text"
              {...register("userName")}
              placeholder="Name"
              className="border-b-2 border-gray-500 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-5 h-10"
            />
            <input
              type="text"
              {...register("lName")}
              placeholder="Last name"
              className="border-b-2 border-gray-500 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-5 h-10"
            />
          </div>
          <div className="text-center">
            <input
              type="email"
              {...register("email")}
              placeholder="email"
              className="border-b-2 border-gray-500 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-5 h-10"
            />
            <input
              type="number"
              {...register("Phonenumber")}
              placeholder="Phone"
              className="border-b-2  border-gray-500 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-5 h-10"
            />
          </div>
          <div className=" h-45 flex flex-col justify-center items-center">
            <textarea
              name="msg"
              placeholder="Massege here .. "
              id=""
              className="placeholder-[#4F4F4F] border h-30 w-90  p-2 text-white "
            ></textarea>
            <button
              type="submit"
              className=" text-white bg-green-600 text-[12px] md:text-lg border-white border-1 mt-2 h-6 p-1"
            >
              Submit Here
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
