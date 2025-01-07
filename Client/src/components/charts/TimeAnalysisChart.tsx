import { useState } from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialMediaData } from "@/data/sampleData";

interface Props {
  data: SocialMediaData[];
}

export function TimeAnalysisChart({ data }: Props) {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const timeData = data.map((item) => {
    const date = new Date(item.DATE);
    return {
      hour: date.getHours(),
      day: date.getDay(),
      engagement: item.ENGAGEMENT,
      dayName: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        date
      ),
    };
  });

  const maxEngagement = Math.max(...timeData.map((item) => item.engagement));
  const normalizedData = timeData.map((item) => ({
    ...item,
    size: (item.engagement / maxEngagement) * 100,
  }));

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement by Time & Day</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 40 }}>
              <XAxis
                dataKey="hour"
                type="number"
                domain={[0, 23]}
                tickFormatter={(hour) => `${hour}:00`}
                name="Hour"
              />
              <YAxis
                dataKey="day"
                type="number"
                domain={[0, 6]}
                tickFormatter={(day) => days[day]}
                name="Day"
              />
              <ZAxis dataKey="size" range={[20, 400]} name="Engagement" />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={({ payload }) => {
                  if (!payload?.[0]?.payload) return null;
                  const data = payload[0].payload;

                  // Format the hour with AM/PM
                  const formattedHour = new Date().setHours(data.hour, 0, 0);
                  const timeString = new Intl.DateTimeFormat("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  }).format(formattedHour);

                  return (
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow border dark:border-gray-700">
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {data.dayName}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {timeString}
                      </p>
                      <p className="text-green-600 dark:text-green-400">
                        Engagement: {data.engagement.toLocaleString()}
                      </p>
                    </div>
                  );
                }}
              />

              <Scatter
                data={normalizedData}
                onMouseEnter={(_, index) => setActiveDay(index)}
                onMouseLeave={() => setActiveDay(null)}
              >
                {normalizedData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={
                      activeDay === index
                        ? "hsl(var(--primary))"
                        : "hsl(var(--primary) / 0.5)"
                    }
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
