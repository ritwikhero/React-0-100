import React from "react";

const App = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
