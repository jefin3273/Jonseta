"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const employeeFormSchema = z.object({
  // Personal Information
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  dateOfBirth: z.string(),
  contactNumber: z
    .string()
    .min(10, { message: "Contact number must be at least 10 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  employeeId: z.string(),

  // Employment Details
  employerName: z.string(),
  department: z.string(),
  designation: z.string(),
  employeeType: z.enum(["Permanent", "Contractual"]),

  // Booking Preferences
  preferredVehicleType: z.string().optional(),
  rideSharing: z.boolean(),

  // Emergency Contact
  emergencyContactName: z.string(),
  emergencyContactRelation: z.string(),
  emergencyContactNumber: z.string(),

  // Login Credentials
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  securityQuestion: z.string(),
  securityAnswer: z.string(),

  // Terms and Conditions
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export default function EmployeeRegistration() {
  const [step, setStep] = useState(1);
  const form = useForm<z.infer<typeof employeeFormSchema>>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      contactNumber: "",
      email: "",
      employeeId: "",
      employerName: "",
      department: "",
      designation: "",
      employeeType: "Permanent",
      preferredVehicleType: "",
      rideSharing: false,
      emergencyContactName: "",
      emergencyContactRelation: "",
      emergencyContactNumber: "",
      username: "",
      password: "",
      securityQuestion: "",
      securityAnswer: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof employeeFormSchema>) {
    console.log(values);
    // Here you would typically send the data to your backend
  }

  const totalSteps = 4;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Employee Registration</CardTitle>
          <CardDescription>
            Step {step} of {totalSteps}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {step === 1 && (
                <>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="employeeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employee ID</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <FormField
                    control={form.control}
                    name="employerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employer Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Designation</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="employeeType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employee Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select employee type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Permanent">Permanent</SelectItem>
                            <SelectItem value="Contractual">
                              Contractual
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 3 && (
                <>
                  <FormField
                    control={form.control}
                    name="preferredVehicleType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Vehicle Type (Optional)</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select vehicle type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Sedan">Sedan</SelectItem>
                            <SelectItem value="SUV">SUV</SelectItem>
                            <SelectItem value="Van">Van</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rideSharing"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Opt-in for Ride Sharing</FormLabel>
                          <FormDescription>
                            Check this box if you&apos;re willing to share rides
                            with other employees.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="emergencyContactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emergency Contact Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="emergencyContactRelation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emergency Contact Relation</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="emergencyContactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emergency Contact Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 4 && (
                <>
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="securityQuestion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Security Question</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a security question" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pet">
                              What was the name of your first pet?
                            </SelectItem>
                            <SelectItem value="school">
                              What elementary school did you attend?
                            </SelectItem>
                            <SelectItem value="city">
                              In what city were you born?
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="securityAnswer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Security Answer</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Accept terms and conditions</FormLabel>
                          <FormDescription>
                            You agree to our Terms of Service and Privacy
                            Policy.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </>
              )}
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setStep(step > 1 ? step - 1 : step)}
            disabled={step === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              if (step < totalSteps) {
                setStep(step + 1);
              } else {
                form.handleSubmit(onSubmit)();
              }
            }}
          >
            {step < totalSteps ? "Next" : "Submit"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
