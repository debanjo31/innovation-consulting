import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, description, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 animate-fade-up", centered && "text-center", className)}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {description && <p className="text-xl text-zinc-400 max-w-3xl mx-auto">{description}</p>}
    </div>
  )
}
