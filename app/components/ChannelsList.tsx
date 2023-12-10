"use client";
import React from "react";
import {
  Listbox,
  ListboxItem,
  ListboxSection,
  ScrollShadow,
  cn,
} from "@nextui-org/react";
import { Link2Icon, SpeakerModerateIcon } from "@radix-ui/react-icons";

export default function Channels() {
  return (
    <ScrollShadow hideScrollBar>
      <Listbox variant="flat" aria-label="Listbox menu with sections">
        <ListboxSection title="SERVER" showDivider>
          <ListboxItem startContent={<Link2Icon />} key="new">
            Annoucement
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="copy">
            Items
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            Get roles
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            Levels
          </ListboxItem>
        </ListboxSection>
        <ListboxSection title="GENERAL CHANNELS" showDivider>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            general
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            learning-diaries
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            off-topic
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            tech-news
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            share
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            video-ideas
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            dev-news
          </ListboxItem>
        </ListboxSection>
        <ListboxSection title="PROGRAMMING" showDivider>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            javascript
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            react
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            deno
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            nodejs
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            python
          </ListboxItem>
        </ListboxSection>
        <ListboxSection title="Support" showDivider>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            carrier-advice
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            help-and-review
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            portfolio
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            resources
          </ListboxItem>
        </ListboxSection>
        <ListboxSection title="COURSES" showDivider>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            dom-in-depth
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            js-in-depth
          </ListboxItem>
          <ListboxItem startContent={<Link2Icon />} key="edit">
            react-in-depth
          </ListboxItem>
        </ListboxSection>

        <ListboxSection title="VOICE CHANNEL" showDivider>
          <ListboxItem startContent={<SpeakerModerateIcon />} key="edit">
            genral
          </ListboxItem>
        </ListboxSection>
      </Listbox>
    </ScrollShadow>
  );
}
