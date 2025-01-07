import { useState } from "react";
import { DateRange } from "react-day-picker";
import { sampleData } from "@/data/sampleData";
import { DateRangePicker } from "@/components/DateRangePicker";
import { EngagementChart } from "@/components/charts/EngagementChart";
import { PlatformComparison } from "@/components/charts/PlatformComparison";
import { StatsCards } from "@/components/stats/StatsCards";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GrowthAnalysisChart } from "@/components/charts/GrowthAnalysisChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/DataTabel";
export function HomePage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const filteredData = sampleData.filter((item) => {
    if (dateRange?.from && dateRange?.to) {
      const itemDate = new Date(item.DATE);
      return itemDate >= dateRange.from && itemDate <= dateRange.to;
    }
    return true;
  });

  return (
    <div className=" w-full py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Social Media Analytics</h1>
        <ThemeToggle />
      </div>

      <div className="mb-8 flex items-center gap-4">
        <DateRangePicker
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatsCards data={filteredData} />
      </div>

      <EngagementChart data={filteredData} />
      <GrowthAnalysisChart data={sampleData} />
      <PlatformComparison data={filteredData} />

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
