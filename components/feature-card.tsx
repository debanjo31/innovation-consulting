import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  bulletPoints?: string[]
  className?: string
  animationDelay?: number
}

export function FeatureCard({ title, description, bulletPoints, className, animationDelay = 0 }: FeatureCardProps) {
  const delayClass = animationDelay > 0 ? `animate-delay-${animationDelay}` : ""

  return (
    <div
      className={cn(
        "p-6 bg-zinc-900 rounded-lg border border-zinc-800 transition-all hover:border-red-800/30 hover:shadow-md animate-fade-up",
        delayClass,
        className,
      )}
    >
      <h3 className="text-xl font-semibold text-red-500 mb-3">{title}</h3>
      <p className="text-zinc-300">{description}</p>

      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="mt-4 space-y-2 text-zinc-300">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-red-500">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
