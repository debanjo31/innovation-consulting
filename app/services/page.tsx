import type { Metadata } from "next"
import { ServiceCard } from "@/components/service-card"
import { SectionHeading } from "@/components/section-heading"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getServices } from "@/lib/services"

export const metadata: Metadata = {
  title: "Our Services | Innovation Consulting",
  description:
    "Explore our comprehensive range of business consulting services designed to help your organization thrive.",
}

export default function ServicesPage() {
  const services = getServices()

  return (
    <div className="container px-4 py-12 mx-auto">
      <Breadcrumbs items={[{ title: "Services" }]} />

      <SectionHeading
        title="Our Services"
        description="Comprehensive business solutions tailored to help your organization thrive in today's competitive landscape."
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
      </div>

      <div className="mt-16 bg-zinc-900 rounded-lg p-8 border border-zinc-800 animate-fade-up">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-zinc-300 mb-6">
              Our team of experts can create tailored solutions specific to your business needs. Contact us today to
              discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-red-800 rounded-md hover:bg-red-900 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-transparent border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors"
              >
                Learn About Us
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-red-800/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
