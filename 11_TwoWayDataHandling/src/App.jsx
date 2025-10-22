import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted with name: " + name);
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
