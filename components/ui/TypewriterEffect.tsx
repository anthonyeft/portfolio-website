"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <Typewriter
      options={{
        strings: ["AI in healthcare.", "learning.", "problem-solving."],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 75,
      }}
    />
  );
}
