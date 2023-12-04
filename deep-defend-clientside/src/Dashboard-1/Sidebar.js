// Sidebar present in the leftside of the page
import "../index.css";
import SidebarEntity from "../Components/SidebarEntity"

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logoAndLinks">
        <div className="logo sidebarEntity" title="Logo"> LG </div>
        <SidebarEntity content={"A"} linkToAddress="/setting" hoverLabel="A" />
        <SidebarEntity content={"B"} linkToAddress="/setting" hoverLabel="B" />
        <SidebarEntity content={"C"} linkToAddress="/setting" hoverLabel="C" />
        <SidebarEntity content={"D"} linkToAddress="/setting" hoverLabel="D" />
        <SidebarEntity content={"E"} linkToAddress="/setting" hoverLabel="E" />
        <SidebarEntity content={"F"} linkToAddress="/setting" hoverLabel="F" />
        <SidebarEntity content={"G"} linkToAddress="/setting" hoverLabel="G" />
        <SidebarEntity content={"H"} linkToAddress="/setting" hoverLabel="H" />
      </div>
      <div className="helpAndAuth">
        <div className="help" title="Help ?">?</div>
        <div className="auth sidebarEntity" title="Profile">PS</div>
      </div>
    </div>
  );
}
export default Sidebar;