import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="city" />
        <footer className="text-center">
          <a href="https://github.com/Milauraaa/dictionary-project">
            Open-source code,
          </a>{" "}
          by Mila Yemelianenko
        </footer>
      </div>
    </div>
  );
}

export default App;
