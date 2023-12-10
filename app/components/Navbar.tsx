import { Avatar, Tooltip, Switch } from "@nextui-org/react";

import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

function Navbar() {
  return (
    <div className="shrink-0 flex flex-col justify-between pb-3">
      <div className="space-y-2">
        <Tooltip content="User Name" placement="right">
          <div className="h-fit group flex items-center gap-1 ">
            <div className="h-2 group-hover:h-4 rounded-full w-1 bg-white duration-150"></div>
            <Avatar size="lg" src="/images/kitty1.jpg" />
          </div>
        </Tooltip>
        <Tooltip content="User Name" placement="right">
          <div className="h-fit group flex items-center gap-1 ">
            <div className="h-2 group-hover:h-4 rounded-full w-1 bg-white duration-150"></div>
            <Avatar size="lg" src="/images/kitty2.jpg" />
          </div>
        </Tooltip>
        <Tooltip content="User Name" placement="right">
          <div className="h-fit group flex items-center gap-1 ">
            <div className="h-2 group-hover:h-4 rounded-full w-1 bg-white duration-150"></div>
            <Avatar size="lg" src="/images/kitty3.jpg" />
          </div>
        </Tooltip>
        <Tooltip content="User Name" placement="right">
          <div className="h-fit group flex items-center gap-1 ">
            <div className="h-2 group-hover:h-4 rounded-full w-1 bg-white duration-150"></div>
            <Avatar size="lg" src="/images/kitty4.jpg" />
          </div>
        </Tooltip>
        <Tooltip content="User Name" placement="right">
          <div className="h-fit group flex items-center gap-1 ">
            <div className="h-2 group-hover:h-4 rounded-full w-1 bg-white duration-150"></div>
            <Avatar size="lg" src="/images/kitty5.jpg" />
          </div>
        </Tooltip>
      </div>
      <ThemeSwitcher />
    </div>
  );
}

export default Navbar;
