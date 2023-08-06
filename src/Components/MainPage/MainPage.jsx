// import React from 'react'
import "./MainPage.css";
import github from "../../Images/github.png";
import linkedin from "../../Images/linkedin.png";
import twitter from "../../Images/twitter.png";
import saumya from "../../Images/saumya.png";
// import saumya from "../../Images/thumbnail.jpeg";

function MainPage() {
  return (
    <div className="main--page">
      <h1 className="text-3xl font-bold text-black text-center mt-10">
        saumyareddy
      </h1>
      <div className="social--icons flex justify-center">
        <a href="https://github.com/saumya200">
          {" "}
          <img src={github} className="w-8 h-8 mr-12 cursor-pointer" />
        </a>
        {/* <img src={github} className="w-8 h-8 mr-12" /> */}
        <a href="https://www.linkedin.com/in/saumya-reddy-381320230/">
          {" "}
          <img src={linkedin} className="w-8 h-8 " />
        </a>
        {/* <img src={linkedin} className="w-8 h-8 " /> */}

        <img src={twitter} className="w-10 h-10 ml-12" />
      </div>
      <div className="profile">
        <img src={saumya} className="profile--image ml-20 mt-10" />
        <h1 className="font-bold text-3xl ml-8 mr-10 mt-8">
          Nice to meet you! I am
          <span className="underline decoration-4 decoration-green-400">
            {" "}
            Saumya Reddy.
          </span>
        </h1>
        <p className="font-200 text-1xl ml-5 mt-5 mr-5">
          Based in India, I am a software engineer and a passionate front-end
          developer, who loves to build websites that users love.
        </p>
        <a
          href="#"
          className="text-2xl underline decoration-4 decoration-green-400 ">
          CONTACT ME
        </a>
      </div>
    </div>
  );
}

export default MainPage;
