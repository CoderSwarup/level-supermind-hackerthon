import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BarChart3,
  Home,
  Instagram,
  Linkedin,
  MessageCircle,
  Twitter,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    label: "Home",
    icon: Home,
  },
  {
    path: "/youtube",
    label: "YouTube",
    icon: BarChart3,
  },
  {
    path: "/instagram",
    label: "Instagram",
    icon: Instagram,
  },
  {
    path: "/twitter",
    label: "X",
    icon: Twitter,
  },
  {
    path: "/linkedin",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    path: "/chat",
    label: "Chat",
    icon: MessageCircle,
  },
];

export function Sidebar() {
  return (
    <div className="max-w-[200px] border-r bg-background h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-4">
              {routes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) =>
                    cn(
                      "w-full my-4",
                      isActive && "bg-accent text-accent-foreground"
                    )
                  }
                >
                  <Button
                    variant="ghost"
                    className="w-full  my-2 justify-start gap-2"
                  >
                    <route.icon className="h-4 w-4" />
                    {route.label}
                  </Button>
                </NavLink>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
