import servicesData from "@/data/services.json"
import * as LucideIcons from "lucide-react"

export interface ServiceFeature {
  title: string
  description: string
  bulletPoints?: string[]
}

export interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  icon: string
  features: ServiceFeature[]
}

// Get all services with proper icon handling
export function getServices(): Service[] {
  return Object.values(servicesData)
}

// Get a specific service by slug with proper icon handling
export function getServiceBySlug(slug: string): Service | undefined {
  const serviceData = servicesData[slug as keyof typeof servicesData]
  if (!serviceData) return undefined
  return serviceData
}

// Get the actual Lucide icon component by name
export function getIconByName(iconName: string) {
  return LucideIcons[iconName as keyof typeof LucideIcons] || LucideIcons.HelpCircle
}
