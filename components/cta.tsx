"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="border-t">
      <div className="container py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Ready to Transform Your Team?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            Join thousands of companies that are already building their dream teams with Qollix.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" asChild>
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Sales</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

