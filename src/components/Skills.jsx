import React from "react";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 py-3 max-w-4xl text-6xl text-center mt-20">
          <img src="https://skillicons.dev/icons?i=java" />
          <img src="https://skillicons.dev/icons?i=html" />
          <img src="https://skillicons.dev/icons?i=css" />
          <img src="https://skillicons.dev/icons?i=js" />
          <img src="https://skillicons.dev/icons?i=react" />
          <img src="https://skillicons.dev/icons?i=nodejs" />
          <img src="https://skillicons.dev/icons?i=expressjs" />
          <img src="https://skillicons.dev/icons?i=tailwindcss" />
          <img src="https://skillicons.dev/icons?i=bootstrap" />
          <img src="https://skillicons.dev/icons?i=mongodb" />
          <img src="https://skillicons.dev/icons?i=mysql" />
          <img src="https://skillicons.dev/icons?i=git" />
          <img src="https://skillicons.dev/icons?i=vscode" />
          <img src="https://skillicons.dev/icons?i=postman" />
          <img src="https://skillicons.dev/icons?i=solidity" />
          <img src="https://skillicons.dev/icons?i=firebase" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
