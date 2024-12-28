import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PhoneCall, MessageSquare, MapPin, AlertTriangle } from 'lucide-react'

export default function Emergency() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Emergency Assistance</h1>
      
      <Card className="bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-700">Emergency Contact</CardTitle>
          <CardDescription className="text-red-600">Use this in case of immediate danger or severe vehicle issues</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
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

      <div className="grid gap-6 md:grid-cols-2">
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
            <Button variant="outline" className="justify-start">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Emergency Procedures Guide
            </Button>
            <Button variant="outline" className="justify-start">
              <AlertTriangle className="mr-2 h-4 w-4" />
              First Aid Instructions
            </Button>
            <Button variant="outline" className="justify-start">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Vehicle Safety Checklist
            </Button>
            <Button variant="outline" className="justify-start">
              <PhoneCall className="mr-2 h-4 w-4" />
              Local Emergency Contacts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

