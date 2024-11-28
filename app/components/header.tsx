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

const email = "muhdshafiqsofian@gmail.com";
const subject = "Inquiry About Your Services";
// const body = `Hi Shafiq, %0AI am interested in learning more about your services. Thank you, Your Name`;
const body = `Hi Shafiq,%0A%0AI am interested in learning more about your services.%0A%0AThank you,`;

export default function Header() {
  const navItems: NavItem[] = [
    { name: "About", href: "#about", icon: null },
    { name: "Projects", href: "#projects", icon: null },
    {
      name: "Contact",
      href: `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`,
      icon: null,
    },
  ];

  return (
    <header className="gap-4 p-4 fixed z-50 bg-stone-200 dark:bg-background">
      <div className="grid grid-cols-3 justify-between items-center">
        <nav>
          <NavigationMenu>
            <NavigationMenuList className="flex md:gap-4">
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
