import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div
        className=" flex gap-9 justify-center  pt-4 md:pt-8 md:gap-150  md:h-30 md:px-10"
        style={{ backgroundColor: "#171717" }}
      >
        <h1 className="text-white  text-[30px] md:text-6xl pb-2">Portfolio</h1>
        <nav className="flex items-center">
          <ul
            className=" text-[11px]   flex md:text-lg md:mb-5 leading-tight gap-2  md:gap-6 md:w-95 font-bold text-white md:text-white "
            style={{ fontFamily: "DM Sans" }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-1 ${isActive ? "bg-blue-300 rounded-lg " : null} `
              }
            >
              Home
            </NavLink>
            <li>
              <a href="">About me</a>
            </li>
            <NavLink
              to="/allprojects"
              className={({ isActive }) =>
                ` px-1 ${isActive ? "bg-blue-300 rounded-lg" : null}`
              }
            >
              My Projects
            </NavLink>
            <NavLink to="/contects" className={({isActive}) => `px-1 ${isActive ? "bg-blue-300 rounded-lg": null}`}>Contect me</NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
}
