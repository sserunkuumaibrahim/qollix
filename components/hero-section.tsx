"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Globe, Users, Zap } from 'lucide-react'
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] bg-grid-small-white/[0.2] -z-10" />
      
      {/* Main Content */}
      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.2]">
                Build Your Dream Tech Team
                <span className="gradient-text"> Globally</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto lg:mx-0">
                Connect with world-class developers through AI-powered matching. Experience seamless collaboration and secure payments on our platform.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="cta" className="text-base h-12">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-base h-12">
                  View Demo
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
                <div>
                  <p className="text-3xl font-bold gradient-text">50K+</p>
                  <p className="mt-2 text-muted-foreground">Developers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">120+</p>
                  <p className="mt-2 text-muted-foreground">Countries</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">98%</p>
                  <p className="mt-2 text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative mx-auto max-w-[500px]">
                <div className="rounded-2xl overflow-hidden card-shadow">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Platform Preview"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -left-8 top-1/4 animate-float">
                  <div className="rounded-lg bg-card p-4 card-shadow border">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="absolute -right-8 top-2/3 animate-float-delayed">
                  <div className="rounded-lg bg-card p-4 card-shadow border">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

