import React from "react";
import Card from "./Card";

const data = [
  {
    title: "TalkLine",
    description:
      "TalkLine built using EJS, NodeJS,CSS and MongoDB is a post sharing web application that allows users to share their opinions, and experiences, express their thoughts and engage with a community of like-minded individuals",
    githubLink: "https://github.com/shubham610/TalkLine",
    imgURL:
      "https://cdn.pixabay.com/photo/2020/04/04/03/42/chat-5000695_1280.png",
  },
  {
    title: "Adopt Me!",
    description:
      "A web application built using React.js which allows users to adopt pets according to their specific region and preference.",
    githubLink: "https://github.com/shubham610/Adopt-Me",
    imgURL:
      "https://cdn.pixabay.com/photo/2017/10/07/16/21/dog-2826918_1280.png",
  },
  {
    title: "Daily Journal",
    description:
      "A web application made using EJS,CSS,NodeJS & MongoDB can be used as a daily journal or a Blog sharing platform.",
    githubLink: "https://github.com/shubham610/Daily-Journal",
    imgURL:
      "https://cdn.pixabay.com/photo/2014/04/03/00/32/notebook-308615_1280.png",
  },
];
const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-700 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-14">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
          {data.map(({ title, githubLink, description, imgURL }) => (
            <Card
              title={title}
              githubLink={githubLink}
              description={description}
              imgURL={imgURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
