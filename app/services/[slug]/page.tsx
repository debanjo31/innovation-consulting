import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FeatureCard } from "@/components/feature-card"
import { SectionHeading } from "@/components/section-heading"
import { getServiceBySlug, getServices, getIconByName } from "@/lib/services"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found | Innovation Consulting",
    }
  }

  return {
    title: `${service.title} | Innovation Consulting`,
    description: service.fullDescription,
  }
}

export async function generateStaticParams() {
  const services = getServices()

  return services.map((service) => ({
    slug: service.id,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const Icon = getIconByName(service.icon)

  return (
    <div className="container px-4 py-12 mx-auto">
      <Breadcrumbs items={[{ title: "Services", href: "/services" }, { title: service.title }]} />

      <div className="grid gap-12 md:grid-cols-2 items-start mb-16">
        <div className="animate-fade-right">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-red-800/20 flex items-center justify-center mb-4">
              <Icon className="h-8 w-8 text-red-500" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-zinc-300">{service.fullDescription}</p>
          </div>

          <div className="mt-8">
            <Button asChild size="lg" className="bg-red-800 hover:bg-red-900">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>

        <div className="animate-fade-left">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
      </div>

      <SectionHeading
        title="Key Features"
        description="Our comprehensive approach ensures your business receives the support it needs"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {service.features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            bulletPoints={feature.bulletPoints}
            animationDelay={(index % 4) * 100}
          />
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-br from-zinc-900 to-black rounded-lg p-8 border border-zinc-800 animate-fade-up">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-zinc-300 mb-8">
            Contact our team today to discuss how our {service.title} services can help your business thrive.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-red-800 hover:bg-red-900">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-red-800 text-white hover:bg-red-900/10">
              <Link href="/services">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
