import { SectionHeading } from "../section-heading";

const features = [
  {
    title: "Industry Expertise",
    description:
      "Our team brings years of industry experience and specialized knowledge to every project, ensuring optimal solutions for your business challenges.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Tailored Solutions",
    description:
      "We create customized strategies that address your specific business challenges and goals, rather than applying one-size-fits-all approaches.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "Measurable Results",
    description:
      "We focus on delivering quantifiable outcomes that drive real business growth, with clear metrics and reporting to track progress.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="w-[90vw] md:w-5/6 mx-auto">
        <SectionHeading
          title="Why Choose Innovation Consulting"
          description="We deliver measurable results through our expertise and tailored approach"
          centered={true}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-6 rounded-lg bg-zinc-800 border border-zinc-700 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up ${
                index > 0 ? `animate-delay-${index * 100}` : ""
              }`}
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-red-800/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-zinc-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
