import React from "react";
import "./menubar.css";

export const MenuBar: React.FC = () => {
  return (
  <div className="MenuBar">
    <div className="MenuBar__Logo">logo</div>
    <input type="text" className="MenuBar__SearchInput"></input>
    <button className="MenuBar__WriteButton">write</button>
    <button className="MenuBar__AccountButton">account</button>
  </div>
  );
}
