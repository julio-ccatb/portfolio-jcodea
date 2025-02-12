"use client";

import { useTheme } from "next-themes";
import { useScroll } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      className={`${scrollYProgress.get() > 0.1 && "text-transparent"}`}
      variant="link"
      size={"icon"}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
