import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const records = [
  { id: 1, type: "Blood Test", date: "2024-01-15", doctor: "Dr. Smith", result: "Normal" },
  { id: 2, type: "X-Ray", date: "2024-01-10", doctor: "Dr. Johnson", result: "No abnormalities" },
  { id: 3, type: "MRI", date: "2023-12-20", doctor: "Dr. Williams", result: "Further review needed" },
]

export default function MedicalRecordsPage() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/medical-records", label: "Medical Records" },
        ]}
      />
      <h1 className="text-3xl font-bold">Medical Records</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Medical History</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Records</TabsTrigger>
              <TabsTrigger value="tests">Lab Tests</TabsTrigger>
              <TabsTrigger value="imaging">Imaging</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Doctor</TableHead>
                    <TableHead>Result</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {records.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.type}</TableCell>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.doctor}</TableCell>
                      <TableCell>{record.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            {/* Add similar tables for other tabs */}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

