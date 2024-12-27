import { Metadata } from "next"
import { DriverSidebar } from "@/components/driver/driver-sidebar"

export const metadata: Metadata = {
  title: "Driver Dashboard",
  description: "FleetWise Driver Dashboard",
}

export default function DriverLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DriverSidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 lg:pl-64">
        {children}
      </main>
    </div>
  )
}

