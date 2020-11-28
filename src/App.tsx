import React from "react";
import { MenuBar } from "./components/MenuBar";
import "./app.css";

export const App: React.FC<{}> = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <div className="Content">
        hello, world<br></br>
        このページは現在工事中です
      </div>
    </div>
  );
};
