import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartDataPoint, ChartProps } from "./types";

export function EngagementChart({ data }: ChartProps) {
  console.log(data);

  const chartData = data.reduce<ChartDataPoint[]>((acc, curr) => {
    const existingDate = acc.find((item) => item.date === curr.DATE);
    if (existingDate) {
      existingDate[curr.PLATFORM] = curr.ENGAGEMENT;
    } else {
      acc.push({
        date: curr.DATE,
        [curr.PLATFORM]: curr.ENGAGEMENT,
      });
    }
    return acc;
  }, []);

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Total Engagement Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="YouTube" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="Instagram" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-2))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-2))"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="Twitter" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-3))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-3))"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="LINKEDIN" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-4))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-4))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
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
              <Tooltip />
              <Area
                type="monotone"
                dataKey="YOUTUBE"
                stroke="hsl(var(--chart-1))"
                fillOpacity={1}
                fill="url(#YouTube)"
              />
              <Area
                type="monotone"
                dataKey="INSTAGRAM"
                stroke="hsl(var(--chart-2))"
                fillOpacity={1}
                fill="url(#Instagram)"
              />
              <Area
                type="monotone"
                dataKey="TWITTER"
                stroke="hsl(var(--chart-3))"
                fillOpacity={1}
                fill="url(#Twitter)"
              />
              <Area
                type="monotone"
                dataKey="LINKEDIN"
                stroke="hsl(var(--chart-4))"
                fillOpacity={1}
                fill="url(#LINKEDIN)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
