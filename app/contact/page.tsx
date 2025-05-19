import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Innovation Consulting",
  description:
    "Get in touch with Innovation Consulting to discuss your business needs and how we can help you achieve your goals.",
}

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <Breadcrumbs items={[{ title: "Contact Us" }]} />

      <SectionHeading
        title="Contact Us"
        description="Get in touch with our team to discuss how we can help your business"
      />

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up">
          <div className="w-12 h-12 mb-4 rounded-full bg-red-800/20 flex items-center justify-center">
            <Phone className="h-6 w-6 text-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="text-zinc-300 mb-2">Our team is available Monday-Friday, 9am-5pm</p>
          <a href="tel:+2341234567890" className="text-red-500 hover:text-red-400 font-medium">
            +234 123 456 7890
          </a>
        </div>

        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up animate-delay-100">
          <div className="w-12 h-12 mb-4 rounded-full bg-red-800/20 flex items-center justify-center">
            <Mail className="h-6 w-6 text-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-zinc-300 mb-2">Our support team will get back to you within 24 hours</p>
          <a href="mailto:info@innovationconsulting.com" className="text-red-500 hover:text-red-400 font-medium">
            info@innovationconsulting.com
          </a>
        </div>

        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up animate-delay-200">
          <div className="w-12 h-12 mb-4 rounded-full bg-red-800/20 flex items-center justify-center">
            <MapPin className="h-6 w-6 text-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Office</h3>
          <p className="text-zinc-300 mb-2">Come visit our office in Lagos</p>
          <address className="not-italic text-red-500">
            123 Business Avenue
            <br />
            Victoria Island, Lagos
            <br />
            Nigeria
          </address>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-5 items-start">
        <div className="md:col-span-2 animate-fade-right">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-zinc-300 mb-6">
            Have questions about our services or want to discuss your business needs? Fill out the form and our team
            will get back to you promptly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-red-800/20 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Expert Consultation</h3>
                <p className="text-zinc-400 text-sm">Speak with our industry specialists</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-red-800/20 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Quick Response</h3>
                <p className="text-zinc-400 text-sm">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-red-800/20 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Tailored Solutions</h3>
                <p className="text-zinc-400 text-sm">Customized to your business needs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 animate-fade-left">
          <div className="p-8 rounded-lg bg-zinc-900 border border-zinc-800">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your company"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">
                  Service of Interest
                </label>
                <select
                  id="service"
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="digishift">DigiShift</option>
                  <option value="capspring">CAPSPRING</option>
                  <option value="talentforge">TalentForge</option>
                  <option value="smartstart">SmartStart Compass</option>
                  <option value="etrademarket">eTradeMarket</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tell us about your project or inquiry"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="privacy"
                  type="checkbox"
                  className="h-4 w-4 text-red-500 focus:ring-red-500 border-zinc-700 rounded"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-zinc-300">
                  I agree to the{" "}
                  <a href="#" className="text-red-500 hover:text-red-400">
                    privacy policy
                  </a>
                </label>
              </div>

              <Button type="submit" className="w-full bg-red-800 hover:bg-red-900">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-16 animate-fade-up">
        <div className="rounded-lg overflow-hidden h-[400px] border border-zinc-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7302424749484!2d3.4216229999999997!3d6.4280812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5de6b847fe!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1621345678901!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
