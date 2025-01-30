import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const appointments = [
  { id: 1, patientName: "أحمد محمد", type: "عيادة", department: "الباطنة", time: "10:00 ص" },
  { id: 2, patientName: "فاطمة علي", type: "عملية", department: "جراحة", time: "11:30 ص" },
  { id: 3, patientName: "محمود حسن", type: "عيادة", department: "العظام", time: "1:00 م" },
  { id: 4, patientName: "زينب أحمد", type: "عملية", department: "النساء والتوليد", time: "2:30 م" },
]

export function AppointmentList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>المواعيد والعمليات</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>اسم المريض</TableHead>
              <TableHead>النوع</TableHead>
              <TableHead>القسم</TableHead>
              <TableHead>الوقت</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell>
                  <Badge variant={appointment.type === "عملية" ? "destructive" : "default"}>{appointment.type}</Badge>
                </TableCell>
                <TableCell>{appointment.department}</TableCell>
                <TableCell>{appointment.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

