import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServices } from "@/lib/services";
import { ServiceCard } from "../service-card";
import { SectionHeading } from "../section-heading";

const HomeServices = () => {
  const services = getServices();
  return (    <section id="services" className="py-16 bg-zinc-900 text-white">
      <div className="w-[90vw] md:w-5/6 mx-auto">
        <SectionHeading
          title="Our Service Offerings"
          description="Comprehensive business solutions tailored to your specific needs"
          centered={true}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              href={`/services/${service.id}`}
              iconName={service.icon}
              animationDelay={(index % 3) * 100}
            />
          ))}

          <div className="relative overflow-hidden rounded-lg group bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 hover:border-red-800/50 hover:shadow-lg animate-fade-up animate-delay-300">
            <div className="p-6">
              <div className="w-12 h-12 mb-4 rounded-full bg-red-800/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-zinc-300">
                Tailored consulting services designed for your specific business
                needs
              </p>
              <Button
                asChild
                variant="link"
                className="mt-4 text-red-500 p-0 flex items-center gap-1 group-hover:text-red-400"
              >
                <Link href="/contact">
                  Contact us{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
