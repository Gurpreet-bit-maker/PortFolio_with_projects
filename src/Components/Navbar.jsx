import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div
        className=" flex gap-4 justify-center items-center pt-3 pb-3 md:pt-8 md:gap-150  md:h-30 md:px-10"
        style={{ backgroundColor: "#171717" }}
      >
        <h1 className="text-white  text-[39px] md:text-6xl pb-2">Portfolio</h1>
        <nav className="flex items-center">
          <ul className=" text-[10px]   flex md:text-lg md:mb-5 leading-tight gap-1 font-medium  md:gap-6 md:w-95  text-white md:text-white ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-1 text-[14px]  ${
                  isActive ? "bg-blue-300 rounded-lg " : null
                } `
              }
            >
              Home
            </NavLink>
            <li className="text-[14px] ">
              <a href="">About me</a>
            </li>
            <NavLink
              to="/allprojects"
              className={({ isActive }) =>
                ` px-1 text-[14px]  ${
                  isActive ? "bg-blue-300 rounded-lg" : null
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contects"
              className={({ isActive }) =>
                `px-1 text-[14px]  ${
                  isActive ? "bg-blue-300 rounded-lg" : null
                }`
              }
            >
              Contects
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
}
