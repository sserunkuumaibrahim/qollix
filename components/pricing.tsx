"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small teams and projects",
    features: [
      "Up to 5 active projects",
      "Basic AI matching",
      "Standard support",
      "Basic analytics",
      "Team collaboration tools"
    ]
  },
  {
    name: "Professional",
    price: "$999",
    description: "Ideal for growing companies",
    features: [
      "Unlimited active projects",
      "Advanced AI matching",
      "Priority support",
      "Advanced analytics",
      "Custom team building",
      "AR/VR interviews"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Custom solutions",
      "Dedicated account manager",
      "24/7 premium support",
      "Custom integrations",
      "Advanced security features",
      "Custom AI models"
    ]
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-muted-foreground">
          Choose the plan that best fits your needs
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className={`h-full flex flex-col ${plan.popular ? 'border-primary' : ''}`}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

