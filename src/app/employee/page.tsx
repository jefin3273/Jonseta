import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car, Calendar, Users, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Welcome to Jonseta Corp Fleet Management",
  description: "Employee portal for vehicle booking and management",
};

export default function EmployeeLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Jonseta Corp Fleet Management
          </h1>
          <p className="text-xl">
            Efficient vehicle booking and management for employees
          </p>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Car className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Vehicle Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Book vehicles for business or personal use with ease.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Manage Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  View and manage your past and upcoming vehicle bookings.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Ride Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join or create shared rides with colleagues for better
                  efficiency.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <AlertTriangle className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Emergency Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quick access to emergency services and roadside assistance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Get Started</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>New to Jonseta Corp Fleet Management?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Create your account to start booking vehicles and managing
                  your trips.
                </p>
                <Button asChild>
                  <Link href="/employee/register">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Already have an account?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Log in to access your dashboard and manage your bookings.
                </p>
                <Button asChild variant="outline">
                  <Link href="/employee/login">
                    Log In <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Jonseta Corp Fleet Management?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Wide range of vehicles to suit your needs</li>
            <li>Easy-to-use booking system</li>
            <li>Efficient ride-sharing options</li>
            <li>24/7 customer support</li>
            <li>Comprehensive emergency assistance</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Jonseta Corp. All rights reserved.</p>
          <div className="mt-2">
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline mr-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-primary hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
