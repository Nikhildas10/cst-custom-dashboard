import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WidgetContainerProps {
  title: string;
  children: React.ReactNode;
}

export function WidgetContainer({ title, children }: WidgetContainerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
