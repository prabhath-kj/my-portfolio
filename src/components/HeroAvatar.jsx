"use client";
import { TypeAnimation } from "react-type-animation";
const heroAvatar = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className="text-white font-extrabold mb-4  text-4xl lg:text-6xl ">
            Hello, I'm {""}
          </h1>
          <TypeAnimation
            className="font-bold"
            sequence={["Prabhath", 1000, "Mern Stack Developer", 1000]}
            wrapper="span"
            speed={10}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />

          <p className="text-lg lg:text-xl text-white mb-6 ">
            Passionate Full Stack MERN developer with a strong focus on Node.js
            and React.js development. Gained extensive knowledge in building
            robust and scalable applications. Committed to delivering
            high-quality code and continuously learning new technologie.
          </p>
          <div>
            <button className="px-5 py-5 rounded-full border bg-white hover:bg-slate-200 text-black m-4">
              Hire Me
            </button>
            <button className="px-5 py-5 rounded-full border  border-white hover:bg-slate-600 text-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5  mt-4 lg:mt-0 place-self-center ">
          <div className="rounded-full  bg-black w-[200px] h-[200px] mt-0 ">
            <img src="images.jpeg" width={200} height={200} alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default heroAvatar;
