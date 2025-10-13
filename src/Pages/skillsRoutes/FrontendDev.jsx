import axios from "axios";
import { useState, useEffect } from "react";

export default function FrontendDev() {
  let [frontendProjects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendformhandling-production.up.railway.app/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(frontendProjects);
  return (
    <>
      <div className="md:flex flex-wrap">
        {frontendProjects.map((items, index) => {
          return (
            <div
              key={index}
              className="bg-[#1f1f1f] border-2 m-2 text-white rounded-2xl p-5 w-72 md:w-95 shadow-md
                 hover:shadow-green-400/40 transition-all duration-300 hover:scale-105
                 flex  justify-between border border-[#333] hover:border-green-400"
            >
              <div>
                <h2 className="text-green-400 text-xl md:text-2xl font-semibold mb-2">
                  {items.title}
                </h2>
                <p className="text-[#a1a1af] text-sm md:text-base mb-2">
                  {items.description}
                </p>
                <p className="text-gray-200 font-bold my-1">{items.tech.join(" - ")}</p>

                <button className="border-2 px-1 rounded-lg hover:border-green-400 text-[10px]">
                  <a href={items.codeLink}>Code Link</a>
                </button>
                <br />
                <a href="">Live Demo</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
// <div
//   className="bg-[#1f1f1f] m-2 text-white rounded-2xl p-5 w-72 md:w-96 shadow-md
//                 hover:shadow-green-400/40 transition-all duration-300 hover:scale-105
//                 flex flex-col justify-between border border-[#333] hover:border-green-400"
// >

//   <div >
//     <h2 className="text-green-400 text-xl md:text-2xl font-semibold mb-2">
//       {title}
//     </h2>
//     <p className="text-[#a1a1af] text-sm md:text-base mb-2">
//       {description}
//     </p>
//    <p className="text-orange-300">{tech}</p>
//   </div>
// </div>

// title,
//   description,
//   tech,
//   liveLink,
//   codeLink,
