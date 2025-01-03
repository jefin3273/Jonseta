"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  MapPin,
  BookOpen,
  FileText,
  MessageSquare,
  DollarSign,
  AlertTriangle,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", href: "/driver", icon: LayoutDashboard },
  { name: "Assigned Trips", href: "/driver/trips", icon: MapPin },
  { name: "Training", href: "/driver/training", icon: BookOpen },
  { name: "Trip Logs", href: "/driver/logs", icon: FileText },
  { name: "Messages", href: "/driver/messages", icon: MessageSquare },
  { name: "Payouts", href: "/driver/payouts", icon: DollarSign },
  { name: "Emergency", href: "/driver/emergency", icon: AlertTriangle },
];

export function DriverSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-30">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/driver/dashboard" className="flex items-center">
            <span className="sr-only">FleetWise Driver</span>
            <img src="/logo.svg" alt="FleetWise Logo" className="h-8 w-auto" />
          </Link>
        </div>
        <ScrollArea className="flex-1">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-2 py-2 text-sm font-medium rounded-md",
                  pathname === item.href
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.name}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="fixed top-4 left-4 z-40 lg:hidden"
              size="icon"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
              <Link
                href="/driver/dashboard"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">FleetWise Driver</span>
                <img
                  src="/logo.svg"
                  alt="FleetWise Logo"
                  className="h-8 w-auto"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <ScrollArea className="flex-1">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center px-2 py-2 text-sm font-medium rounded-md",
                      pathname === item.href
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="mr-3 h-6 w-6" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
