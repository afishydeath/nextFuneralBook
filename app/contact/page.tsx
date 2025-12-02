"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, Clock, MessageSquare, HelpCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Memorial
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Need Assistance?</h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page Header */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground mb-2">We're Here to Help</CardTitle>
              <p className="text-muted-foreground text-pretty">
                Our compassionate team is available 24/7 to assist you during this difficult time. Please don't hesitate
                to reach out with any questions or concerns.
              </p>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                      <Send className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent Successfully</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. We'll respond to your message within 2 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="bg-transparent">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Please describe how we can assist you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Phone Contact */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Call Us Directly
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Digital Memorial Services</h4>
                    <p className="text-muted-foreground mb-2">
                      <a href="tel:+12175550123" className="text-primary hover:underline">
                        0200 000 000
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">Available 24 hours a day, 7 days a week</p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Family Contact</h4>
                    <p className="text-muted-foreground mb-1">Contact Name</p>
                    <p className="text-muted-foreground">
                      <a href="tel:+12175550456" className="text-primary hover:underline">
                        0400 000 000
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground">For personal messages and family matters</p>
                  </div>
                </CardContent>
              </Card>

              {/* Email Contact */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    <a href="mailto:support@digitalmemorialservices.com" className="text-primary hover:underline">
                      support@digitalmemorialservices.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">We typically respond within 2 hours</p>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Sunday:</span> 10:00 AM - 2:00 PM
                    </p>
                    <p className="text-sm pt-2 border-t border-border">Emergency assistance available 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Does the family want donations?</h4>
                    <p className="text-muted-foreground text-sm">
                      Yes, the family welcomes donations to Gary's favorite charities. Please visit our
                      <Link href="/donations" className="text-primary hover:underline ml-1">
                        donations page
                      </Link>
                      for preferred organizations and donation instructions.
                    </p>
                  </div>


                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What should I wear to the service?</h4>
                    <p className="text-muted-foreground text-sm">
                      Business casual or semi-formal attire is appropriate. Margaret loved bright colors, so please
                      don't feel limited to traditional black attire.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Can I bring my children?</h4>
                    <p className="text-muted-foreground text-sm">
                      Children are absolutely welcome at both the service and reception. A quiet room will be available
                      if needed during the formal portions of the service.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Is there parking available?</h4>
                    <p className="text-muted-foreground text-sm">
                      Yes, free parking is available at both venues with accessible spaces. Additional street parking is
                      also available near both locations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">How can I share memories?</h4>
                    <p className="text-muted-foreground text-sm">
                      You can share memories through our
                      <Link href="/leave-message" className="text-primary hover:underline ml-1">
                        message page
                      </Link>
                      or
                      <Link href="/add-memories" className="text-primary hover:underline ml-1">
                        memories section
                      </Link>
                      . Photos and stories are especially welcomed by the family.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/order-of-service">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                View Order of Service
              </Button>
            </Link>
            <Link href="/leave-message">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Leave a Message
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">{"With love and remembrance • Digital Memorial Services"}</p>
        </div>
      </footer>
    </div>
  )
}
