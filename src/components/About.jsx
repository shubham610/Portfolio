import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi,My name is Shubham Bansal, and I'm an Electronics & Communiaction
          Engineering Graduate. However, my true passion lies in web
          development. I have found myself drawn towards the world of
          programming, particularly in the realm of Java core, JavaScript, and
          front-end technologies such as HTML, CSS, and EJS. I thoroughly enjoy
          creating intuitive and visually appealing user interfaces, as well as
          implementing interactive features that enhance the overall user
          experience. With my proficiency in these technologies, I have been
          able to develop functional and aesthetically pleasing websites.
        </p>
        <br />
        <p className="text-xl">
          To further expand my skill set, I have been actively learning and
          gaining experience in other front-end frameworks like React.JS and
          back-end technologies such as Node.JS. I am able to approach projects
          with a unique perspective and leverage my technical knowledge to
          create efficient and effective solutions. I am excited to continue
          growing in the field of web development and to contribute to the
          creation of innovative and impactful digital experiences
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
