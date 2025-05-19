import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { AnimatedBorderButton } from "../ux/animated-border-button";

const Hero = () => {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/images/home/hero-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="w-[90vw] md:w-5/6 relative z-10 py-24 mx-auto text-center md:py-32">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
          <span className="block">Innovation Consulting</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-xl animate-fade-up animate-delay-100">
          Transforming businesses through strategic innovation and digital
          excellence
        </p>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full max-w-[500px] mx-auto animate-fade-up animate-delay-200">
          <AnimatedBorderButton as="div" className="px-6 py-3">
            <Link href="/services">Explore Our Services</Link>
          </AnimatedBorderButton>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-red-900/10 px-6 py-3"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
