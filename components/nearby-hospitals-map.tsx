"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

export function NearbyHospitalsMap() {
  const [location, setLocation] = useState({ lat: 30.0444, lng: 31.2357 }) // Cairo coordinates

  return (
    <Card className="p-4">
      <div className="aspect-video w-full rounded-lg bg-muted">
        {/* Google Maps integration would go here */}
        <div className="h-full w-full rounded-lg bg-gray-200 p-4 text-center">خريطة المستشفيات القريبة</div>
      </div>
    </Card>
  )
}

