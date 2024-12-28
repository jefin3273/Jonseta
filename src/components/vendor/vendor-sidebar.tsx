"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Car, FileText, BarChart, CreditCard, Menu, X } from "lucide-react";

const sidebarItems = [
  {
    title: "Manage Vehicles",
    items: [
      { name: "Add/Update Vehicle", href: "/vendor/vehicles", icon: Car },
      {
        name: "Maintenance Status",
        href: "/vendor/vehicles/maintenance",
        icon: Car,
      },
    ],
  },
  {
    title: "Contracts",
    items: [
      { name: "Manage Contracts", href: "/vendor/contracts", icon: FileText },
    ],
  },
  {
    title: "Performance",
    items: [
      {
        name: "Track Performance",
        href: "/vendor/performance",
        icon: BarChart,
      },
    ],
  },
  {
    title: "Invoices",
    items: [
      { name: "Manage Invoices", href: "/vendor/invoices", icon: CreditCard },
    ],
  },
];

export function VendorSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/vendor" className="flex items-center">
            <span className="sr-only">Jonseta Corp Vendor</span>
            <img
              src="/logo.svg"
              alt="Jonseta Corp Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <ScrollArea className="flex-1">
          <nav className="flex-1 px-2 py-4 space-y-4">
            {sidebarItems.map((section) => (
              <div key={section.title}>
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {section.title}
                </h3>
                <div className="mt-2 space-y-1">
                  {section.items.map((item) => (
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
                </div>
              </div>
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
                href="/vendor/dashboard"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Jonseta Corp Vendor</span>
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
              <nav className="flex-1 px-2 py-4 space-y-4">
                {sidebarItems.map((section) => (
                  <div key={section.title}>
                    <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <div className="mt-2 space-y-1">
                      {section.items.map((item) => (
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
                    </div>
                  </div>
                ))}
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
