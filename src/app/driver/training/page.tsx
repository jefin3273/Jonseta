import { Metadata } from "next"
import { DriverHeader } from "@/components/driver/driver-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Award, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Driver Training",
  description: "Access training modules and track your progress",
}

export default function TrainingPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DriverHeader title="Training" />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trainingModules.map((module) => (
          <Card key={module.id}>
            <CardHeader>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>{module.duration}</span>
              </div>
              <Progress value={module.progress} className="mb-4" />
              <p className="text-sm text-muted-foreground mb-4">{module.progress}% Complete</p>
              <Button className="w-full">
                {module.progress === 100 ? (
                  <>
                    <Award className="mr-2 h-4 w-4" />
                    View Certificate
                  </>
                ) : (
                  <>
                    <BookOpen className="mr-2 h-4 w-4" />
                    {module.progress > 0 ? 'Continue' : 'Start'} Module
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const trainingModules = [
  {
    id: 1,
    title: "Safe Driving Practices",
    description: "Learn essential techniques for safe driving in various conditions",
    duration: "2 hours",
    progress: 100
  },
  {
    id: 2,
    title: "Customer Service Excellence",
    description: "Enhance your skills in providing top-notch customer service",
    duration: "1.5 hours",
    progress: 60
  },
  {
    id: 3,
    title: "Vehicle Maintenance Basics",
    description: "Understand fundamental vehicle maintenance procedures",
    duration: "3 hours",
    progress: 30
  },
  {
    id: 4,
    title: "Navigation and Route Optimization",
    description: "Master the art of efficient route planning and navigation",
    duration: "2.5 hours",
    progress: 0
  },
  {
    id: 5,
    title: "Emergency Response Protocols",
    description: "Learn how to handle various emergency situations on the road",
    duration: "2 hours",
    progress: 0
  },
]

