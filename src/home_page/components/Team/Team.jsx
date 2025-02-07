import React from "react";
import Fade from 'react-reveal/Fade';

const team_members = [
  {
    src: "public/img/team/Quddous-pic.jpg",
    name: "Abdull Quddous",
    designation: "Founder & CEO",
  },
  {
    src: "public/img/team/Abdullah-pic.jpg",
    name: "Abdullah Ata",
    designation: "DEV & CTO",
  },
];

const Team = () => {
  return (
    <section
      className=" py-16 bg-black justify-center text-center"
      // style={{
      //   backgroundImage: "url('public/img/Banner/banner_bg.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
         <h1 className="text-6xl lg:text-7xl font-bold text-white p-5 mt-5">
         Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Team Members
        </span>
      </h1>
        
       <Fade top duration={3000}> 
      <div className="container mx-auto mt-5">
        <div className="flex flex-wrap justify-center -mx-4">
          {
          team_members.map((member, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="h-full rounded-3xl overflow-hidden">
                <img
                  src={member.src}
                  alt={member.name}
                  className="rounded-full mx-auto w-96 h-80 object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-110"
                />
                <div className="p-6 text-center">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {member.designation}
                  </h2>
                  <h1 className="title-font text-white text-600 sm:text-2xl text-xl font-bold mb-3 ">
                    {member.name}
                  </h1>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      </Fade>
    </section>
  );
};

export default Team;
