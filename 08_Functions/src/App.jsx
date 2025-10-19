import React from "react";

const App = () => {
  function buttonClicked() {
    console.log("Button Clicked");
  }
  //  onScroll , onWheel functions explained
  return (
    <div>
      <h1>Hello babaeo</h1>

      {/* <button onClick={buttonClicked}>Click Me</button> */}
      <button
        onClick={() => {
          console.log("button clicked");
        }}
      >
        Click Crow
      </button>

      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      />
    </div>
  );
};

export default App;
