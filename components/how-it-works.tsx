"use client"

import { motion } from "framer-motion"
import { CheckCircle2, CircleDot } from 'lucide-react'

const steps = [
  {
    title: "Create Your Profile",
    description: "Sign up and complete your company profile with project requirements and preferences."
  },
  {
    title: "AI-Powered Matching",
    description: "Our advanced algorithms match you with the perfect developers for your project."
  },
  {
    title: "Interview & Select",
    description: "Conduct interviews in our virtual environment and select your ideal candidates."
  },
  {
    title: "Start Collaborating",
    description: "Begin working together using our suite of collaboration and project management tools."
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          How It Works
        </h2>
        <p className="mt-4 text-muted-foreground">
          Get started with Qollix in four simple steps
        </p>
      </motion.div>
      <div className="relative">
        <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2" />
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background border">
                {index === steps.length - 1 ? (
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                ) : (
                  <CircleDot className="h-6 w-6 text-primary" />
                )}
              </div>
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

