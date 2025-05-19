import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4">Innovation Consulting</h3>
            <p className="text-zinc-400">
              Transforming businesses through strategic innovation and digital excellence.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/digishift" className="text-zinc-400 hover:text-red-500 transition-colors">
                  DigiShift
                </Link>
              </li>
              <li>
                <Link href="/services/capspring" className="text-zinc-400 hover:text-red-500 transition-colors">
                  CAPSPRING
                </Link>
              </li>
              <li>
                <Link href="/services/talentforge" className="text-zinc-400 hover:text-red-500 transition-colors">
                  TalentForge
                </Link>
              </li>
              <li>
                <Link href="/services/smartstart" className="text-zinc-400 hover:text-red-500 transition-colors">
                  SmartStart Compass
                </Link>
              </li>
              <li>
                <Link href="/services/etrademarket" className="text-zinc-400 hover:text-red-500 transition-colors">
                  eTradeMarket
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-zinc-400 hover:text-red-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about#careers" className="text-zinc-400 hover:text-red-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-red-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-zinc-400">
              <p>123 Business Avenue</p>
              <p>Victoria Island, Lagos</p>
              <p className="mt-2">Email: info@innovationconsulting.com</p>
              <p>Phone: +234 123 456 7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Innovation Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
