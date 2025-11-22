export default function BackendDev() {
  return (
   <>
     <div className=" ">
        <div className="bg-green-300 p-3  h-28">
          <div className="bg-gray-300 rounded-lg p-1">
            <h1 className="text-center text-lg font-bold my-1">
              Backend Technology
            </h1>
            {/* <img
            className="w-20"
            src="https://img.icons8.com/?size=100&id=dhecLjnptiQg&format=png&color=000000"
            alt=""
          /> */}

            <ul className="bg-gray-200 p-1 shadow-2xl font-sanf text-lg flex flex-col gap-y-5 tracking-wider text-shadow-sm ">
              <li className=" ">
                NODE JS{" "}
                <img
                  className="w-6 ml-1 inline"
                  src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                  alt=""
                />{" "}
              </li>
              <li>
                EXPRESS JS{" "}
                <img
                  className="w-6 ml-1 inline"
                  src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
                  alt=""
                />{" "}
              </li>
              <li>
                MONGO_DB{" "}
                <img
                  className="w-6 ml-1 inline"
                  src="https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000"
                  alt=""
                />
              </li>
              <li>
                DEPLOYEMENT{" "}
                <img
                  className="w-6 ml-1 inline"
                  src="https://img.icons8.com/?size=100&id=3HE8x5wkQAZ2&format=png&color=000000"
                  alt=""
                />
              </li>
              <li className="bg-black text-white pl-2 rounded-lg">
                GITHUB
                <img
                  className="w-6 ml-1 inline"
                  src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000"
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