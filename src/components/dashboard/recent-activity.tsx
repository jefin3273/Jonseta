import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity, index) => (
        <div className="flex items-center" key={index}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.avatar} alt="Avatar" />
            <AvatarFallback>{activity.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">
              {activity.activity}
            </p>
          </div>
          <div className="ml-auto font-medium">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}

const recentActivities = [
  {
    name: "John Doe",
    avatar: "/avatars/01.png",
    activity: "Completed a delivery",
    time: "2h ago",
  },
  {
    name: "Alice Smith",
    avatar: "/avatars/02.png",
    activity: "Started a new route",
    time: "4h ago",
  },
  {
    name: "Bob Johnson",
    avatar: "/avatars/03.png",
    activity: "Reported vehicle maintenance",
    time: "6h ago",
  },
  {
    name: "Emma Wilson",
    avatar: "/avatars/04.png",
    activity: "Finished driver training",
    time: "8h ago",
  },
  {
    name: "Michael Brown",
    avatar: "/avatars/05.png",
    activity: "Updated profile information",
    time: "1d ago",
  },
]

