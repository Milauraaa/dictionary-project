import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  function playAudio(event) {
    let audio = props.phonetic.audio;
    const audioSound = new Audio(audio);
    audioSound.play();
  }
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a href="/" onClick={playAudio}>
          <i class="fa-solid fa-volume-high icon"></i>
        </a>
        <br />
        <span className="transcription">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
