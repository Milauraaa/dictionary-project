import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} tagret="_blank">
        listen
      </a>
      <br />
      <span className="transcription">{props.phonetic.text}</span>
    </div>
  );
}
