import React, { useState } from "react";
import TabButton from "../TabButton/TabButton";
import Section from "../Section";
import Tabs from "../Tabs";
import { EXAMPLES } from "../../data";
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
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedToppic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedToppic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedToppic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedToppic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      />

      {tabContent}
    </Section>
  );
}

export default Examples;
