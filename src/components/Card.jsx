import React from "react";

const Card = ({ description, title, githubLink, imgURL }) => {
  return (
    <div className="flex dark:bg-dark rounded-lg shadow-lg border">
      <div className="p-3 flex flex-col items-start justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="flex space-x-2">
          <a
            href={githubLink}
            className="border dark:text-white px-4 py-1 rounded-full hover:bg-fuchsia-700 hover:text-white ease-in transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="flex-shrink-0 p-4">
        <img
          src={imgURL}
          alt="Logo"
          className="w-16 h-16 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Card;
