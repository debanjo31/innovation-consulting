import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";

import Stats from "@/components/Stats";
import Hero from "@/components/home/Hero";
import HomeServices from "@/components/home/HomeServices";

export default function Home() {
 

  return (
    <div className="flex flex-col min-h-screen z-0">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <HomeServices />
      <Stats />

      {/* Brands Section */}
      <section className="py-16 bg-zinc-950 text-white border-y border-zinc-800">
        <div className="container px-4 mx-auto">
          <SectionHeading
            title="Trusted By Leading Brands"
            description="We've partnered with companies across various industries"
            centered={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="p-4 grayscale hover:grayscale-0 transition-all animate-fade-up">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Brand 1"
                width={160}
                height={80}
              />
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all animate-fade-up animate-delay-100">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Brand 2"
                width={160}
                height={80}
              />
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all animate-fade-up animate-delay-200">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Brand 3"
                width={160}
                height={80}
              />
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all animate-fade-up animate-delay-300">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Brand 4"
                width={160}
                height={80}
              />
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all animate-fade-up">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Brand 5"
                width={160}
                height={80}
              />
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all animate-fade-up animate-delay-100">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Brand 6"
                width={160}
                height={80}
              />
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all animate-fade-up animate-delay-200">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Brand 7"
                width={160}
                height={80}
              />
            </div>
            <div className="p-4 grayscale hover:grayscale-0 transition-all animate-fade-up animate-delay-300">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="Brand 8"
                width={160}
                height={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container px-4 mx-auto">
          <SectionHeading
            title="Why Choose Innovation Consulting"
            description="We deliver measurable results through our expertise and tailored approach"
            centered={true}
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg bg-zinc-800 border border-zinc-700 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up">
              <div className="w-12 h-12 mb-4 rounded-full bg-red-800/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
              <p className="text-zinc-300">
                Our team brings years of industry experience and specialized
                knowledge to every project, ensuring optimal solutions for your
                business challenges.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-zinc-800 border border-zinc-700 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up animate-delay-100">
              <div className="w-12 h-12 mb-4 rounded-full bg-red-800/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
              <p className="text-zinc-300">
                We create customized strategies that address your specific
                business challenges and goals, rather than applying
                one-size-fits-all approaches.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-zinc-800 border border-zinc-700 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up animate-delay-200">
              <div className="w-12 h-12 mb-4 rounded-full bg-red-800/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Measurable Results</h3>
              <p className="text-zinc-300">
                We focus on delivering quantifiable outcomes that drive real
                business growth, with clear metrics and reporting to track
                progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-black to-zinc-900 text-white">
        <div className="container px-4 mx-auto text-center animate-fade-up">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with our expert team and
            discover how we can help you achieve your business goals.
          </p>
          <Button asChild size="lg" className="bg-red-800 hover:bg-red-900">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
