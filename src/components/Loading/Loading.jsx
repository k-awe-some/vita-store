import React from "react";

import "./Loading.scss";

const Loading = () => {
  return (
    <div>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      <h1>Once these dots disappear please begin scrolling!</h1>
    </div>
  );
};

export default Loading;
