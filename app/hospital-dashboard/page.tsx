import { Breadcrumb } from "@/components/breadcrumb"
import { AppointmentList } from "@/components/appointment-list"
import { RoomOccupancy } from "@/components/room-occupancy"

export default function HospitalDashboardPage() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { href: "/", label: "الرئيسية" },
          { href: "/hospital-dashboard", label: "لوحة تحكم المستشفى" },
        ]}
      />
      <h1 className="text-3xl font-bold">لوحة تحكم المستشفى</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <AppointmentList />
        <RoomOccupancy />
      </div>
    </div>
  )
}

