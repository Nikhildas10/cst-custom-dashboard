import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function StatisticsWidget() {
  const WIDGET_DATA = {
    stats: {
      users: "1,234",
      revenue: "$12,345",
      growth: "+20%",
      conversion: "10%",
      activeUsers: "856",
      avgOrderValue: "$85.50",
      totalOrders: "2,345",
      churnRate: "2.5%",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
        <CardDescription>Key performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">Total Users</p>
            <p className="text-2xl font-bold">{WIDGET_DATA.stats.users}</p>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">Revenue</p>
            <p className="text-2xl font-bold">{WIDGET_DATA.stats.revenue}</p>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">Growth</p>
            <p className="text-2xl font-bold text-green-600">
              {WIDGET_DATA.stats.growth}
            </p>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">Conversion</p>
            <p className="text-2xl font-bold">
              {WIDGET_DATA.stats.conversion}
            </p>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">Active Users</p>
            <p className="text-2xl font-bold">
              {WIDGET_DATA.stats.activeUsers}
            </p>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">Avg Order</p>
            <p className="text-2xl font-bold">
              {WIDGET_DATA.stats.avgOrderValue}
            </p>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">Total Orders</p>
            <p className="text-2xl font-bold">
              {WIDGET_DATA.stats.totalOrders}
            </p>
          </div>
        <div className="space-y-1 text-center">
              <p className="text-sm text-muted-foreground">Bounce Rate</p>
              <p className="text-2xl font-bold text-red-600">
                {WIDGET_DATA.stats.churnRate}
              </p>
            </div>
          </div>
      </CardContent>
    </Card>
  );
}



