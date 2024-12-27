import { Metadata } from "next"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Fleet Management Admin Dashboard",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 lg:pl-64">
        {children}
      </main>
    </div>
  )
}

