import { Metadata } from "next"
import { VendorSidebar } from "../../components/vendor/vendor-sidebar"

export const metadata: Metadata = {
  title: "Vendor Dashboard",
  description: "Jonseta Corp Vendor Dashboard",
}

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <VendorSidebar />
      <div className="flex-1 overflow-y-auto">
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}

