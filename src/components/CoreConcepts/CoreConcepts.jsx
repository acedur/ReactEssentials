import React from "react";
import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import "./CoreConcepts.css";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItems) => (
          <CoreConcept key={conceptItems.title} {...conceptItems} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
