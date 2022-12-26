import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b  from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col w-full h-full">
        <div className=" pb-8 mt-8">
          <p className="text-4xl font-bold  inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quod
          voluptatem exercitationem voluptates optio? Accusantium dicta suscipit
          reiciendis, recusandae obcaecati, minus assumenda perspiciatis amet
          dignissimos, nesciunt exercitationem dolore sapiente velit?
        </p>
        <br />
        <p className="text-xl ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, vero
          non sapiente harum dolorem dolores voluptatum aliquam, quas quae porro
          nesciunt voluptates est a quos ut explicabo velit eveniet dignissimos?
        </p>
      </div>
    </div>
  );
};

export default About;
