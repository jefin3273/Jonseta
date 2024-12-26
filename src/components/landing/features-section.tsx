"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, BarChart, Users, Shield } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Real-time Tracking",
    description: "Monitor your fleet's location and status in real-time for optimal route management.",
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Gain insights into your fleet's performance with comprehensive analytics and reporting.",
  },
  {
    icon: Users,
    title: "Driver Management",
    description: "Efficiently manage driver schedules, performance, and compliance all in one place.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Ensure the safety of your fleet with advanced security features and alerts.",
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features that Drive Success</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our comprehensive suite of features is designed to optimize your fleet operations and boost your bottom line.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <feature.icon className="h-8 w-8" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

