"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid gap-8 lg:grid-cols-2"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Let's Connect
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">contact@qollix.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MessageSquare className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-muted-foreground">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input placeholder="First Name" />
                </div>
                <div>
                  <Input placeholder="Last Name" />
                </div>
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Textarea placeholder="Your message" className="min-h-[100px]" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

