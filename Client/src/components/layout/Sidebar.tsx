import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BarChart3, Home, Menu, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    label: "Home",
    icon: Home,
  },
  {
    path: "/platform-specific",
    label: "Platform Specific",
    icon: BarChart3,
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
  return (
    <div className={cn("space-y-4 py-4", className)}>
      <div className="py-2">
        <div className="flex items-center justify-between mb-4 px-4 dark:text-white">
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-2">
            {routes.map((route) => (
              <Button
                variant="outline"
                className="w-full justify-start gap-2 bg-gray-100 dark:bg-black dark:text-blue-500  border-0"
                onClick={() => navigate(route.path)}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6 text-black dark:text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[200px]">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      <div className="hidden lg:block">
        <div className="w-[200px] px-1 border-r bg-background h-screen dark:text-white">
          <SidebarContent />
        </div>
      </div>
    </>
  );
}
