import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div
        className=" flex gap-13 pt-4 px-5 md:pt-8 md:gap-150  md:h-30 md:px-10"
        style={{ backgroundColor: "#171717" }}
      >
        <h1 className="text-white text-[30px] md:text-6xl pb-2">Portfolio</h1>
        <nav className="flex items-center">
          <ul
            className="tracking-wider text-[11px]   flex w-47  md:text-lg md:mb-5  gap-4 md:gap-6 md:w-95 font-bold text-white md:text-white "
            style={{ fontFamily: "DM Sans" }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="">About me</a>
            </li>
            <li>
              <a href="">Servises</a>
            </li>
            <li>
              <a href="">Contect me</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
