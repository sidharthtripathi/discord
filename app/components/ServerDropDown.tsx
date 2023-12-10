"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
} from "@nextui-org/react";
import {
  BellIcon,
  CheckIcon,
  DoubleArrowDownIcon,
  ExitIcon,
  LightningBoltIcon,
  LockClosedIcon,
  Pencil1Icon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

export default function App() {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          className="font-semibold h-16"
          fullWidth
          radius="none"
          variant="shadow"
          endContent={<DoubleArrowDownIcon />}
        >
          Server name
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownSection showDivider>
          <DropdownItem startContent={<LightningBoltIcon />}>
            Server Boost
          </DropdownItem>
        </DropdownSection>

        <DropdownSection showDivider>
          <DropdownItem startContent={<PersonIcon />}>
            Invite People
          </DropdownItem>
          <DropdownItem startContent={<RocketIcon />}>
            App directory
          </DropdownItem>
        </DropdownSection>

        <DropdownSection showDivider>
          <DropdownItem startContent={<CheckIcon />}>
            Show all commands
          </DropdownItem>
          <DropdownItem startContent={<BellIcon />}>
            notification settings
          </DropdownItem>
          <DropdownItem startContent={<LockClosedIcon />}>
            privacy settings
          </DropdownItem>
        </DropdownSection>

        <DropdownSection showDivider>
          <DropdownItem startContent={<Pencil1Icon />}>
            Edit server profile
          </DropdownItem>

          <DropdownItem startContent={<CheckIcon />}>
            Hide muted channel
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem startContent={<ExitIcon />}>leave channel</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
