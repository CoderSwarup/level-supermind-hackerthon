import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Platform, sampleData } from "@/data/sampleData";
import { DateRangePicker } from "@/components/DateRangePicker";
import { EngagementChart } from "@/components/charts/EngagementChart";
import { PlatformComparison } from "@/components/charts/PlatformComparison";
import { StatsCards } from "@/components/stats/StatsCards";
import { ThemeToggle } from "@/components/ThemeToggle";
export function HomePage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [selectedPlatform, setSelectedPlatform] =
    useState<Platform>("INSTAGRAM");

  const filteredData = sampleData.filter((item) => {
    if (dateRange?.from && dateRange?.to) {
      const itemDate = new Date(item.DATE);
      return itemDate >= dateRange.from && itemDate <= dateRange.to;
    }
    return true;
  });

  const platformData = filteredData.filter(
    (item) => item.PLATFORM === selectedPlatform
  );

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

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <EngagementChart data={filteredData} />
        <PlatformComparison data={filteredData} />
      </div>
    </div>
  );
}
