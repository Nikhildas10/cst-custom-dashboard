"use client"

import { LineChart, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function SalesWidget() {
  const data = [
    { name: "Jan", value: 2400 },
    { name: "Feb", value: 1398 },
    { name: "Mar", value: 9800 },
    { name: "Apr", value: 3908 },
    { name: "May", value: 4800 },
    { name: "Jun", value: 3800 },
    { name: "Jul", value: 4300 },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base">Sales Overview</CardTitle>
          <CardDescription>Monthly sales performance</CardDescription>
        </div>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          <LineChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <div className="flex items-center text-sm text-muted-foreground">
          <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
          <span className="text-green-500">+20.1%</span>
          <span className="ml-1">from last month</span>
        </div>
        <div className="h-[200px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
