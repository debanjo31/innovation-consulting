import Stats from "@/components/Stats";
import Hero from "@/components/home/Hero";
import HomeServices from "@/components/home/HomeServices";
import BrandSection from "@/components/home/BrandSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen z-0">
      <Hero />
      <HomeServices />
      <Stats />
      <BrandSection />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
