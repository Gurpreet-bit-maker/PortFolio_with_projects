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
    setuserData([{ ...userdata },data]);

    console.log(userdata);
    reset();
  };
  useEffect(() => {
    setuserData([{ ...userdata }]);
  }, []);

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
              {...register("userName", { required: "user name is required" })}
              placeholder="Name"
              className="border-b-2 border-gray-500 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-5 h-10"
            />
            {errors.userName && (
              <p className="text-red-300">{errors.userName.message}</p>
            )}
            <input
              type="text"
              {...register("lName", { required: "lastname is required" })}
              placeholder="Last name"
              className="border-b-2 border-gray-500 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-5 h-10"
            />
            {errors.lName && (
              <p className="text-red-300">{errors.lName.message}</p>
            )}
          </div>
          <div className="text-center">
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              placeholder="email"
              className="border-b-2 border-gray-500 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-5 h-10"
            />
            {errors.email && (
              <p className="text-red-300">{errors.email.message}</p>
            )}
            <input
              type="number"
              {...register("Phonenumber", { required: "number is required" })}
              placeholder="Phone"
              className="border-b-2  border-gray-500 placeholder-[#4F4F4F] w-30 text-[13px] text-white mt-5 h-10"
            />
            {errors.Phonenumber && (
              <p className="text-red-300">{errors.Phonenumber.message}</p>
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
              className=" text-white bg-green-600 text-[12px] md:text-lg border-white border-1 mt-2 h-6 p-1"
            >
              Submit Here
            </button>
            {isSubmitSuccessful && (
              <p className="text-green-300">successfully submited</p>
            )}
            {console.log(isSubmitSuccessful)}
          </div>
        </div>
      </form>
    </div>
  );
}
