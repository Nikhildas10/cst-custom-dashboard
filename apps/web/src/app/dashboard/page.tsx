"use client";

import { useState } from "react";
import { BarChart, LineChart, PieChart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DashboardHeader } from "@/components/dashboardHeader";
// import { Separator } from "@/components/ui/separator";

// import { DashboardHeader } from "@/components/dashboard-header";
// import { SalesWidget } from "@/components/sales-widget";
// import { VisitorsWidget } from "@/components/visitors-widget";
// import { RevenueWidget } from "@/components/revenue-widget";
// import { ConversionWidget } from "@/components/conversion-widget";
// import { TopProductsWidget } from "@/components/top-products-widget";
// import { SummaryWidget } from "@/components/summary-widget";

export default function DashboardPage() {
  // Define all available widgets with their initial visibility state
  const [widgetVisibility, setWidgetVisibility] = useState({
    sales: true,
    visitors: true,
    revenue: true,
    conversion: true,
    topProducts: true,
    summary: true,
  });

  // Temporary state for the dialog
  const [tempWidgetVisibility, setTempWidgetVisibility] = useState({
    ...widgetVisibility,
  });

  // Handle dialog open
  const handleDialogOpen = (open: boolean) => {
    if (open) {
      // Reset temporary state when opening
      setTempWidgetVisibility({ ...widgetVisibility });
    }
  };

  // Apply changes from the dialog
  const applyChanges = () => {
    setWidgetVisibility({ ...tempWidgetVisibility });
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <DashboardHeader />
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Dialog onOpenChange={handleDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Configure Widgets</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Widget Visibility</DialogTitle>
                <DialogDescription>
                  Select which widgets you want to display on your dashboard.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sales"
                    checked={tempWidgetVisibility.sales}
                    onCheckedChange={(checked) =>
                      setTempWidgetVisibility({
                        ...tempWidgetVisibility,
                        sales: !!checked,
                      })
                    }
                  />
                  <Label htmlFor="sales" className="flex items-center gap-2">
                    <LineChart className="h-4 w-4" />
                    Sales Chart
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="visitors"
                    checked={tempWidgetVisibility.visitors}
                    onCheckedChange={(checked) =>
                      setTempWidgetVisibility({
                        ...tempWidgetVisibility,
                        visitors: !!checked,
                      })
                    }
                  />
                  <Label htmlFor="visitors" className="flex items-center gap-2">
                    <BarChart className="h-4 w-4" />
                    Visitors Chart
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="revenue"
                    checked={tempWidgetVisibility.revenue}
                    onCheckedChange={(checked) =>
                      setTempWidgetVisibility({
                        ...tempWidgetVisibility,
                        revenue: !!checked,
                      })
                    }
                  />
                  <Label htmlFor="revenue" className="flex items-center gap-2">
                    <LineChart className="h-4 w-4" />
                    Revenue Chart
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="conversion"
                    checked={tempWidgetVisibility.conversion}
                    onCheckedChange={(checked) =>
                      setTempWidgetVisibility({
                        ...tempWidgetVisibility,
                        conversion: !!checked,
                      })
                    }
                  />
                  <Label
                    htmlFor="conversion"
                    className="flex items-center gap-2"
                  >
                    <PieChart className="h-4 w-4" />
                    Conversion Rate
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="topProducts"
                    checked={tempWidgetVisibility.topProducts}
                    onCheckedChange={(checked) =>
                      setTempWidgetVisibility({
                        ...tempWidgetVisibility,
                        topProducts: !!checked,
                      })
                    }
                  />
                  <Label htmlFor="topProducts">Top Products Table</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="summary"
                    checked={tempWidgetVisibility.summary}
                    onCheckedChange={(checked) =>
                      setTempWidgetVisibility({
                        ...tempWidgetVisibility,
                        summary: !!checked,
                      })
                    }
                  />
                  <Label htmlFor="summary">Summary Stats</Label>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={applyChanges}>Apply Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        {/* <Separator />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {widgetVisibility.summary && <SummaryWidget />}
          {widgetVisibility.conversion && <ConversionWidget />}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {widgetVisibility.sales && <SalesWidget className="lg:col-span-2" />}
          {widgetVisibility.visitors && <VisitorsWidget />}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {widgetVisibility.revenue && (
            <RevenueWidget className="lg:col-span-2" />
          )}
          {widgetVisibility.topProducts && (
            <TopProductsWidget className="md:col-span-2 lg:col-span-1" />
          )} */}
        {/* </div> */}
      </main>
    </div>
  );
}
