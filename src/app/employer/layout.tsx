import { Metadata } from "next";
import { EmployerSidebar } from "@/components/employer/employer-sidebar";

export const metadata: Metadata = {
  title: "Employer Dashboard",
  description: "FleetWise Employer Dashboard",
};

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <EmployerSidebar />
      <div className="flex-1 overflow-y-auto">
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
