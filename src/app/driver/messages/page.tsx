import { Metadata } from "next"
import { DriverHeader } from "@/components/driver/driver-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from 'lucide-react'

export const metadata: Metadata = {
  title: "Messages",
  description: "Communicate with Admins and Employers",
}

export default function MessagesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DriverHeader title="Messages" />
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <CardDescription>Recent message threads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conversations.map((conversation) => (
                <div key={conversation.id} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{conversation.name}</p>
                    <p className="text-sm text-muted-foreground">{conversation.lastMessage}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{conversation.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
            <CardDescription>Dispatcher: John Doe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg p-2 max-w-[70%] ${message.sender === 'You' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center mt-4">
              <Input placeholder="Type your message..." className="flex-1 mr-2" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const conversations = [
  { id: 1, name: "John Doe", avatar: "/avatars/john-doe.png", lastMessage: "Your next pickup is at 2 PM", time: "10m ago" },
  { id: 2, name: "Jane Smith", avatar: "/avatars/jane-smith.png", lastMessage: "Great job on yesterday's deliveries!", time: "1h ago" },
  { id: 3, name: "Admin Team", avatar: "/avatars/admin-team.png", lastMessage: "New safety protocol update", time: "2h ago" },
]

const messages = [
  { sender: "John Doe", content: "Your next pickup is at 2 PM at 123 Main St.", time: "10:30 AM" },
  { sender: "You", content: "Got it, thanks! I'll be there on time.", time: "10:32 AM" },
  { sender: "John Doe", content: "Great. Let me know when you've arrived.", time: "10:33 AM" },
  { sender: "You", content: "Will do. Any special instructions for this pickup?", time: "10:35 AM" },
  { sender: "John Doe", content: "Yes, please use the rear entrance of the building.", time: "10:36 AM" },
]

