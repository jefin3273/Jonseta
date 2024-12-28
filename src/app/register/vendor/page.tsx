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

const vendorFormSchema = z.object({
  // Business Information
  vendorName: z
    .string()
    .min(2, { message: "Vendor name must be at least 2 characters." }),
  businessRegistrationNumber: z.string(),
  businessType: z.string(),
  address: z.string(),

  // Primary Contact Person
  contactPersonName: z.string(),
  contactPersonDesignation: z.string(),
  contactPersonNumber: z.string(),
  contactPersonEmail: z.string().email({ message: "Invalid email address." }),

  // Fleet Details
  numberOfVehicles: z.number().min(1),
  vehicleTypes: z.array(z.string()),
  vehicleAgeRange: z.string(),
  vehicleHealthMonitoring: z.boolean(),

  // Service Details
  maintenanceServices: z.boolean(),
  contractValidity: z.string(),

  // Banking Details
  bankName: z.string(),
  accountNumber: z.string(),
  ifscCode: z.string(),
  upiId: z.string().optional(),

  // Additional Documents
  businessLicense: z.any(),
  taxComplianceCertificate: z.any(),
  insuranceDocuments: z.any(),
  serviceAgreement: z.any(),

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

export default function VendorRegistration() {
  const [step, setStep] = useState(1);
  const form = useForm<z.infer<typeof vendorFormSchema>>({
    resolver: zodResolver(vendorFormSchema),
    defaultValues: {
      vendorName: "",
      businessRegistrationNumber: "",
      businessType: "",
      address: "",
      contactPersonName: "",
      contactPersonDesignation: "",
      contactPersonNumber: "",
      contactPersonEmail: "",
      numberOfVehicles: 1,
      vehicleTypes: [],
      vehicleAgeRange: "",
      vehicleHealthMonitoring: false,
      maintenanceServices: false,
      contractValidity: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      upiId: "",
      username: "",
      password: "",
      securityQuestion: "",
      securityAnswer: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof vendorFormSchema>) {
    console.log(values);
    // Here you would typically send the data to your backend
  }

  const totalSteps = 5;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Vendor Registration</CardTitle>
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
                    name="vendorName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vendor Name</FormLabel>
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
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="vehicleLeasing">
                              Vehicle Leasing
                            </SelectItem>
                            <SelectItem value="maintenanceServices">
                              Maintenance Services
                            </SelectItem>
                            <SelectItem value="both">Both</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
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
                    name="numberOfVehicles"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Vehicles</FormLabel>
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
                    name="vehicleTypes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle Types Available</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g., Sedan, SUV, Truck"
                          />
                        </FormControl>
                        <FormDescription>
                          Enter vehicle types separated by commas
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="vehicleAgeRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle Age Range</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="e.g., 1-5 years" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="vehicleHealthMonitoring"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Vehicle Health Monitoring Devices Installed
                          </FormLabel>
                          <FormDescription>
                            Check if your vehicles have health monitoring
                            devices installed.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 4 && (
                <>
                  <FormField
                    control={form.control}
                    name="maintenanceServices"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Maintenance Services Provided</FormLabel>
                          <FormDescription>
                            Check if you provide maintenance services.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contractValidity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contract Validity Period</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="e.g., 1 year" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bankName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accountNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ifscCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>IFSC Code</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="upiId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>UPI ID (Optional)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 5 && (
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
