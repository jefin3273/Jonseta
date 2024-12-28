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

const employerFormSchema = z.object({
  // Company Information
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." }),
  businessRegistrationNumber: z.string(),
  companyAddress: z.string(),
  industryType: z.string(),

  // Primary Contact Person
  contactPersonName: z.string(),
  contactPersonDesignation: z.string(),
  contactPersonNumber: z.string(),
  contactPersonEmail: z.string().email({ message: "Invalid email address." }),

  // Employee Management
  estimatedEmployees: z.number().min(1),
  departments: z.string(),

  // Billing Details
  gstNumber: z.string().optional(),
  billingAddress: z.string(),
  paymentPreference: z.string(),

  // Vehicle Requirements
  preferredVehicleTypes: z.array(z.string()),
  estimatedBookings: z.number(),

  // Policies
  allowRideSharing: z.boolean(),
  requireDepartmentalApproval: z.boolean(),

  // Login Credentials
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  roleBasedAccess: z.string(),

  // Terms and Conditions
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export default function EmployerRegistration() {
  const [step, setStep] = useState(1);
  const form = useForm<z.infer<typeof employerFormSchema>>({
    resolver: zodResolver(employerFormSchema),
    defaultValues: {
      companyName: "",
      businessRegistrationNumber: "",
      companyAddress: "",
      industryType: "",
      contactPersonName: "",
      contactPersonDesignation: "",
      contactPersonNumber: "",
      contactPersonEmail: "",
      estimatedEmployees: 1,
      departments: "",
      gstNumber: "",
      billingAddress: "",
      paymentPreference: "",
      preferredVehicleTypes: [],
      estimatedBookings: 0,
      allowRideSharing: false,
      requireDepartmentalApproval: false,
      username: "",
      password: "",
      roleBasedAccess: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof employerFormSchema>) {
    console.log(values);
    // Here you would typically send the data to your backend
  }

  const totalSteps = 4;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Employer Registration</CardTitle>
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
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessRegistrationNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Registration Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Address</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="industryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="technology">
                              Technology
                            </SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="healthcare">
                              Healthcare
                            </SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
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
                    name="contactPersonName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Contact Person Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactPersonDesignation"
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
                    name="contactPersonNumber"
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
                    name="contactPersonEmail"
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
                </>
              )}

              {step === 3 && (
                <>
                  <FormField
                    control={form.control}
                    name="estimatedEmployees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Number of Employees</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="departments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Departments/Divisions Using the Service
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gstNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GST Number (if applicable)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="billingAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Billing Address</FormLabel>
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
                    name="roleBasedAccess"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role-Based Access Level</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select access level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="user">User</SelectItem>
                          </SelectContent>
                        </Select>
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
