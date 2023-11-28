import React from "react";
import beruang from "../image/beruang.jpg";
import logo from "../image/logo.png";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${beruang}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="text-white w-full h-screen bg-black overflow-hidden"
      style={backgroundImageStyle}
    >
      <div className="w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex items-center flex-col justify-center h-full">
          <img src={logo} alt="Logo" className="h-[250px]" />
          <p className="font-vollkorn text-orange2 font-extrabold mt-[-40px] text-[24px]">YOGYAKARTA</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
