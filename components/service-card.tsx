import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { getIconByName } from "@/lib/services"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  iconName?: string
  className?: string
  animationDelay?: number
}

export function ServiceCard({ title, description, href, iconName, className, animationDelay = 0 }: ServiceCardProps) {
  const Icon = iconName ? getIconByName(iconName) : null

  const delayClass = animationDelay > 0 ? `animate-delay-${animationDelay}` : ""

  return (
    <Link href={href} className="block">
      <div
        className={cn(
          "relative overflow-hidden rounded-lg group bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 h-full transition-all hover:border-red-800/50 hover:shadow-lg animate-fade-up",
          delayClass,
          className,
        )}
      >
        <div className="p-6">
          {Icon && (
            <div className="w-12 h-12 mb-4 rounded-full bg-red-800/20 flex items-center justify-center">
              <Icon className="h-6 w-6 text-red-500" />
            </div>
          )}
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-zinc-300">{description}</p>
          <div className="mt-4 flex items-center text-red-500 group-hover:text-red-400">
            Learn more <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
