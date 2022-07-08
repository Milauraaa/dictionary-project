import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        <h5>What word do you want to look up?</h5>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="enter-word"
              autoComplete="off"
              className="input"
              onChange={handleKeywordChange}
              required
            />
            <label forhtml="enter-word" className="label-name">
              <span className="content-input">search for a word</span>
            </label>
          </form>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
