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
          Open-source code, by Mila Yemelianenko
        </footer>
      </div>
    </div>
  );
}

export default App;
