import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ActivityWidget() {
  const WIDGET_DATA = {
    activity: [
      {
        id: 1,
        user: "John Doe",
        action: "Created a new project",
        time: "2 minutes ago",
      },
      {
        id: 2,
        user: "Jane Smith",
        action: "Updated profile",
        time: "15 minutes ago",
      },
      {
        id: 3,
        user: "Mike Johnson",
        action: "Completed task #123",
        time: "1 hour ago",
      },
      {
        id: 4,
        user: "emily",
        action: "Completed task #456",
        time: "3 hour ago",
      },
      {
        id: 5,
        user: "johnson",
        action: "updated task",
        time: "4 hour ago",
      },
    ],
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest user actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {WIDGET_DATA.activity.map((item) => (
            <div key={item.id} className="flex justify-between border-b pb-2">
              <div>
                <p className="font-medium">{item.user}</p>
                <p className="text-sm text-muted-foreground">{item.action}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
