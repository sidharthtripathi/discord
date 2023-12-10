"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      color="default"
      isSelected={isSelected}
      onValueChange={() => {
        if (isSelected) setTheme("light");
        else setTheme("dark");
        setIsSelected((p) => !p);
      }}
    />
  );
}
