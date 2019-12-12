import React, { useState } from "react";

import logo from "./logo.png";
import "./App.scss";

import Card from "./components/Card/Card";

const App = () => {
  const [logoToggling, setLogoToggling] = useState(true);
  const [cards, setCards] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ]);

  const toggleLogo = () => {
    logoToggling === true ? setLogoToggling(false) : setLogoToggling(true);
  };

  return (
    <div className="app">
      <img
        src={logo}
        className={
          logoToggling === true ? "app-logo-static" : "app-logo-animated"
        }
        alt="logo"
        onClick={toggleLogo}
      />
      <h1>VitaStore</h1>

      <div className="app-grid">
        {cards.map(card => (
          <Card duration={150} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
