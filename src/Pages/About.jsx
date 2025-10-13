import aboutImg from "../../public/about div images/Group 14.png";
export default function About() {
  // ! development cards array data for props

  let myDetails = [
    { id: "Gurpreet", title: "Full Name" },
    { id: "ajbagdi6@gmail.com", title: "Mail" },
    { id: "@Gurpreet810015.com", title: "Twiter" },
    { id: "+917503181470", title: "Phone" },
  ];

  return (
    <div
      style={{ backgroundColor: "#171717" }}
      className=" h-[50vh]  md:h-[70vh] md:flex md:flex-col md:px-40"
    >
      {/* about */}
      <h1 className="text-white text-center text-lg md:text-3xl font-bold">About</h1>
      <div className="text-white text-[10px] md:text-lg mt-2 md:mt-10">
        <p className="px-15 text-center leading-">
          Hi! I’m Gurpreet Singh, a passionate Full-Stack Web Developer. I specialize in building modern and responsive web applications using HTML, CSS, JavaScript, React, Node.js, Express, Tailwind, and MongoDB Atlas. I love turning ideas into real-world projects and continuously learning new technologies to grow as a developer..
        </p>
      </div>
      {/* details 4 cards */}
      <div className=" mt-5 flex flex-wrap gap-4 justify-center md:gap-4">
        {myDetails.map((item, index) => {
          return (
            <div
              className="text-black  text-center w-30 p-1  flex flex-col justify-center items-center md:h-50 md:w-50"
              key={index}
            >
              <img className="w-10 md:w-15 " src={aboutImg} alt="" />
              <h3 className="text-[12px] md:text-[17px] text-white md:pt-5 pt-3">
                {item.title}
              </h3>
              <h3 className="text-[10px] md:text-sm  text-gray-400 tracking-wider">
                {item.id}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
