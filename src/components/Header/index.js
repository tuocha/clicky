import React from "react";
import "./style.css";

function Header() {
  return (
    <div id="header">
      <img
        id="header-image"
        alt="background"
        className="responsive-img"
        src="https://wallpaperplay.com/walls/full/b/2/a/313783.jpg"
      ></img>

      <div id="text">
          <h1>CLICKY</h1>
          <h3>click an image to earn points, but don't click the same image more than once</h3>
      </div>
    </div>
  );
}

export default Header;
