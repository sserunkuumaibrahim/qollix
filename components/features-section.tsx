"use client"

import { motion } from "framer-motion"
import { Brain, Code2, Globe2, HeartHandshake, Lock, MessageSquare, Shield, Users2 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our advanced algorithms match developers to projects based on skills, experience, and team dynamics."
  },
  {
    icon: Globe2,
    title: "Global Talent Pool",
    description: "Access top developers from around the world, vetted and ready to contribute to your projects."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with encrypted communications and secure payment processing."
  },
  {
    icon: MessageSquare,
    title: "Seamless Collaboration",
    description: "Built-in tools for communication, file sharing, and project management in one place."
  },
  {
    icon: Code2,
    title: "Skill Verification",
    description: "Comprehensive vetting process ensures only the highest quality talent for your projects."
  },
  {
    icon: HeartHandshake,
    title: "Fair & Transparent",
    description: "Clear pricing with no hidden fees. Pay only for the talent you need."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden py-20 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              Everything You Need to Build Great Teams
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive features to help you find and manage the best tech talent globally.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full overflow-hidden border-none bg-gradient-to-b from-muted/50 to-muted p-2">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

