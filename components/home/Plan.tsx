"use client";

// import ActionButton from "@/components/ActionButton";
import Image from "next/image";
import React, { useState } from "react";
import { TextGenerateEffect } from "@/components/ux/text-generate-effect";

const plans = [
  { name: "Idea" },
  { name: "Design" },
  { name: "Develop" },
  { name: "Launch" },
];
const Plan = () => {
  const [activePlanIndex, setActivePlanIndex] = useState<number>(0);

  return (
    <div className="w-[90vw] md:w-5/6 mx-auto py-20">
      <TextGenerateEffect
        words="From Vision to Reality: Your Journey to Innovation"
        innerClassName="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]"
        className="mb-12 xl:mb-0 max-w-[45rem]"
        wordStyles={[
          { word: "Vision", classes: "text-red-500 capitalize" },
          { word: "Innovation", classes: "text-red-500 capitalize" },
        ]}
      />
      <div className="flex lg:items-end flex-col md:flex-row">
        <div className="basis-1/2 flex mb-8 md:mb-0">
          <div className="md:pr-10">
            <div className="border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
              {plans.map((plan, index) => (
                <div
                  onClick={() => setActivePlanIndex(index)}
                  key={index}
                  className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 ${
                    index === activePlanIndex
                      ? "bg-red-500 text-white"
                      : "bg-transparent text-white"
                  }`}
                >
                  {plan.name}
                </div>
              ))}
            </div>

            {activePlanIndex === 0 ? (
              <React.Fragment key={activePlanIndex}>
                <TextGenerateEffect
                  words="Transform Ideas into Opportunities"
                  innerClassName="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12"
                />
                <TextGenerateEffect words="Every groundbreaking solution starts with an idea. We help refine your vision with strategic insights and market expertise to create a solid foundation for success." />
              </React.Fragment>
            ) : activePlanIndex === 1 ? (
              <React.Fragment key={activePlanIndex}>
                <TextGenerateEffect
                  words="Design with Purpose"
                  innerClassName="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12"
                />
                <TextGenerateEffect words="We transform concepts into intuitive experiences, creating designs that not only look stunning but drive engagement and conversions." />
              </React.Fragment>
            ) : activePlanIndex === 2 ? (
              <React.Fragment key={activePlanIndex}>
                <TextGenerateEffect
                  words="Building Tomorrow's Solutions"
                  innerClassName="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12"
                />
                <TextGenerateEffect words="Our expert development team brings your vision to life, creating robust and scalable solutions that set new industry standards." />
              </React.Fragment>
            ) : activePlanIndex === 3 ? (
              <React.Fragment key={activePlanIndex}>
                <TextGenerateEffect
                  words="Launch and Scale"
                  innerClassName="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12"
                />
                <TextGenerateEffect words="We ensure your product not only successfully launches but continues to grow and evolve, maximizing its market impact and user adoption." />
              </React.Fragment>
            ) : null}
            {/* <ActionButton buttonText="Book a call" width="w-fit" play book /> */}
          </div>
        </div>
        <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
          {activePlanIndex === 0 ? (
            <Image
              className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px] border-2 border-accent2 rounded-lg"
              src="/images/home/hero-bg.png"
              alt="plan-img"
              width={200}
              height={200}
              key={activePlanIndex}
            />
          ) : activePlanIndex === 1 ? (
            <Image
              className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px] border-2 border-accent2 rounded-lg"
              src="/images/home/hero-bg.png"
              alt="plan-img"
              width={200}
              height={200}
              key={activePlanIndex}
            />
          ) : activePlanIndex === 2 ? (
            <Image
              className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px] border-2 border-accent2 rounded-lg"
              src="/images/home/hero-bg.png"
              alt="plan-img"
              width={200}
              height={200}
              key={activePlanIndex}
            />
          ) : activePlanIndex === 3 ? (
            <Image
              className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px] border-2 border-accent2 rounded-lg"
              src="/images/home/hero-bg.png"
              alt="plan-img"
              width={200}
              height={200}
              key={activePlanIndex}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Plan;
