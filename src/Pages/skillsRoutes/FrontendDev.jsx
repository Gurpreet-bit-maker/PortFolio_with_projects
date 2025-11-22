import axios from "axios";
import { useState, useEffect } from "react";

export default function FrontendDev() {
  return (
    <>
      <div className=" ">
        <div className="bg-green-300 p-3  h-35">
          <div className="bg-gray-300 rounded-lg p-1">
            <h1 className="text-center text-2xl font-bold my-1">
              Frontend Technology
            </h1>
            {/* <img
            className="w-20"
            src="https://img.icons8.com/?size=100&id=dhecLjnptiQg&format=png&color=000000"
            alt=""
          /> */}

            <ul className="bg-gray-200 p-1 shadow-2xl font-sanf text-lg flex flex-col gap-y-5 tracking-wider text-shadow-sm ">
              <li className=" ">
                HTML{" "}
                <img
                  className="w-6 ml-1 inline"
                  src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                  alt=""
                />{" "}
              </li>
              <li>
                CSS{" "}
                <img
                  className="w-6 ml-1 inline"
                  src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                  alt=""
                />{" "}
              </li>
              <li>
                JS{" "}
                <img
                  className="w-6 ml-1 inline"
                  src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                  alt=""
                />
              </li>
              <li>
                REACT JS{" "}
                <img
                  className="w-6 ml-1 inline"
                  src="https://img.icons8.com/?size=100&id=9vlfB9hjA1lX&format=png&color=000000"
                  alt=""
                />
              </li>
              <li>
                TAILWIND CSS{" "}
                <img
                  className="w-6 ml-1 inline"
                  src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
