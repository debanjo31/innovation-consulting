"use client";

import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  innerClassName,
  delay = 0,
  wordStyles = [],
}: {
  words: string;
  className?: string;
  innerClassName?: string;
  delay?: number;
  wordStyles?: { word: string; classes: string }[]; // New wordStyles prop
}) => {
  const [scope, animate] = useAnimate();
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !hasAnimated && typeof animate === "function") {
      if (delay > 0) {
        setTimeout(() => {
          animateAnimation();
        }, delay * 1000);
      } else {
        animateAnimation();
      }
    }
  }, [isInView, hasAnimated, animate, delay]);

  const animateAnimation = () => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
    setHasAnimated(true);
  };

  let wordsArray = words.split(" ");

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const wordStyle = wordStyles.find((style) => style.word === word);
          const classes = wordStyle ? wordStyle.classes : "";
          return (
            <motion.span
              key={word + idx}
              className={`opacity-0 ${classes}`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)} ref={ref}>
      <div className="">
        <p
          className={
            innerClassName
              ? innerClassName
              : `text-darkGrey text-base md:text-lg mb-8 leading-7`
          }
        >
          {renderWords()}
        </p>
      </div>
    </div>
  );
};
