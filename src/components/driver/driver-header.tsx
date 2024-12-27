import { UserButton } from "@clerk/nextjs";

interface DriverHeaderProps {
  title: string;
}

export function DriverHeader({ title }: DriverHeaderProps) {
  return (
    <div className="flex items-center justify-between space-y-2 pb-4">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <div className="flex items-center space-x-2">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

