import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between">
      <h1 className="bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold">
        {props.id + 1}
      </h1>
      <p className="text-xl leading-relaxed text-white mt-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia
        vero quo deserunt error minus, consectetur eveniet tempore atque!
      </p>
      <div className="flex justify-between">
        <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
          {props.tag}
        </button>
        <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default RightCardContent;
