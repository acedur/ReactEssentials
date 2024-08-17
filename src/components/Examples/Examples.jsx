import React, { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import "./examples.css";

function Examples() {
  const [selectedToppic, setSelectedToppic] = useState();

  function handleSelect(selectedButton) {
    setSelectedToppic(selectedButton);
  }

  let tabContent = <p>Select a toppic.</p>;

  if (selectedToppic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedToppic].title}</h3>
        <p>{EXAMPLES[selectedToppic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedToppic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedToppic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedToppic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedToppic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedToppic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}

export default Examples;
