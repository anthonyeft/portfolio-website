"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./ui/hooks/use-outside-click";
import { publications } from "@/data";
import MagicButton from "./ui/MagicButton";
import ThemeCard from "./ui/ThemeCard";
import Image from 'next/image';

const Publications = () => {
  const [active, setActive] = useState<(typeof publications)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <ThemeCard
              layoutId={`publication-${active.title}-${id}`}
              ref={ref}
              otherClasses="w-full max-w-[600px] h-fit max-h-[90%] flex flex-col rounded-[30px] p-10"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
              >
                <Image
                  src={active.src}
                  alt={active.title}
                  width={800}
                  height={600}
                  priority={true}
                  className="w-full h-60 rounded-tr-lg rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start py-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>

                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <MagicButton
                    layoutId={`button-${active.title}-${id}`}
                    otherClasses="px-4 py-2 font-bold"
                    title={active.ctaText}
                  />
                </div>

                {/* New Abstract Section */}
                <div className="flex flex-col">
                  <motion.h3
                    layoutId={`abstract-title-${active.title}-${id}`}
                    className="font-bold text-neutral-200"
                  >
                    Abstract
                  </motion.h3>

                  <div className="relative">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-400 text-xs md:text-sm lg:text-base h-fit pr-2 pb-4 rounded-bl-[15px] overflow-y-scroll scrollbar-webkit"
                      style={{
                        maxHeight: '300px',
                        overflowY: 'auto',
                        maskImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0% 90%, rgba(255, 255, 255, 0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0% 90%, rgba(255, 255, 255, 0) 100%)',
                      }}
                    >
                      { active?.content }
                    </motion.div>
                  </div>
                </div>
              </div>
            </ThemeCard>
          </div>
        ) : null}
      </AnimatePresence>

      <section
        id="publications"
        className="flex flex-col py-12"
      >
        <h1 className="heading mb-14">
          Publications
        </h1>
        
        <ul className="max-width-2xl mx-auto w-full gap-4">
          {publications.map((publication, index) => (
            <ThemeCard
              layoutId={`publication-${publication.title}-${id}`}
              key={`publication-${publication.title}-${id}`}
              onClick={() => setActive(publication)}
              otherClasses="pt-4 pl-4 pb-4 pr-6 flex flex-col md:flex-row justify-between items-center rounded-[18px] cursor-pointer"
            >
              <div className="flex gap-4 flex-col md:flex-row ">
                <motion.div layoutId={`image-${publication.title}-${id}`}>
                  <Image
                    src={publication.src}
                    alt="Coming Soon"
                    width={800}
                    height={600}
                    priority={false}
                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top text-base"
                  />
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${publication.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                  >
                    {publication.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${publication.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                  >
                    {publication.description}
                  </motion.p>
                </div>
              </div>
              <MagicButton
                title={publication.ctaText}
                layoutId={`button-${publication.title}-${id}`}
                otherClasses="px-4 py-2 font-bold"
              />
            </ThemeCard>          
          ))}
        </ul>
      </section>
    </>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default Publications;
