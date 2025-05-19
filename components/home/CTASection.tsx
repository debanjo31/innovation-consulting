import Link from "next/link";
import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-black to-zinc-900 text-white">
      <div className="w-[90vw] md:w-5/6 mx-auto text-center animate-fade-up">
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
  );
}
