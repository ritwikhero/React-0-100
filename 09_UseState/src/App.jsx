import React from "react";
import { useState } from "react";
const App = () => {
  const [a, setA] = useState(10);

  return (
    <div>
      <h1>Hi my value is {a}</h1>
      <button
        onClick={() => {
          console.log(a);

          setA(a + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
