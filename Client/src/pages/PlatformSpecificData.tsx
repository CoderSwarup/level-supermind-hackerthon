import { useState } from "react";
import { DateRange } from "react-day-picker";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DateRangePicker } from "@/components/DateRangePicker";

import { Platform, sampleData } from "@/data/sampleData";
import { PlatformSelector } from "@/components/PlatformSelector";
import { StatsCards } from "@/components/stats/StatsCards";
import { AnomalyDetectionChart } from "@/components/charts/AnomalyDetectionChart";
import { TimeAnalysisChart } from "@/components/charts/TimeAnalysisChart";
import { DataTable } from "@/components/DataTabel";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PlatformSpecificData() {
  const [date, setDate] = useState<DateRange | undefined>();

  const [platform, setPlatform] = useState<Platform>("YOUTUBE");

  const filteredData = sampleData.filter((item) => {
    if (platform && item.PLATFORM !== platform) return false;
    if (date?.from && new Date(item.DATE) < date.from) return false;
    if (date?.to && new Date(item.DATE) > date.to) return false;
    return true;
  });

  const engagementByType = filteredData.reduce((acc, item) => {
    acc[item.MEDIATYPE] = (acc[item.MEDIATYPE] || 0) + item.ENGAGEMENT;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(engagementByType).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Social Media Analytics</h1>
          <ThemeToggle />
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <DateRangePicker dateRange={date} onDateRangeChange={setDate} />
          <PlatformSelector value={platform} onChange={setPlatform} />
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <StatsCards data={filteredData} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="DATE" />
                    <YAxis />
                    <Tooltip
                      cursor={{ strokeDasharray: "3 3" }}
                      content={({ payload }) => {
                        if (!payload || payload.length === 0) return null;

                        return (
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border dark:border-gray-700">
                            {payload.map((entry, index) => (
                              <div key={index} className="mb-2 last:mb-0">
                                <p
                                  className={`font-semibold ${
                                    entry.dataKey === "ENGAGEMENT"
                                      ? "text-blue-600 dark:text-blue-400"
                                      : entry.dataKey === "LIKES"
                                      ? "text-green-600 dark:text-green-400"
                                      : "text-gray-800 dark:text-gray-200"
                                  }`}
                                >
                                  {entry.name}: {entry?.value?.toLocaleString()}
                                </p>
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="ENGAGEMENT"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="LIKES" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Engagement by Media Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {pieData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid col-span-3 gap-6 mb-8">
            <AnomalyDetectionChart data={filteredData} />
            <TimeAnalysisChart data={filteredData} />
          </div>
        </div>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Detailed Data View</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable data={filteredData} />
        </CardContent>
      </Card>
    </div>
  );
}

export default PlatformSpecificData;
