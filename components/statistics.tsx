"use client"

import { motion } from "framer-motion"
import { Award, Code2, Globe2, Users2 } from 'lucide-react'

const stats = [
  {
    icon: Users2,
    value: "50K+",
    label: "Developers",
    description: "Verified professionals"
  },
  {
    icon: Globe2,
    value: "120+",
    label: "Countries",
    description: "Global presence"
  },
  {
    icon: Code2,
    value: "10K+",
    label: "Projects",
    description: "Successfully completed"
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    description: "Client satisfaction"
  }
]

export function Statistics() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center"
          >
            <stat.icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-xl font-semibold mt-2">{stat.label}</p>
            <p className="text-muted-foreground">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

