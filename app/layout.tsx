import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { ThemeProvider } from "@/components/theme-provider";
import Resume from "./components/resume";
import { getRepoInfo } from "./api/action";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Muhamad Shafiq bin Sofian",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { stargazers_count, html_url, owner } = await getRepoInfo();
  // console.log(owner);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header starCount={stargazers_count} />
          {children}
          {/* <Resume /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
