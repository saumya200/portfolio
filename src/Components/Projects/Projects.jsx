// import React from 'react'
import "./Projects.css";
import image1 from "../../Images/ss1.png";
import image2 from "../../Images/ss2.png";
import image3 from "../../Images/ss4.png";

function Projects() {
  return (
    <div className="projects">
      <h1 className="text-5xl font-bold text-center lg:text-7xl "> Projects</h1>
      <div className="projects--image ">
        <div className="projects--image1 lg:flexbox">
          <img
            src={image1}
            className="image1 mt-20  sm:ml-32 md:ml-44 lg:ml-20 xl:ml-52 2xl:ml-72"
          />
          <h2 className="image1--title text-3xl font-bold text-center mt-5 sm:ml-6 md:mr-10 2xl:mr-36">
            MY TRAVEL JOURNAL
          </h2>
          <div className="flex justify-center underline decoration-4 decoration-green-400 2xl:mr-28 ">
            <a href="https://my-travel-journal-theta.vercel.app/">
              {" "}
              <p className="projects--image1--para1 text-1xl font-bold ">
                VIEW PROJECT
              </p>
            </a>
            <a href="https://github.com/saumya200/Travel-vite-">
              {" "}
              <p className="projects--image1--para2 text-1xl font-bold">
                VIEW CODE{" "}
              </p>
            </a>
          </div>

          <img
            src={image2}
            className="image2 mt-20 sm:ml-20 md:ml-32 xl:ml-60 2xl:ml-96"
          />
          <h2 className="image2--title text-3xl font-bold text-center mt-5 sm:ml-6 md:mr-10">
            SAMPLE PRODUCT PAGE
          </h2>
          <div className=" image2--p flex justify-center underline decoration-4 decoration-green-400 ">
            <p className="image2--para text-1xl font-bold">VIEW PROJECT</p>
            <a href="https://github.com/saumya200/Sample-Page-using-Tailwind-Css">
              {" "}
              <p className="image2--view--code text-1xl font-bold">
                VIEW CODE{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="projects--image2">
          <img
            src={image3}
            className="image3 mt-20 sm:ml-32 md:ml-44 xl:ml-80 2xl:ml-96"
          />
          <h2 className="image3--title text-3xl font-bold text-center mt-5 md:mr-8 xl:ml-10 2xl:mr-40">
            E-COMMERCE PRODUCT PAGE
          </h2>
          <div className=" image3--sub flex justify-center underline decoration-4 decoration-green-400 2xl:mr-28 ">
            <p className="image3--para1 text-1xl font-bold">VIEW PROJECT</p>
            <a href="https://github.com/saumya200/shoe-store">
              {" "}
              <p className="image3--para2 text-1xl font-bold">VIEW CODE </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
