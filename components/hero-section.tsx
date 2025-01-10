"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Globe, Users, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] bg-grid-small-white/[0.2] -z-10" />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center"
        >
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Connect with World-Class Tech Talent
            <span className="text-primary">Instantly</span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            AI-powered matching, seamless collaboration, and secure payments. Build your dream team with Qollix.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button size="lg" asChild>
            <Link href="/signup">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#how-it-works">Learn More</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8"
        >
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-sm">Global Talent Pool</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-sm">AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            <span className="text-sm">Verified Developers</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

