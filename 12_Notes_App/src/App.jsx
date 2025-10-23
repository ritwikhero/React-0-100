import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form submitted");

    console.log(title);
    console.log(details);

    setTitle("");
    setDetails("");
  };
  return (
    <div className="h-screen bg-black text-white ">
      <form
        onSubmit={handleSubmit}
        className="flex  items-start justify-between p-10"
      >
        <div className="flex flex-col items-start w-1/2 gap-4 ">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="px-5 py-2 border-2 font-medium outline-none rounded w-full"
            type="text"
            placeholder="Enter Notes Headings"
          />
          <textarea
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            className="px-5 py-2 border-2 h-20 font-medium outline-none rounded w-full "
            type="text"
            placeholder="Enter Details"
          />
          <button className="px-5 py-2 bg-white text-black font-medium outline-none rounded w-full">
            Add Notes
          </button>
        </div>
        {/* <img
          className="h-50 rotate-y-180"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy9Af9x_U5RgKcG0YUiQExGKcnFeQjaQIK1e_kR0y-1aLPH4-g9smYsCXy6x2BrlTUZw&usqp=CAU"
          alt="img"
        /> */}
      </form>
    </div>
  );
};

export default App;
