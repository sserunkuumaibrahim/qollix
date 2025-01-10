import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              Qollix
            </Link>
            <p className="mt-4 text-muted-foreground max-w-[400px]">
              Connecting global tech talent with innovative companies through AI-powered matching and seamless collaboration.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" type="email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    For Developers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    For Companies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

