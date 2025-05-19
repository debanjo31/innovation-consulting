"use client";

import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="w-full">
      <div
        className={cn("w-[90vw] md:w-5/6 mx-auto", className)}
      >
        {children}
      </div>
    </div>
  );
}
