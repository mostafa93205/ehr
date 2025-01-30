import { Breadcrumb } from "@/components/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const newsItems = [
  {
    id: 1,
    title: "New COVID-19 Vaccination Center Opens",
    category: "Healthcare News",
    date: "2024-01-30",
    content:
      "A new vaccination center has opened in the city center, increasing the capacity for COVID-19 vaccinations. The center is equipped with state-of-the-art facilities and is staffed by experienced healthcare professionals.",
    priority: "high",
  },
  {
    id: 2,
    title: "Health Tips: Managing Winter Wellness",
    category: "Health Tips",
    date: "2024-01-29",
    content:
      "As winter continues, it's important to take care of your health. This article provides essential tips for staying healthy during the cold months, including advice on nutrition, exercise, and mental health.",
    priority: "medium",
  },
  {
    id: 3,
    title: "Hospital Updates Operating Hours",
    category: "Updates",
    date: "2024-01-28",
    content:
      "Central Hospital announces new extended operating hours for its outpatient services. This change aims to provide more flexibility for patients and reduce waiting times.",
    priority: "low",
  },
]

export default function NewsPage() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/news", label: "News & Updates" },
        ]}
      />
      <h1 className="text-3xl font-bold">News & Updates</h1>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="healthcare">Healthcare News</TabsTrigger>
          <TabsTrigger value="tips">Health Tips</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{item.category}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{item.content}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        {/* Add similar content for other tabs */}
      </Tabs>
    </div>
  )
}

