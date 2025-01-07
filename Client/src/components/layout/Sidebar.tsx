import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChartLine, Home, Menu, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const routes = [
  {
    path: "/",
    label: "Home",
    icon: Home,
  },
  {
    path: "/platform-specific",
    label: "Platform Wise",
    icon: ChartLine,
  },
  {
    path: "/chat",
    label: "Chat",
    icon: MessageCircle,
  },
];

interface SidebarContentProps {
  className?: string;
}

function SidebarContent({ className }: SidebarContentProps) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={cn("space-y-4 py-4 px-4", className)}>
      <div className="py-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>
        <div className="space-y-4">
          {routes.map((route) => (
            <Button
              variant={
                location.pathname === route.path ? "secondary" : "outline"
              }
              className="flex items-center justify-center w-full"
              onClick={() => navigate(route.path)}
            >
              <route.icon className="w-4 h-4 mr-2" />
              {route.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="fixed top-1 left-1">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <img src="./menu-bar.png" className="w-[25px] h-[25px]" alt="" />
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[200px]">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:block">
        <div className="w-[200px] px-1 border-r bg-background h-screen">
          <SidebarContent />
        </div>
      </div>
    </>
  );
}
