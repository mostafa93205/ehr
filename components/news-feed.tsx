"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const newsItems = [
  {
    id: 1,
    title: "New COVID-19 Vaccination Center Opens",
    category: "Healthcare News",
    date: "2024-01-30",
    content: "A new vaccination center has opened in the city center...",
    priority: "high",
  },
  {
    id: 2,
    title: "Health Tips: Managing Winter Wellness",
    category: "Health Tips",
    date: "2024-01-29",
    content: "Stay healthy this winter with these essential tips...",
    priority: "medium",
  },
  {
    id: 3,
    title: "Hospital Updates Operating Hours",
    category: "Updates",
    date: "2024-01-28",
    content: "Central Hospital announces new extended operating hours...",
    priority: "low",
  },
]

export function NewsFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          News & Important Updates
          <Badge variant="outline">Latest News</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.content}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      item.priority === "high" ? "destructive" : item.priority === "medium" ? "default" : "outline"
                    }
                  >
                    {item.priority}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

