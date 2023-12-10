import React from "react";
import DropDown from "./ServerDropDown";
import Channels from "./ChannelsList";
import MainChannel from "./MainChannel";
function Sidebar() {
  return (
    <div className="flex w-full">
      <div className="shrink-0 w-56 flex flex-col">
        <DropDown />
        <Channels />
      </div>
      <MainChannel />
    </div>
  );
}

export default Sidebar;
