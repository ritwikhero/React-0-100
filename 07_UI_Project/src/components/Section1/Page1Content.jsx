import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  return (
    <div className="py-10 px-18 h-[90vh] flex gap-10  items-center">
      <LeftContent />
      <RightContent data={props.data} />
    </div>
  );
};

export default Page1Content;
