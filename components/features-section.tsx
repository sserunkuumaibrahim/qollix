"use client"

import { motion } from "framer-motion"
import { Brain, Code2, Globe2, HeartHandshake, Lock, MessageSquare, Shield, Users2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Advanced algorithms match developers to projects based on skills, experience, and team dynamics."
  },
  {
    icon: Globe2,
    title: "Global Talent Pool",
    description: "Access top developers from around the world, vetted and ready to contribute to your projects."
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security with encrypted communications and secure payment processing."
  },
  {
    icon: MessageSquare,
    title: "Real-time Collaboration",
    description: "Built-in tools for seamless communication, file sharing, and project management."
  },
  {
    icon: Code2,
    title: "Skill Verification",
    description: "Comprehensive vetting process ensures high-quality talent for your projects."
  },
  {
    icon: HeartHandshake,
    title: "Fair Pricing",
    description: "Transparent pricing with no hidden fees. Pay only for the talent you need."
  },
  {
    icon: Users2,
    title: "Team Building",
    description: "Build and manage distributed teams with ease using our collaboration tools."
  },
  {
    icon: Lock,
    title: "Compliance & Safety",
    description: "GDPR compliant with secure data handling and privacy protection."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Everything You Need
        </h2>
        <p className="mt-4 text-muted-foreground">
          Comprehensive features to help you find and manage the best tech talent globally.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

