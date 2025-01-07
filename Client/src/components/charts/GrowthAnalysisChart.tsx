import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialMediaData, Platform } from "@/data/sampleData";
import { format } from "date-fns";

interface Props {
  data: SocialMediaData[];
}

export function GrowthAnalysisChart({ data }: Props) {
  const platforms: Platform[] = ["YOUTUBE", "INSTAGRAM", "TWITTER", "LINKEDIN"];
  const colors = {
    YOUTUBE: "hsl(var(--chart-1))",
    INSTAGRAM: "hsl(var(--chart-5))",
    TWITTER: "hsl(var(--chart-3))",
    LINKEDIN: "hsl(var(--chart-4))",
  };

  const growthData = data
    .reduce((acc: any[], item) => {
      const date = item.DATE;
      const existingDate = acc.find((d) => d.date === date);

      if (existingDate) {
        existingDate[item.PLATFORM] =
          (existingDate[item.PLATFORM] || 0) + item.ENGAGEMENT;
      } else {
        const newEntry: any = { date };
        platforms.forEach((platform: any) => {
          newEntry[platform] = platform === item.PLATFORM ? item.ENGAGEMENT : 0;
        });
        acc.push(newEntry);
      }

      return acc;
    }, [])
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Growth Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip
                content={({ payload, label }) => {
                  if (!payload?.length) return null;
                  return (
                    <div className="p-2 overflow-hidden border rounded-sm shadow-sm bg-background">
                      <div className="p-2 px-3 text-sm bg-muted text-muted-foreground">
                        {format(label, "MMM dd, yyyy")}
                      </div>
                      <hr className="mx-2" />
                      {payload.map((entry, idx) => (
                        <div key={idx} className="p-2 px-3 space-y-1">
                          <div className="flex items-center justify-between gap-x-4">
                            <div className="flex items-center gap-2">
                              <div
                                className="size-1.5 rounded-full"
                                style={{ backgroundColor: entry.color }}
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
                        </div>
                      ))}
                    </div>
                  );
                }}
              />
              <Legend />
              {platforms.map((platform) => (
                <Line
                  key={platform}
                  type="monotone"
                  dataKey={platform}
                  name={platform}
                  stroke={colors[platform]}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
