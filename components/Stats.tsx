"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "@/components/CountUp";
import { stats } from "@/data/data";
import { TextGenerateEffect } from "./ux/text-generate-effect";

const Stats = ({ page }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce: true, // Ensures the callback is only triggered once
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      style={{
        backgroundColor: page === "home" ? "rgb(12,38,69)" : "",
        background:
          page === "home"
            ? "linear-gradient(180deg, rgba(12,38,69,1) 20%, rgba(3,5,22,1) 60%)"
            : "",
      }}
      className="py-14 md:py-20 xl:py-28"
    >
      <div
        ref={ref}
        className="w-[90vw] md:w-5/6 mx-auto bg-[url('/images/arc-red.svg')] lg:bg-[url('/images/arc-L-red.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat"
      >
        <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
          <TextGenerateEffect
            words="We build solutions that help businesses of all sizes to scale"
            innerClassName="text-xl md:text-2xl lg:text-3xl font-medium"
            className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto"
            wordStyles={[
              { word: "businesses", classes: "text-[#ef4444]" },
              { word: "scale", classes: "text-[#ef4444]" },
            ]}
          />
          <div className="flex justify-evenly sm:justify-between items-center gap-3">
            {stats.map((stat) => (
              <div
                key={`stat-${stat.title}`}
                className="flex flex-col gap-3 text-left w-fit"
              >
                {isVisible && <CountUp start={0} end={stat.stat} />}
                <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                  {stat.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
