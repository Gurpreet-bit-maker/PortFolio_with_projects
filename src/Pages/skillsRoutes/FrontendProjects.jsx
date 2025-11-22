import { useEffect, useState } from "react";
import FrontendDev from "./FrontendDev";

export default function FrontendProjects() {

let [projects, setProjects] = useState();




  // let frontendPro = [
  //   {
  //     title: "Calculator",
  //     description: "this is calculator for using arthmetic operations",
  //     tech: ["html", "css", "js"],
  //     liveLink: "hello world",
  //     codeLink: "github",
  //   },
  //   {
  //     title: "Port",
  //     description: "this is calculator for using arthmetic operations",
  //     tech: ["html", "css", "js"],
  //     liveLink: "hello world",
  //     codeLink: "github",
  //   },
  //   {
  //     title: "Todos",
  //     description: "this is calculator for using arthmetic operations",
  //     tech: ["html", "css", "js", "react"],
  //     liveLink: "hello world",
  //     codeLink: "github",
  //   },
  // ];

  return (
    <>
      <h1 className="text-2xl md:text-2xl font-bold text-center">Frontend Projects</h1>
      {/* <FrontendDev/> */}
      
      {/* {frontendPro.map((items, index) => {
        <h1>hello</h1>;
        return (
          <FrontendDev
            // key={index}
            // title={items.title}
            // description={items.description}
            // tech={items.tech.slice().join("-")}
            // liveLink={items.liveLink}
            // codeLink={items.codeLink}
          />
        );
      })} */}
    </>
  );
}
