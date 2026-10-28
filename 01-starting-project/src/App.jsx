import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";

function App() {
  const [selectedButton, setSelectedButton] = useState("");
  function handleClick(selectedButton) {
    setSelectedButton(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
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
            <TabButton handleClick={() => handleClick("state")}>
              State
            </TabButton>
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
      </main>
    </div>
  );
}

export default App;
