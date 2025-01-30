import { Breadcrumb } from "@/components/breadcrumb"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Search, Star } from "lucide-react"

const doctors = [
  { id: 1, name: "Dr. Emily Johnson", specialty: "Cardiology", rating: 4.8, availability: "Next available: Today" },
  { id: 2, name: "Dr. Michael Lee", specialty: "Pediatrics", rating: 4.6, availability: "Next available: Tomorrow" },
  { id: 3, name: "Dr. Sarah Patel", specialty: "Dermatology", rating: 4.9, availability: "Next available: In 2 days" },
]

export default function DoctorsPage() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/doctors", label: "Doctors" },
        ]}
      />
      <h1 className="text-3xl font-bold">Find a Doctor</h1>
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <Input placeholder="Search by name or specialty" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <Card key={doctor.id}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${doctor.name}`} />
                  <AvatarFallback>
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{doctor.name}</h3>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm">{doctor.rating}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{doctor.availability}</p>
              <Button className="w-full mt-4">
                <Calendar className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

