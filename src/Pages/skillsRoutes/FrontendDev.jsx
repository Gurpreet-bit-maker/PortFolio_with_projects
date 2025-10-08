export default function FrontendDev({
  title,
  description,
  tech,
  liveLink,
  codeLink,
}) {
  console.log(typeof tech);
  return (
    <div
      className="bg-[#1f1f1f] m-2 text-white rounded-2xl p-5 w-72 md:w-96 shadow-md
                    hover:shadow-green-400/40 transition-all duration-300 hover:scale-105
                    flex flex-col justify-between border border-[#333] hover:border-green-400"
    >
    
      <div >
        <h2 className="text-green-400 text-xl md:text-2xl font-semibold mb-2">
          {title}
        </h2>
        <p className="text-[#a1a1af] text-sm md:text-base mb-2">
          {description}
        </p>
       <p className="text-orange-300">{tech}</p>
      </div>
    </div>
  );
}
