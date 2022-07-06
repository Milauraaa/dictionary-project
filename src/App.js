import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App m-2">
      <div className="container">
        <Dictionary />
        <footer className="text-center">
          <a
            href="https://github.com/Milauraaa/dictionary-project"
            target="_blank"
          >
            Open-source code,
          </a>{" "}
          by Mila Yemelianenko.
        </footer>
      </div>
    </div>
  );
}

export default App;
