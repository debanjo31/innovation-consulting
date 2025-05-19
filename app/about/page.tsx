import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "About Us | Innovation Consulting",
  description:
    "Learn about Innovation Consulting, our mission, values, and the expert team behind our business transformation services.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <Breadcrumbs items={[{ title: "About Us" }]} />

      <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
        <div className="animate-fade-right">
          <SectionHeading
            title="About Innovation Consulting"
            description="Transforming businesses through strategic innovation and digital excellence since 2015"
          />

          <p className="text-zinc-300 mb-6">
            Innovation Consulting was founded with a clear mission: to help businesses navigate the complex landscape of
            digital transformation and business growth. Our team of experts brings decades of combined experience across
            various industries, allowing us to provide tailored solutions that address the unique challenges faced by
            our clients.
          </p>

          <p className="text-zinc-300 mb-6">
            Based in Lagos, Nigeria, we've worked with businesses of all sizes, from startups to established
            enterprises, helping them optimize their operations, expand their market reach, and achieve sustainable
            growth.
          </p>

          <div className="mt-8">
            <Button asChild className="bg-red-800 hover:bg-red-900">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl animate-fade-left">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20214803-lSyzp0alHr4fBdj7uBZDVVCM1mjPpY.png"
            alt="Innovation Consulting Team"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <SectionHeading title="Our Values" centered={true} />

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up">
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Excellence</h3>
          <p className="text-zinc-300">
            We are committed to delivering the highest quality services and solutions that exceed our clients'
            expectations.
          </p>
        </div>

        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up animate-delay-100">
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Collaboration</h3>
          <p className="text-zinc-300">
            We work closely with our clients, fostering partnerships that drive mutual success and sustainable growth.
          </p>
        </div>

        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up animate-delay-200">
          <div className="w-12 h-12 mb-4 rounded-full bg-red-800/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Innovation</h3>
          <p className="text-zinc-300">
            We embrace change and continuously seek innovative solutions to help our clients stay ahead in a rapidly
            evolving business landscape.
          </p>
        </div>
      </div>

      <SectionHeading title="Our Leadership Team" centered={true} />

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up">
          <div className="relative h-64">
            <Image src="/placeholder.svg?height=300&width=400" alt="CEO" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
            <p className="text-red-500 mb-4">Chief Executive Officer</p>
            <p className="text-zinc-300">
              With over 15 years of experience in business strategy and digital transformation, Sarah leads our team
              with vision and expertise.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up animate-delay-100">
          <div className="relative h-64">
            <Image src="/placeholder.svg?height=300&width=400" alt="CTO" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Michael Adeyemi</h3>
            <p className="text-red-500 mb-4">Chief Technology Officer</p>
            <p className="text-zinc-300">
              Michael brings deep technical expertise and innovation leadership to our digital transformation
              initiatives.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up animate-delay-200">
          <div className="relative h-64">
            <Image src="/placeholder.svg?height=300&width=400" alt="COO" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Chioma Okonkwo</h3>
            <p className="text-red-500 mb-4">Chief Operations Officer</p>
            <p className="text-zinc-300">
              Chioma ensures operational excellence across all our service offerings, with a focus on client
              satisfaction and results.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-black rounded-lg p-8 border border-zinc-800 text-center animate-fade-up">
        <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
          Contact our team today to discuss how Innovation Consulting can help your business thrive in today's
          competitive landscape.
        </p>
        <Button asChild size="lg" className="bg-red-800 hover:bg-red-900">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}
