import { Link } from "react-router-dom";
export default function Skills() {
  let skillsData = [
    { percentage: "50%", tech: "HTML" },
    { percentage: "40%", tech: "CSS" },
    { percentage: "60%", tech: "JAVASCRIPT" },
    { percentage: "40%", tech: "REACT JS" },
    { percentage: "50%", tech: "TAILWIND" },
    { percentage: "30%", tech: "GITHUB" },
    { percentage: "40%", tech: "NODE JS" },
    { percentage: "40%", tech: "EXPRESS JS" },
    { percentage: "50%", tech: "MONGO_DB" },
  ];
  return (
   
      <div className=" bg-[#171717] h-[35vh]  flex flex-col text-center justify-center items-center">
        <h1 className="font-bold text-lg md:text-4xl font-bold text-white">
          Skills
        </h1>
        <div className="flex flex-wrap gap-3 px-1 bg-[#212121] m-5 w-95 md:w-170 justify-center items-center ">
          {skillsData.map((item, id) => {
            return (
              <div
                key={id}
                className=" w-22 flex flex-col h-20 justify-center items-center"
              >
                <b className="text-[#4F4F4F] text-[25px] pl-3">
                  {item.percentage}
                </b>
                <p className="text-green-400  text-[13px] tracking-wider">
                  {item.tech}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    
  );
}
