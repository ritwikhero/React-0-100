import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  console.log(props);

  return (
    <div className="h-full w-80 relative overflow-hidden rounded-4xl shrink-0">
      <img className="h-full w-full object-cover" src={props.img} alt="image" />
      <RightCardContent id={props.id} intro={props.intro} tag={props.tag} />
    </div>
  );
};

export default RightCard;
