import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { Sidebar } from "./Sidebar";

export function DashboardLayout() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="w-screen flex h-screen bg-background">
        <Sidebar />
        <main className="w-full overflow-y-auto px-2">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}
