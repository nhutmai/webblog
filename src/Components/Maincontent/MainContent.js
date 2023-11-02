import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <div id="main">
      <img
        id="main__content-image"
        src="https://images.viblo.asia/full/0dd306a2-831f-433b-96a0-827725ca37a7.png"
      ></img>
      <div className="main__content">
        <div className="main__content-blog">
          <h1>phần nội dung</h1>
          <p></p>
        </div>
        <div className="main__content-suggest">
          <h1>phần suggest</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
