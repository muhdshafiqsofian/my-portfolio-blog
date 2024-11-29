"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <TypeAnimation
      sequence={[
        "Hi! 👋",
        1000,
        "I'm Shafiq 🤝",
        1000,
        // "a Software Developer",
        // 1000,
        // "driven by technology",
        // 1000,
        // "inspired by space",
        // 1000,
      ]}
      deletionSpeed={50}
      wrapper="span"
      speed={50}
      // style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
