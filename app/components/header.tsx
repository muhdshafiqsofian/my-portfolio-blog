import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { DarkModeToggle } from "./dark-mode-toggle";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type HeaderProps = {
  starCount: number;
  url?: string;
};

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export default function Header({ starCount }: HeaderProps) {
  const navItems: NavItem[] = [
    { name: "About", href: "#resume", icon: null },
    // { name: "Blog", href: "/blog", icon: null },
    { name: "Contact", href: "/contact", icon: null },
  ];

  return (
    <header className="gap-4 p-4 fixed z-50 w-full bg-stone-200 dark:bg-background">
      <div className="grid grid-cols-3 justify-between items-center">
        <nav>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-md hover:bg-slate-100 hover:text-black transition"
                    )}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex justify-center"></div>
        <div className="flex gap-4 justify-end">
          <Button variant="ghost">
            <Github className="fill-white" />
            Star {starCount}
            {/* <Star className="fill-yellow-500 stroke-yellow-700" /> */}
          </Button>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
