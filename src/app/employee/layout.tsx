import { Metadata } from "next";
import { EmployeeSidebar } from "../../components/employee/employee-sidebar";
import { EmployeeNavbar } from "../../components/employee/employee-navbar";

export const metadata: Metadata = {
  title: "Employee Portal",
  description: "Jonseta Corp Employee Portal",
};

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <EmployeeSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <EmployeeNavbar />
        <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
