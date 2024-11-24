import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="grid mt-10 p-4 bg-stone-200 dark:bg-background">
      <p>&copy; {currentYear} M. Shafiq Sofian</p>
    </div>
  );
}
