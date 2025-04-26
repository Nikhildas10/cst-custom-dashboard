"use client";

import { useGetWidgetPreferences } from "@/apis/widget/queries";
import { useUpdateWidgetPreferences } from "@/apis/widget/mutations";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { authProtected } from "@/components/authProtected";
import { DashboardHeader } from "@/components/dashboardHeader";
import { SalesWidget } from "@/components/widgets/sales-widget";
import { VisitorsWidget } from "@/components/widgets/visitors-widget";
import { RevenueWidget } from "@/components/widgets/revenue-widget";
import { ActivityWidget } from "@/components/widgets/activity-widget";
import { StatisticsWidget } from "@/components/widgets/statistics-widget";
import { TotalVistors } from "@/components/widgets/totalVisitors";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface WidgetPreference {
  widgetName: string;
  isVisible: boolean;
}

function DashboardPage() {
  const { data: widgetPreferences, isLoading } = useGetWidgetPreferences();
  const { mutate: updatePreferences, isPending } = useUpdateWidgetPreferences();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempPreferences, setTempPreferences] = useState<WidgetPreference[]>([]);

  const handleDialogOpen = (open: boolean) => {
    if (open && widgetPreferences) {
      setTempPreferences([...widgetPreferences]);
    }
    setIsDialogOpen(open);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin" />
          <p className="mt-2">Loading...</p>
        </div>
      </div>
    );
  }

  const isWidgetVisible = (widgetName: string) => {
    return widgetPreferences?.find(pref => pref.widgetName === widgetName)?.isVisible ?? false;
  };

  const widgetLabels = {
    statistics: "Statistics Overview",
    visitors: "Visitors Analytics",
    analytics: "Analytics",
    sales: "Sales Statistics",
    revenue: "Revenue Metrics",
    activity: "Recent Activity",
  };

  const handleTempPreferenceChange = (widgetName: string, checked: boolean) => {
    setTempPreferences(current =>
      current.map(pref =>
        pref.widgetName === widgetName
          ? { ...pref, isVisible: checked }
          : pref
      )
    );
  };

  const handleApplyChanges = () => {
    updatePreferences(tempPreferences, {
      onSuccess: () => setIsDialogOpen(false)
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <DashboardHeader />
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <Dialog open={isDialogOpen} onOpenChange={handleDialogOpen}>
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
                {tempPreferences.map((pref) => (
                  <div key={pref.widgetName} className="flex items-center space-x-2">
                    <Checkbox
                      id={pref.widgetName}
                      checked={pref.isVisible}
                      disabled={isPending}
                      onCheckedChange={(checked) => {
                        handleTempPreferenceChange(pref.widgetName, checked as boolean);
                      }}
                    />
                    <Label htmlFor={pref.widgetName}>
                      {widgetLabels[pref.widgetName as keyof typeof widgetLabels]}
                    </Label>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button
                  onClick={handleApplyChanges}
                  disabled={isPending}
                >
                  {isPending ? "Applying changes..." : "Apply Changes"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isWidgetVisible('statistics') && <StatisticsWidget />}
          {isWidgetVisible('visitors') && <TotalVistors />}
          {isWidgetVisible('analytics') && <VisitorsWidget />}
          {isWidgetVisible('sales') && <SalesWidget />}
          {isWidgetVisible('revenue') && <RevenueWidget />}
          {isWidgetVisible('activity') && <ActivityWidget />}
        </div>
      </main>
    </div>
  );
}

export default authProtected(DashboardPage);
