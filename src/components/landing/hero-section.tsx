"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-0 bg-white text-black">
      <div className="container px-4 md:px-6">
        {/* Top navigation buttons */}
        <div className="flex justify-end space-x-4 mb-4">
          <Link href="/admin">
            <Button>Admin Page</Button>
          </Link>
          <Link href="/vendor">
            <Button>Vendor Page</Button>
          </Link>
          <Link href="/driver">
            <Button>Driver Page</Button>
          </Link>
          <Link href="/employer">
            <Button>Employer Page</Button>
          </Link>
          <Link href="/employee">
            <Button>Employee Page</Button>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.img
            src="/hero-image.webp"
            alt="Fleet Management"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex flex-col justify-center space-y-4">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Revolutionize Your Fleet Management
              </h1>
              <p className="max-w-[600px] text-black md:text-xl">
                Streamline operations, boost efficiency, and drive success with
                our intelligent fleet management solution.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/role-selection">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200"
                >
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
