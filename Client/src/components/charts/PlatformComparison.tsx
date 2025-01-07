import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartProps, ComparisonDataPoint } from "./types";

export function PlatformComparison({ data }: ChartProps) {
  const comparisonData = data.reduce<ComparisonDataPoint[]>((acc, curr) => {
    const platform = acc.find((p) => p.platform === curr.PLATFORM);
    if (platform) {
      platform.likes += curr.LIKES;
      platform.shares += curr.SHARE;
      platform.comments += curr.COMMENTS;
      platform.engagement += curr.ENGAGEMENT;
    } else {
      acc.push({
        platform: curr.PLATFORM,
        likes: curr.LIKES,
        shares: curr.SHARE,
        comments: curr.COMMENTS,
        engagement: curr.ENGAGEMENT,
      });
    }
    return acc;
  }, []);

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Platform Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-" />
              <XAxis
                dataKey="platform"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickMargin={10}
                padding={{ left: 0, right: 0 }}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickMargin={10}
                padding={{ top: 20, bottom: 20 }}
              />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={({ payload }) => {
                  if (!payload || payload.length === 0) return null;

                  return (
                    <div className="p-2 overflow-hidden border rounded-sm shadow-sm bg-background">
                      <div className="p-2 px-3 space-y-1">
                        {payload.map((entry, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between gap-x-4"
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className="size-1.5 rounded-full"
                                style={{ background: entry.color }}
                              />
                              <p className="text-sm text-muted-foreground">
                                {entry.name}
                              </p>
                            </div>
                            <p
                              className="text-sm font-medium text-right"
                              style={{ color: entry.color }}
                            >
                              {entry.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }}
              />
              <Legend />
              <Bar dataKey="likes" name="Likes" fill="hsl(var(--chart-5))" />
              <Bar dataKey="shares" name="Shares" fill="hsl(var(--chart-1))" />
              <Bar
                dataKey="comments"
                name="Comments"
                fill="hsl(var(--chart-2))"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
