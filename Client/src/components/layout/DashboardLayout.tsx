import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { Sidebar } from "./Sidebar";

export function DashboardLayout() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex w-screen h-screen">
        <Sidebar />
        <main className="w-full px-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}
