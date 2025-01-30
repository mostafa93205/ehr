import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MapPin, Search } from "lucide-react"

const hospitals = [
  { id: 1, name: "Central Hospital", distance: "2.5 km", rating: 4.5 },
  { id: 2, name: "City Medical Center", distance: "3.8 km", rating: 4.2 },
  { id: 3, name: "Community Health Clinic", distance: "1.2 km", rating: 4.0 },
]

export default function NearbyHospitalsPage() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/nearby-hospitals", label: "Nearby Hospitals" },
        ]}
      />
      <h1 className="text-3xl font-bold">Nearby Hospitals</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Find Hospitals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input placeholder="Enter your location" />
              <Button>
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              Map Component Placeholder
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Nearby Hospitals</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Distance</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hospitals.map((hospital) => (
                  <TableRow key={hospital.id}>
                    <TableCell>{hospital.name}</TableCell>
                    <TableCell>{hospital.distance}</TableCell>
                    <TableCell>{hospital.rating}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <MapPin className="mr-2 h-4 w-4" /> Directions
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

