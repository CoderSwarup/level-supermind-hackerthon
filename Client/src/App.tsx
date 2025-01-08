import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { HomePage } from "./pages/HomePage";
import PlatformSpecificData from "./pages/PlatformSpecificData";
import { Chat } from "./pages/Chat";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "./hooks/useTheme";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="platform-specific"
              element={<PlatformSpecificData />}
            />
            <Route path="chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
