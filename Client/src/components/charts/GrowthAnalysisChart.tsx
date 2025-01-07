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

interface Props {
  data: SocialMediaData[];
}

export function GrowthAnalysisChart({ data }: Props) {
  const platforms: Platform[] = ["YOUTUBE", "INSTAGRAM", "TWITTER", "LINKEDIN"];
  const colors = {
    YOUTUBE: "#FF0000",
    INSTAGRAM: "#E1306C",
    TWITTER: "#1DA1F2",
    LINKEDIN: "#0077B5",
  };

  // Calculate cumulative engagement by platform
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
                    <div className="bg-background p-2 rounded-lg shadow border">
                      <p className="font-semibold">
                        {new Date(label).toLocaleDateString()}
                      </p>
                      {payload.map((entry) => (
                        <p key={entry.name} style={{ color: entry.color }}>
                          {entry.name}: {entry?.value?.toLocaleString()}
                        </p>
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
