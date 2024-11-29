import React from "react";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { NavItem } from "../types";

const navItems: NavItem[] = [
  { name: "About", href: "#about", icon: null },
  { name: "Projects", href: "#projects", icon: null },
];

export default function Footer(data: ResumeSchema) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-stone-200 dark:bg-muted rounded-t-lg w-full text-sm">
      <div className="flex flex-wrap mt-10 px-4 py-8 gap-8 justify-around lg:w-[60%] lg:mx-auto">
        <div className="flex-1 basis-full lg:flex-none lg:basis-0 text-center">
          <label className="font-bold text-xl">Muhamad Shafiq Sofian</label>
          <p className="text-sm text-muted-foreground">
            Product Development Engineer
          </p>
          <div className="flex gap-2 justify-center text-sm mt-2">
            {data.basics?.profiles?.map((item) => {
              return (
                <Badge key={item.url}>
                  <Link
                    href={item.url || "https://github.com/muhdshafiqsofian/"}
                    target="_blank"
                  >
                    {item.network}
                  </Link>
                </Badge>
              );
            })}
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-bold">Links</label>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <label className="font-bold">Credits</label>
          <ul className="space-y-2">
            <li>
              Schema from{" "}
              <Link href="https://jsonresume.org/schema" target="_blank">
                JSON Resume
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p>Made with &hearts; and Next.js</p>
          <p className="text-muted-foreground">
            &copy; {currentYear} muhdshafiqsofian All rights reserved
          </p>
          <p>Powered by own Homelab</p>
        </div>
      </div>
    </footer>
  );
}
