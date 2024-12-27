import { UserButton } from "@clerk/nextjs";

interface EmployerHeaderProps {
  title: string;
}

export function EmployerHeader({ title }: EmployerHeaderProps) {
  return (
    <div className="flex items-center justify-between space-y-2 pb-4 lg:pb-6">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <div className="flex items-center space-x-2">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
