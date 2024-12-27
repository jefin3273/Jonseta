"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Truck,
  Users,
  Calendar,
  Building2,
  FileText,
  HeadphonesIcon,
  Settings,
  Menu,
  X,
} from "lucide-react";

type SidebarItem = {
  name: string;
  href: string;
  icon?: React.ElementType;
  subItems?: { name: string; href: string }[];
};

const sidebarItems: SidebarItem[] = [
  {
    name: "Fleet Management",
    href: "/admin/fleet",
    icon: Truck,
    subItems: [
      { name: "Add/Manage Vehicles", href: "/admin/fleet/vehicles" },
      { name: "Maintenance Schedules", href: "/admin/fleet/maintenance" },
      { name: "Fuel Tracking", href: "/admin/fleet/fuel" },
    ],
  },
  {
    name: "Driver Management",
    href: "/admin/drivers",
    icon: Users,
    subItems: [
      { name: "Driver Database", href: "/admin/drivers/database" },
      { name: "Assign Jobs", href: "/admin/drivers/jobs" },
      { name: "Training Modules", href: "/admin/drivers/training" },
      { name: "Payouts", href: "/admin/drivers/payouts" },
    ],
  },
  {
    name: "Bookings",
    href: "/admin/bookings",
    icon: Calendar,
    subItems: [
      { name: "View/Approve Pending", href: "/admin/bookings/pending" },
      { name: "Booking Analytics", href: "/admin/bookings/analytics" },
    ],
  },
  {
    name: "Subcontractors & Vendors",
    href: "/admin/partners",
    icon: Building2,
    subItems: [
      { name: "Vendor Management", href: "/admin/partners/vendors" },
      {
        name: "Subcontractor Performance",
        href: "/admin/partners/subcontractors",
      },
    ],
  },
  {
    name: "Reports",
    href: "/admin/reports",
    icon: FileText,
    subItems: [
      { name: "Income/Expense Reports", href: "/admin/reports/financial" },
      { name: "Business Analytics", href: "/admin/reports/analytics" },
    ],
  },
  {
    name: "Customer Support",
    href: "/admin/support",
    icon: HeadphonesIcon,
    subItems: [
      { name: "Inquiries", href: "/admin/support/inquiries" },
      { name: "Feedback/Complaints", href: "/admin/support/feedback" },
    ],
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
    subItems: [
      { name: "Multi-Location Management", href: "/admin/settings/locations" },
      { name: "Accounting Integration", href: "/admin/settings/accounting" },
    ],
  },
];

function SidebarItem({
  item,
  isNested = false,
}: {
  item: SidebarItem;
  isNested?: boolean;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  if (item.subItems) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center justify-between px-2 py-2 text-sm font-medium rounded-md",
            isActive
              ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
          )}
        >
          <div className="flex items-center">
            {item.icon && <item.icon className="mr-3 h-6 w-6" />}
            {item.name}
          </div>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>
        {isOpen && (
          <div className="ml-4 mt-2 space-y-1">
            {item.subItems.map((subItem) => (
              <SidebarItem key={subItem.name} item={subItem} isNested />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center px-2 py-2 text-sm font-medium rounded-md",
        isActive
          ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
        isNested && "pl-10"
      )}
    >
      {!isNested && item.icon && <item.icon className="mr-3 h-6 w-6" />}
      {item.name}
    </Link>
  );
}

export function AdminSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-30">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/admin/dashboard" className="flex items-center">
            <span className="sr-only">FleetWise Admin</span>
            <img src="/logo.svg" alt="FleetWise Logo" className="h-8 w-auto" />
          </Link>
        </div>
        <ScrollArea className="flex-1">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {sidebarItems.map((item) => (
              <SidebarItem key={item.name} item={item} />
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
                href="/admin/dashboard"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">FleetWise Admin</span>
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
                  <SidebarItem key={item.name} item={item} />
                ))}
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
