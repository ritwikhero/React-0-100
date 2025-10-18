import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div className="h-full w-3/4 p-6 overflow-x-auto flex flex-nowrap gap-10 ">
      {props.data.map((item, idx) => (
        <RightCard
          key={idx}
          id={idx}
          img={item.img}
          intro={item.intro}
          tag={item.tag}
        />
      ))}
    </div>
  );
};

export default RightContent;
