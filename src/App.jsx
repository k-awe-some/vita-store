import React, { useState } from "react";

import logo from "./logo.png";
import { products } from "./data/store";
import "./App.scss";

import Card from "./components/Card/Card";

const App = () => {
  const [state, setState] = useState({
    logoToggling: true,
    cards: products
  });

  const toggleLogo = () => {
    state.logoToggling === true
      ? setState({ ...state, logoToggling: false })
      : setState({ ...state, logoToggling: true });
  };

  const clickCard = card => {
    let animatedCards = state.cards;
    animatedCards[card.id].animation = "card animated zoomOut";
    setState({ ...state, cards: animatedCards });
  };

  return (
    <div className="app">
      <img
        src={logo}
        className={
          state.logoToggling === true
            ? "app-logo-static"
            : "app-logo-static animated jello"
        }
        alt="logo"
        onMouseEnter={toggleLogo}
        onMouseLeave={toggleLogo}
      />
      <h1>VitaStore</h1>

      <div className="app-grid">
        {state.cards.map(card => (
          <Card key={card.id} card={card} clickCard={clickCard} />
        ))}
      </div>
    </div>
  );
};

export default App;
