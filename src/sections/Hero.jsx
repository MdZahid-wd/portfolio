import React from "react";
import PROFILE_PIC from "../assets/images/profile.jpg";
import ICON_1 from "../assets/images/mongodb.png";
import ICON_2 from "../assets/images/express-js.png";
import ICON_3 from "../assets/images/react-js.jpg";
import ICON_4 from "../assets/images/node-js.png";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";

const Hero = () => {
  const goToResume = async () => {
    var link = document.createElement("a");
    link.download = "resume.pdf";
    link.href = "../portfolio/src/assets/portfolio/my_resume(14).pdf";
    link.click();
  };
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-evenly mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">
            👋 Hi, I'm Md Zahid
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            building scalable & user centric web apps
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I'm a passionate full stack frontend developer crafting responsive,
            accessible, and dynamic web experiences using React, Node.js,
            TailwindCSS.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            {/* <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
              View My Work
            </button> */}
            <button
              onClick={goToResume}
              className="flex-1 md:flex-none action-btn btn-scale-anim"
            >
              Download Resume
            </button>
          </div>
        </div>
        <div className="w-[250px] md:w-[320px] h-[300px] md:h-[378px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
          <img src={PROFILE_PIC} alt="profile pic" className="profile-pic" />
          <img
            src={ICON_1}
            alt="Icon 1"
            className="icon-img -left-10 bottom-11 rotate-[1.75deg]"
          />
          <img
            src={ICON_2}
            alt="Icon 2"
            className="icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg]"
          />
          <img
            src={ICON_3}
            alt="Icon 3"
            className="icon-img left-[110px] md:left-[150px] -bottom-9 rotate-[3.75deg]"
          />
          <img
            src={ICON_4}
            alt="Icon 4"
            className="icon-img left-[200px] md:left-[260px] -bottom-7 md:-bottom-6 rotate-[4.75deg]"
          />
        </div>
      </div>
      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        <StatInfoCard></StatInfoCard>
      </div>
    </section>
  );
};

export default Hero;
