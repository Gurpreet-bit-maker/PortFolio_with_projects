import { useEffect, useState } from "react";
import FrontendDev from "./FrontendDev";

export default function AllProjects() {

let [projects, setProjects] = useState();


// useEffect(async() => 
// {
// let url = await fetch('');
// },[]);

  let frontendPro = [
    {
      title: "Calculator",
      description: "this is calculator for using arthmetic operations",
      tech: ["html", "css", "js"],
      liveLink: "hello world",
      codeLink: "github",
    },
    {
      title: "Port",
      description: "this is calculator for using arthmetic operations",
      tech: ["html", "css", "js"],
      liveLink: "hello world",
      codeLink: "github",
    },
    {
      title: "Todos",
      description: "this is calculator for using arthmetic operations",
      tech: ["html", "css", "js", "react"],
      liveLink: "hello world",
      codeLink: "github",
    },
  ];

  console.log(frontendPro);

  return (
    <>
      <h1 className="ml-2 text-2xl font-bold">Frontend Projects</h1>
      {frontendPro.map((items, index) => {
        <h1>hello</h1>;
        return (
          <FrontendDev
            key={index}
            title={items.title}
            description={items.description}
            tech={items.tech.slice().join("-")}
            liveLink={items.liveLink}
            codeLink={items.codeLink}
          />
        );
      })}
    </>
  );
}
