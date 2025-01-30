import { MedicalRecords } from "@/components/medical-records"
import { NewsFeed } from "@/components/news-feed"
import { NearbyHospitalsMap } from "@/components/nearby-hospitals-map"

export default function Home() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome to MediConnect</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <NearbyHospitalsMap />
          <NewsFeed />
        </div>
        <MedicalRecords />
      </div>
    </div>
  )
}

