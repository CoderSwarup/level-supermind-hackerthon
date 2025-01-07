import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialMediaData } from "@/data/sampleData";

interface Props {
  data: SocialMediaData[];
}

export function AnomalyDetectionChart({ data }: Props) {
  const scatterData = data.map((item) => ({
    date: new Date(item.DATE).getTime(),
    engagement: item.ENGAGEMENT,
    platform: item.PLATFORM,
    mediaType: item.MEDIATYPE,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement Anomaly Detection</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis
                dataKey="date"
                domain={["auto", "auto"]}
                name="Date"
                tickFormatter={(unixTime) =>
                  new Date(unixTime).toLocaleDateString()
                }
              />
              <YAxis dataKey="engagement" name="Engagement" />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={({ payload }) => {
                  if (!payload?.[0]?.payload) return null;
                  const data = payload[0].payload;

                  return (
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border dark:border-gray-700">
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        Date: {new Date(data.date).toLocaleDateString()}
                      </p>
                      <p className="text-green-600 dark:text-green-400 font-medium">
                        Engagement: {data.engagement.toLocaleString()}
                      </p>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">
                        Platform: {data.platform}
                      </p>
                      <p className="text-red-600 dark:text-red-400 font-medium">
                        Type: {data.mediaType}
                      </p>
                    </div>
                  );
                }}
              />

              <Scatter
                name="Engagement"
                data={scatterData}
                fill="hsl(var(--primary))"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
