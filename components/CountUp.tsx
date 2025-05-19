"use client"

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  start?: number;
  end: number;
}

const CountUp = ({ start = 0, end }: CountUpProps) => {
  const [value, setValue] = useState<number>(start);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Ensure animation stops if component unmounts
    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, []);

  useEffect(() => {
    const startTimestamp = performance.now();
    const duration = 1000; // Animation duration in milliseconds

    const animateCount = (timestamp: number) => {
      const elapsedTime = timestamp - startTimestamp;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is capped at 1
      const animatedValue = Math.floor(start + (end - start) * progress);

      setValue(animatedValue);

      if (progress < 1) {
        // Continue animation until progress reaches 1
        animationRef.current = requestAnimationFrame(animateCount);
      }
    };

    // Start animation loop
    animationRef.current = requestAnimationFrame(animateCount);

    return () => {
      // Clean up animation frame if component unmounts
      cancelAnimationFrame(animationRef.current!);
    };
  }, [start, end]);

  return (
    <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
      {value}+
    </div>
  );
};

export default CountUp;

