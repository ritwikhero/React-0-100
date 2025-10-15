import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-18 py-8">
      <h4 className="bg-black text-white rounded-full py-2 px-6 uppercase ">
        Target Audience
      </h4>
      <button className="bg-gray-200 text-black px-6 py-2 uppercase rounded-full tracking-widest text-sm">
        Digital banking solution
      </button>
    </div>
  );
};

export default Navbar;
