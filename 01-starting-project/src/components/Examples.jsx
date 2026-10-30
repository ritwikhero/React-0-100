import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedButton, setSelectedButton] = useState("");
  function handleClick(selectedButton) {
    setSelectedButton(selectedButton);
    console.log(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedButton === "components"}
          handleClick={() => handleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedButton === "jsx"}
          handleClick={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedButton === "props"}
          handleClick={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton handleClick={() => handleClick("state")}>State</TabButton>
      </menu>
      {!selectedButton ? (
        <p>Select a topic from the menu</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedButton].title}</h3>
          <p>{EXAMPLES[selectedButton].description}</p>
          <code>{EXAMPLES[selectedButton].code}</code>
        </div>
      )}
    </section>
  );
}
