"use client"

import { DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function RevenueWidget() {
  const data = [
    { name: "Jan", value: 12000 },
    { name: "Feb", value: 19000 },
    { name: "Mar", value: 15000 },
    { name: "Apr", value: 22000 },
    { name: "May", value: 28000 },
    { name: "Jun", value: 32000 },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base">Revenue Metrics</CardTitle>
          <CardDescription>Monthly revenue trends</CardDescription>
        </div>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$128,430</div>
        <div className="text-sm text-muted-foreground">Total revenue YTD</div>
        <div className="h-[200px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
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
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
