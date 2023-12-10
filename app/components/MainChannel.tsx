import React from "react";
import ChannelNavbar from "./ChannelNavbar";
import Chatbox from "./Chatbox";

function MainChannel() {
  return (
    <div className="flex flex-col grow px-3">
      <ChannelNavbar />
      <Chatbox />
    </div>
  );
}

export default MainChannel;
