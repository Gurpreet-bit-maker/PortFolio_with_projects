import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTransition } from "react";




export default function FormValidation() {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  //! using varible
  const BASE_URL =
    "https://backendform-handling-1.onrender.com" ||
    "http://localhost:8080";

  let [userdata, setuserData] = useState([]);

  let submitForm = async (data) => {
    console.log(data);
    try {
      reset();
      await fetch(`${BASE_URL}/forms/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // if (!data.ok) {
      //   throw new Error("Failed to submit");
      // }
      // setuserData({ ...userdata }, data);
    } catch (error) {
      console.log(error);
    }
  };
  let [data, setD] = useState([]);
  let [show, setshow] = useState(false);

  let jsondata = async () => {
    try {
      let result = await fetch(`${BASE_URL}/forms/get`);
      let data = await result.json();
      setD(data);
      setshow(!show);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#171717] text-[#4F4F4F] h-[68vh]">
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
              {...register("firstName", { required: "user name is required" })}
              placeholder="Name"
              className="border-b-2 border-gray-500 px-1 ml-2 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-3 h-10"
            />

            {errors.firstName && (
              <p className="text-red-300 w-full text-[10px] w-100 absolute top-15 ">
                {errors.firstName.message}
              </p>
            )}
            <input
              type="text"
              {...register("lastName", { required: "lastname is required" })}
              placeholder="Last name"
              className="border-b-2 ml-2 border-gray-500 px-1 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-3 h-10"
            />
            {errors.lastName && (
              <p className="text-red-300 text-[10px] w-100 absolute top-28">
                {errors.lastName.message}
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
              {...register("phoneNum", { required: "number is required" })}
              placeholder="Phone"
              className="border-b-2 ml-2 border-gray-500 px-1 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-3 h-10"
            />
            {errors.phoneNum && (
              <p className="text-red-300 text-[10px] w-100 absolute top-26">
                {errors.phoneNum.message}
              </p>
            )}
          </div>
          <div className=" h-45 flex flex-col justify-center items-center">
            <textarea
              {...register("msg")}
              placeholder="Massege here .. "
              id=""
              className="placeholder-[#4F4F4F] border h-30 w-90  p-2 text-white "
            ></textarea>
            <button
              type="submit"
              // text-sm
              className=" text-white bg-blue-600 text-[12px] md:text-lg border-white border-1 mt-2 h-6 md:h-9 p-1"
            >
              {" "}
              submit
            </button>
            <br />
            {isSubmitSuccessful && (
              <p className="text-green-300  text-2xl">Successfully Submited</p>
            )}
          </div>
        </div>
      </form>
      {/* <button onClick={jsondata} className="border-2 border-red-600 mb-2 rounded-lg px-1">
        {show ? <p className="text-black font-bold">All submited data</p> : <p className="text-green-800 ">See more data</p>}
      </button> */}
      <br />

      {/* <div className="flex flex-wrap gap-2 bg-red-300">
        {show
          ? data.map((items, index) => {
              return (
                <div
                  key={index}
                  className="bg-yellow-300 p-2 mt-2 h-25 text-sm rounded-lg"
                >
                  <b>`this is form data is ${index + 1}`</b>
                  <p> this is your id : {items._id}</p>
                  <p className="text-blue-500">
                    {" "}
                    your name is : {items.firstName}
                  </p>
                  <p> this is your msg : {items.msg}</p>
                </div>
              );
            })
          : null}
      </div> */}
    </div>
  );
}
