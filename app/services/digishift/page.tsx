import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function DigiShiftPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-600 mb-8">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h1 className="text-4xl font-bold mb-6">DigiShift</h1>
          <p className="text-xl text-zinc-300 mb-6">
            Comprehensive digital transformation solutions to modernize your business operations and drive growth in the
            digital economy.
          </p>
          <div className="space-y-6 mt-8">
            <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold text-red-500 mb-3">Digital Assessment</h3>
              <p className="text-zinc-300">
                Evaluate digital maturity and define a transformation roadmap through stakeholder interviews and current
                tool assessment.
              </p>
              <ul className="mt-4 space-y-2 text-zinc-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Stakeholder interviews and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Current technology stack evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Digital maturity scoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Customized transformation roadmap</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold text-red-500 mb-3">E-Commerce Setup</h3>
              <p className="text-zinc-300">
                Establish or optimize online sales platforms using Shopify or WooCommerce with integrated payment
                gateways like Paystack and Flutterwave.
              </p>
              <ul className="mt-4 space-y-2 text-zinc-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Platform selection and setup</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Product catalog management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Order fulfillment optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20214847-6ani41qzx2e1yaP5AFlurPPNQYJyEA.png"
            alt="DigiShift Services"
            width={600}
            height={400}
            className="rounded-lg w-full"
          />

          <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-semibold text-red-500 mb-3">Digital Infrastructure</h3>
            <p className="text-zinc-300">
              Implement cloud-based tools and integrate Customer Relationship Management/Enterprises Resource Planning
              systems for operational efficiency and scalability.
            </p>
            <ul className="mt-4 space-y-2 text-zinc-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Cloud migration strategy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>CRM/ERP selection and implementation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>System integration and data migration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Staff training and adoption support</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-semibold text-red-500 mb-3">Cybersecurity</h3>
            <p className="text-zinc-300">
              Protect digital assets through security audits, staff training, and policy development aligned with
              Nigerian regulations.
            </p>
            <ul className="mt-4 space-y-2 text-zinc-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Security vulnerability assessment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Security policy development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Staff security awareness training</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Regulatory compliance guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
        <Button asChild size="lg" className="bg-red-800 hover:bg-red-900">
          <Link href="#contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  )
}
