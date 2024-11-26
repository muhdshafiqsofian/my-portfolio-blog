import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-stone-200 dark:bg-background w-full">
      <div className="grid grid-cols- md:grid-cols-4 mt-10 py-8 gap-4 justify-items-center w-[50%] mx-auto">
        <div className="">
          <label className="font-bold text-xl">M. Shafiq Sofian</label>
          <p className="text-sm text-muted-foreground">
            Product Development Engineer
          </p>
        </div>
        <div className="space-y-2">
          <label className="font-bold">Links</label>
          <ul className="space-y-2">
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="space-y-2">
          <label className="font-bold">Credits</label>
          <ul className="space-y-2">
            <li>json-resume</li>
            <li>Deno</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p>Made with &hearts; Next.js</p>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} M. Shafiq Sofian All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
