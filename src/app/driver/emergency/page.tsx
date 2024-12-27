import { Metadata } from "next"
import { DriverHeader } from "@/components/driver/driver-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, PhoneCall, MessageSquare, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: "Emergency Assistance",
  description: "Request emergency assistance and view safety resources",
}

export default function EmergencyPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DriverHeader title="Emergency Assistance" />
      
      <Card className="bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-700">Emergency Contact</CardTitle>
          <CardDescription className="text-red-600">Use this in case of immediate danger or severe vehicle issues</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="bg-red-600 hover:bg-red-700">
              <PhoneCall className="mr-2 h-4 w-4" />
              Call Emergency Services
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-100">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Report Urgent Situation
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Roadside Assistance</CardTitle>
            <CardDescription>For non-emergency vehicle issues</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full mb-2">
              <PhoneCall className="mr-2 h-4 w-4" />
              Call Roadside Assistance
            </Button>
            <Button variant="outline" className="w-full">
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat with Support
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Current Location</CardTitle>
            <CardDescription>Share this with emergency services if needed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <p className="font-mono text-sm">Latitude: 40.7128° N</p>
              <p className="font-mono text-sm">Longitude: 74.0060° W</p>
            </div>
            <Button className="w-full">
              <MapPin className="mr-2 h-4 w-4" />
              Share Location
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Safety Resources</CardTitle>
          <CardDescription>Quick access to important safety information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {safetyResources.map((resource) => (
              <Button key={resource.id} variant="outline" className="justify-start">
                <resource.icon className="mr-2 h-4 w-4" />
                {resource.title}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const safetyResources = [
  { id: 1, title: "Emergency Procedures Guide", icon: AlertTriangle },
  { id: 2, title: "First Aid Instructions", icon: AlertTriangle },
  { id: 3, title: "Vehicle Safety Checklist", icon: AlertTriangle },
  { id: 4, title: "Local Emergency Contacts", icon: PhoneCall },
]

