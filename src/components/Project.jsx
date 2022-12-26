import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const project = () => {
  const project = [
    {
      id: 1,
      src: arrayDestruct,
      DemoURL: "",
      CodeURL: "",
    },
    {
      id: 2,
      src: installNode,
      DemoURL: "",
      CodeURL: "",
    },
    {
      id: 3,
      src: navbar,
      DemoURL: "",
      CodeURL: "",
    },
    {
      id: 4,
      src: reactParallax,
      DemoURL: "",
      CodeURL: "",
    },
    {
      id: 5,
      src: reactSmooth,
      DemoURL: "",
      CodeURL: "",
    },
    {
      id: 6,
      src: reactWeather,
      DemoURL: "",
      CodeURL: "",
    },
  ];
  return (
    <div
      name="Project"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Cheack out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

        {project.map(({ id, src, DemoURL, CodeURL }) => (
          
            <div key={id}     className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex item-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200">
                  <a href={DemoURL}> Demo </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200">
                  <a href={CodeURL}>Code</a>
                </button>
              </div>
            </div>
          
        ))}
</div> 
        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={arrayDestruct} alt="" 
                        className='rounded-md duration-200 hover:scale-105'
                    />
                    <div className='flex item-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200'><a href=""> Demo </a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200'><a href="">Code</a></button>
                    </div>
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default project;
