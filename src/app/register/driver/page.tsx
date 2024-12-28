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

const driverFormSchema = z.object({
  // Personal Information
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  dateOfBirth: z.string(),
  contactNumber: z
    .string()
    .min(10, { message: "Contact number must be at least 10 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  currentAddress: z.string(),
  permanentAddress: z.string(),

  // Professional Details
  yearsOfExperience: z.number().min(0),
  previousEmployers: z.string(),
  licenseType: z.string(),
  licenseNumber: z.string(),
  licenseExpiryDate: z.string(),
  licenseFile: z.any(),

  // Vehicle Preferences
  preferredVehicleTypes: z.array(z.string()),
  geographicPreferences: z.string(),

  // Emergency Contact
  emergencyContactName: z.string(),
  emergencyContactRelation: z.string(),
  emergencyContactNumber: z.string(),

  // Banking Details
  bankName: z.string(),
  accountNumber: z.string(),
  ifscCode: z.string(),
  upiId: z.string().optional(),

  // Additional Documents
  idProof: z.any(),
  policeVerification: z.any(),
  medicalCertificate: z.any(),
  photograph: z.any(),

  // Login Credentials
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  securityQuestion1: z.string(),
  securityAnswer1: z.string(),

  // Terms and Conditions
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export default function DriverRegistration() {
  const [step, setStep] = useState(1);
  const form = useForm<z.infer<typeof driverFormSchema>>({
    resolver: zodResolver(driverFormSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      contactNumber: "",
      email: "",
      currentAddress: "",
      permanentAddress: "",
      yearsOfExperience: 0,
      previousEmployers: "",
      licenseType: "",
      licenseNumber: "",
      licenseExpiryDate: "",
      preferredVehicleTypes: [],
      geographicPreferences: "",
      emergencyContactName: "",
      emergencyContactRelation: "",
      emergencyContactNumber: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      upiId: "",
      username: "",
      password: "",
      securityQuestion1: "",
      securityAnswer1: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof driverFormSchema>) {
    console.log(values);
    // Here you would typically send the data to your backend
  }

  const totalSteps = 5;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Driver Registration</CardTitle>
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
                </>
              )}

              {step === 2 && (
                <>
                  <FormField
                    control={form.control}
                    name="yearsOfExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years of Driving Experience</FormLabel>
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
                    name="licenseType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>License Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select license type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="light">
                              Light Motor Vehicle
                            </SelectItem>
                            <SelectItem value="heavy">
                              Heavy Motor Vehicle
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="licenseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>License Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="licenseExpiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>License Expiry Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
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
                        <FormLabel>Relation</FormLabel>
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
