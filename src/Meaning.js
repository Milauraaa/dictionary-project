import React from "react";
import Synonyms from "./Synonyms.js";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              <strong className="section">Definition: </strong>
              {definition.definition}
              <br />
              <strong className="section">Example: </strong>
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
