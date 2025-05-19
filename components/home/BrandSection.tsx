import Image from "next/image";
import { SectionHeading } from "../section-heading";

export default function BrandSection() {
  return (
    <section className="py-16 bg-zinc-950 text-white border-y border-zinc-800">
      <div className="w-[90vw] md:w-5/6 mx-auto">
        <SectionHeading
          title="Trusted By Leading Brands"
          description="We've partnered with companies across various industries"
          centered={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={`brand-${index + 1}`}
              className={`p-4 grayscale hover:grayscale-0 transition-all animate-fade-up ${
                index % 4 !== 0 ? `animate-delay-${(index % 4) * 100}` : ""
              }`}
            >
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt={`Brand ${index + 1}`}
                width={160}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
