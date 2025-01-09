import React from "react";

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
      className="bg-gray-100 py-16"
      style={{
        backgroundImage: "url('public/img/Banner/banner_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
         <div className="text-center py-10">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white uppercase">
            Our Teams
          </h1>
        </div>
        
      <div className="container mx-auto">
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
    </section>
  );
};

export default Team;
