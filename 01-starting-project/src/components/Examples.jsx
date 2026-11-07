import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedButton, setSelectedButton] = useState("");
  function handleClick(selectedButton) {
    setSelectedButton(selectedButton);
    // console.log(selectedButton);
  }
  const tabContent = !selectedButton ? (
    <p>Select a topic from the menu</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedButton].title}</h3>
      <p>{EXAMPLES[selectedButton].description}</p>
      <code>{EXAMPLES[selectedButton].code}</code>
    </div>
  );

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedButton === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedButton === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedButton === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedButton === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
