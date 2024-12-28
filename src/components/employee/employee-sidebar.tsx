"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Car, Calendar, Users, AlertTriangle, Menu, X } from "lucide-react";

const sidebarItems = [
  { name: "Book a Vehicle", href: "/employee/book", icon: Car },
  { name: "My Bookings", href: "/employee/bookings", icon: Calendar },
  { name: "Ride Sharing", href: "/employee/ride-sharing", icon: Users },
  { name: "Emergency", href: "/employee/emergency", icon: AlertTriangle },
];

export function EmployeeSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/employee/portal" className="flex items-center">
            <span className="sr-only">Jonseta Corp Employee Portal</span>
            <img
              src="/logo.svg"
              alt="Jonseta Corp Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <ScrollArea className="flex-1">
          <nav className="flex-1 px-2 py-4 space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
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
              className="absolute top-4 left-4 z-40 lg:hidden"
              size="icon"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
              <Link
                href="/employee/portal"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Jonseta Corp Employee Portal</span>
                <img
                  src="/logo.svg"
                  alt="Jonseta Corp Logo"
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
              <nav className="flex-1 px-2 py-4 space-y-2">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === item.href
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
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
