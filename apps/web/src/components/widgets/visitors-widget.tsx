"use client"

import { Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function VisitorsWidget() {
  const data = [
    { name: "Mon", value: 420 },
    { name: "Tue", value: 580 },
    { name: "Wed", value: 510 },
    { name: "Thu", value: 490 },
    { name: "Fri", value: 630 },
    { name: "Sat", value: 380 },
    { name: "Sun", value: 290 },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base">Visitors Analytics</CardTitle>
          <CardDescription>Daily visitor count</CardDescription>
        </div>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          <Users className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">3,271</div>
        <div className="text-sm text-muted-foreground">visitors this week</div>
        <div className="h-[200px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
