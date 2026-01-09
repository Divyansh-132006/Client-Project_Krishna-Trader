import React from "react";

const FeatureBlock = ({ title, description, highlight, img, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center gap-6 p-8 rounded-2xl mb-10 shadow-lg bg-white ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-bold text-green-700 mb-3">{title}</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          {description}{" "}
          <span className="font-semibold text-green-700">{highlight}</span>
        </p>
      </div>

      <div className="w-full md:w-1/3 flex justify-center">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-44 h-44 rounded-xl object-cover shadow-md"
          />
        ) : (
          <div className="w-44 h-44 bg-gray-200 rounded-xl flex justify-center items-center text-gray-500 font-medium">
            IMAGE
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureBlock;
