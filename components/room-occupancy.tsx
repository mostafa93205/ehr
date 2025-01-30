import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const rooms = [
  { id: 1, number: "101", patientName: "محمد عبدالله", department: "الباطنة", status: "مشغولة" },
  { id: 2, number: "102", patientName: "سارة محمود", department: "جراحة", status: "مشغولة" },
  { id: 3, number: "103", patientName: null, department: "العظام", status: "متاحة" },
  { id: 4, number: "104", patientName: "خالد أحمد", department: "القلب", status: "مشغولة" },
  { id: 5, number: "105", patientName: null, department: "الأطفال", status: "متاحة" },
]

export function RoomOccupancy() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>إشغال الغرف</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>رقم الغرفة</TableHead>
              <TableHead>اسم المريض</TableHead>
              <TableHead>القسم</TableHead>
              <TableHead>الحالة</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.number}</TableCell>
                <TableCell>{room.patientName || "-"}</TableCell>
                <TableCell>{room.department}</TableCell>
                <TableCell>
                  <Badge variant={room.status === "مشغولة" ? "default" : "secondary"}>{room.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

