import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  let [userdata, setuserData] = useState();

  let submitForm = (data) => {
    console.log(data);
    setuserData([{ ...userdata }, data]);

    console.log(userdata);
    reset();
  };

  return (
    <div className="bg-[#171717] text-[#4F4F4F] h-[60vh]">
      <h1 className="text-center text-white font-bold ">Get in touch</h1>
      {/* Form div  */}

      <form
        onSubmit={handleSubmit(submitForm)}
        className=" flex justify-center items-start h-full p-5 "
      >
        <div className="flex flex-col">
          <div className=" text-center flex flex-col items-center h-30 py-2 relative">
            <input
              type="text"
              {...register("userName", { required: "user name is required" })}
              placeholder="Name"
              className="border-b-2 border-gray-500 px-1 ml-2 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-3 h-10"
            />

            {errors.userName && (
              <p className="text-red-300 w-full text-[10px] w-100 absolute top-15 ">
                {errors.userName.message}
              </p>
            )}
            <input
              type="text"
              {...register("lName", { required: "lastname is required" })}
              placeholder="Last name"
              className="border-b-2 ml-2 border-gray-500 px-1 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-3 h-10"
            />
            {errors.lName && (
              <p className="text-red-300 text-[10px] w-100 absolute top-28">
                {errors.lName.message}
              </p>
            )}
          </div>
          <div className="text-center flex flex-col items-center relative">
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              placeholder="email"
              className="border-b-2 border-gray-500 px-1 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-3 h-10"
            />
            {errors.email && (
              <p className="text-red-300 text-sm text-[10px] w-100 absolute top-13 ">
                {errors.email.message}
              </p>
            )}
            <input
              type="number"
              {...register("Phonenumber", { required: "number is required" })}
              placeholder="Phone"
              className="border-b-2 ml-2 border-gray-500 px-1 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-3 h-10"
            />
            {errors.Phonenumber && (
              <p className="text-red-300 text-[10px] w-100 absolute top-26">
                {errors.Phonenumber.message}
              </p>
            )}
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
              text-sm
              className=" text-white bg-green-600 text-[12px] md:text-lg border-white border-1 mt-2 h-6 p-1"
            >
              Submit Here
            </button>
            <br />
            {isSubmitSuccessful && (
              <p className="text-green-300  text-2xl">Successfully Submited</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
