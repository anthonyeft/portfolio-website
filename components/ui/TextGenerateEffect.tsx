"use client";
import { useEffect, useState, useLayoutEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure the effect only runs on the client (avoid hydration mismatches)
  useLayoutEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      animate("span", { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration, delay: stagger(0.2, { startDelay: delay }) });
    }
  }, [animate, delay, duration, filter, hasMounted]);  

  // Precompute words array (avoid recalculating on every render)
  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {hasMounted && (
            <motion.div ref={scope}>
              {wordsArray.map((word, idx) => (
                <motion.span
                  key={idx}
                  className="text-white opacity-0"
                  style={{ filter: filter ? "blur(10px)" : "none" }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;