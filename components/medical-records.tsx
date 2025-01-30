"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MedicalRecords() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Medical Records</CardTitle>
        <CardDescription>View all your medical records, tests, and prescriptions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tests">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tests">Lab Tests</TabsTrigger>
            <TabsTrigger value="xrays">X-Rays</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          </TabsList>
          <TabsContent value="tests">
            <div className="mt-4 space-y-4">
              <p className="text-center text-muted-foreground">No test records available</p>
            </div>
          </TabsContent>
          <TabsContent value="xrays">
            <div className="mt-4 space-y-4">
              <p className="text-center text-muted-foreground">No x-ray records available</p>
            </div>
          </TabsContent>
          <TabsContent value="prescriptions">
            <div className="mt-4 space-y-4">
              <p className="text-center text-muted-foreground">No prescriptions available</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

