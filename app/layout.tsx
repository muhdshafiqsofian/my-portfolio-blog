import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "./components/header";
import { ThemeProvider } from "@/components/theme-provider";
// import { getRepoInfo } from "./api/action";
// import Footer from "./components/footer";

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
  // const { stargazers_count } = await getRepoInfo();
  // console.log(owner);

  return (
    <html lang="en" className="scrollbar-none">
      <body className={`${inter.className} w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
