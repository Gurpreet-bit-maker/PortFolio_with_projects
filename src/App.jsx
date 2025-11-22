import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import WhatDo from "./Pages/WhatDo";
import Skills from "./Pages/Skills";
import FormValidation from "./Pages/FormValidation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import FrontendDev from "./Pages/skillsRoutes/FrontendDev";
import BackendDev from "./Pages/skillsRoutes/BackendDev";
import About from "./Pages/About";
import FullstackDev from "./Pages/skillsRoutes/FullstackDev";
import FrontendProjects from "./Pages/skillsRoutes/FrontendProjects";
import ContectsMe from "./Pages/contectsRouter/ContectsMe";
import Allprojects from "./Pages/Allprojects";

function App() {
  return (
    <>
      {/* <WhatDo/> */}
      {/* <About/> */}
      {/* <Skills/> */}
      {/* <FormValidation/> */}
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contects" element={<ContectsMe />} />

          <Route path="/allprojects" element={<Allprojects />} />
          <Route path="/backend" element={<BackendDev />} />
          <Route path="/fullstack" element={<FullstackDev />} />
          <Route path="/frontedWork" element={<FrontendDev />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//   {/* <Route path='/whatdo' element={<WhatDo/>}/> */}

//   {/* <Route path='/skills' element={<Skills/>}/> */}
