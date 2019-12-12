import React, { useState } from "react";

import logo from "./logo.png";
import "./App.scss";

const App = () => {
  const [logoToggling, setLogoToggling] = useState(true);

  const toggleLogo = () => {
    logoToggling === true ? setLogoToggling(false) : setLogoToggling(true);
  };

  return (
    <div className="app">
      <img
        src={logo}
        className={logoToggling === true ? "static-logo" : "animated-logo"}
        alt="logo"
        onClick={toggleLogo}
      />
      <h1>VitaStore</h1>
    </div>
  );
};

export default App;
