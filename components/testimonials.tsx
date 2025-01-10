"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "/placeholder.svg",
    content: "Qollix has transformed how we build our engineering teams. The AI matching is incredibly accurate, and the quality of talent is outstanding.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder at StartupX",
    image: "/placeholder.svg",
    content: "The platform's collaboration tools and project management features have made working with remote developers seamless and efficient.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at InnovateCo",
    image: "/placeholder.svg",
    content: "We've reduced our hiring time by 70% using Qollix. The AR/VR interview experience is revolutionary and helps us make better decisions.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Trusted by Industry Leaders
        </h2>
        <p className="mt-4 text-muted-foreground">
          See what our clients have to say about their experience with Qollix
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

