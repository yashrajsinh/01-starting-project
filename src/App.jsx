import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

//special react func to deal with data it's called Hook
import { useState } from "react";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  //let tabContent = 'Please click a button';

  function handleClick(selectedButton) {
    //Selected button should be string in values
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p> Please select a topic. </p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3> {EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItems) => (
              <CoreConcept {...conceptItems} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              {" "}
              Components{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              {" "}
              JSX{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              {" "}
              Props{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              {" "}
              State{" "}
            </TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

