import React, { useState, useEffect } from "react";

import logo from "./logo.png";
import { products } from "./data/store";
import "./App.scss";

import Card from "./components/Card/Card";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [state, setState] = useState({
    logoToggling: true,
    loading: true,
    cards: products
  });

  useEffect(() => {
    setTimeout(() => setState({ ...state, loading: false }), 3000);
  }, []);

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

      {state.loading ? (
        <Loading />
      ) : (
        <div className="app-grid">
          {state.cards.map(card => (
            <Card key={card.id} card={card} clickCard={clickCard} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
