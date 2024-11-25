import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { DarkModeToggle } from "./dark-mode-toggle";

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export default function Header() {
  const navItems: NavItem[] = [
    { name: "About", href: "#about", icon: null },
    { name: "Projects", href: "#projects", icon: null },
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
                      "flex items-center px-4 py-2 rounded-md hover:underline"
                    )}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-bold">{item.name}</span>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex justify-center"></div>
        <div className="flex gap-4 justify-end">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
