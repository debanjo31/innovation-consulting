"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function AnimatedBorderButton({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 2,
  clockwise = true,
  ...props
}: React.PropsWithChildren<{
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
}>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "RIGHT", "BOTTOM", "LEFT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex + 1) % directions.length
      : (currentIndex - 1 + directions.length) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "linear-gradient(to bottom, rgba(255, 0, 0, 0.8) 0%, rgba(220, 38, 38, 0) 100%)",
    RIGHT:
      "linear-gradient(to left, rgba(255, 0, 0, 0.8) 0%, rgba(220, 38, 38, 0) 100%)",
    BOTTOM:
      "linear-gradient(to top, rgba(255, 0, 0, 0.8) 0%, rgba(220, 38, 38, 0) 100%)",
    LEFT: "linear-gradient(to right, rgba(255, 0, 0, 0.8) 0%, rgba(220, 38, 38, 0) 100%)",
  };

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 200);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative p-[2px] group transition-all duration-300",
        containerClassName
      )}
      {...props}
    >
      {/* Base border layer */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg transition-all duration-300",
          "bg-gradient-to-r from-red-600/60 to-red-800/60",
          hovered ? "opacity-80" : "opacity-40"
        )}
      />
      {/* Moving gradient layer */}
      <div className="absolute inset-0 rounded-lg transition-all duration-300">
        {Object.entries(movingMap).map(([key, gradient]) => (
          <div
            key={key}
            className="absolute inset-0 rounded-lg"
            style={{
              opacity: direction === key ? 1 : 0,
              backgroundImage: gradient,
              transition: "opacity 300ms ease-in-out",
              boxShadow:
                direction === key ? "0 0 15px rgba(255, 0, 0, 0.5)" : "none",
            }}
          />
        ))}
      </div>
      {/* Content container */}
      <div
        className={cn(
          "relative text-white rounded-md bg-black/80 backdrop-blur-xl z-10 px-4 py-2",
          "transition-all duration-300",
          hovered ? "bg-black/90" : "bg-black/70",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
