"use client"

import { cn } from "@/lib/utils"
import { Bell, Calendar, FileText, Home, Map, Newspaper, Stethoscope, User, Building2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Medical Records", href: "/medical-records", icon: FileText },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Nearby Hospitals", href: "/nearby-hospitals", icon: Map },
  { name: "Doctors", href: "/doctors", icon: Stethoscope },
  { name: "News & Updates", href: "/news", icon: Newspaper },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Profile", href: "/profile", icon: User },
  { name: "لوحة تحكم المستشفى", href: "/hospital-dashboard", icon: Building2 },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex w-64 flex-col bg-white border-r">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary">MediConnect</h1>
      </div>
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium",
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted",
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

