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
      className=" h-[40vh]  md:h-[60vh] md:flex md:flex-col md:px-40"
    >
      {/* about */}
      <h1 className="text-white text-center text-lg md:text-3xl font-bold">About</h1>
      <div className="text-white text-[10px] md:text-lg mt-2 md:mt-10">
        <p className="px-15 text-center leading-">
          Hello! I’m a passionate and motivated Frontend Developer with a
          Bachelor’s degree in Computer Applications (BCA). I have hands-on
          experience in building responsive and user-friendly web applications
          using HTML, CSS, JavaScript, and ReactJS. I’m also familiar with
          modern development tools and workflows including Git and Tailwind CSS,
          which help me write clean, maintainable, and optimized code.
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
