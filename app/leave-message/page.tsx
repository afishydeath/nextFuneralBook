"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Heart, MessageCircle } from "lucide-react"
import { useState } from "react"

interface Message {
  id: number
  name: string
  relationship: string
  message: string
  date: string
}

export default function LeaveMessagePage() {
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    message: "",
  })

  // Sample messages for demonstration
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "Person's Name",
      relationship: "Relationship",
      message:
        "Message goes here",
      date: "Date",
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.message) {
      const newMessage: Message = {
        id: messages.length + 1,
        name: formData.name,
        relationship: formData.relationship || "Friend",
        message: formData.message,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      }
      setMessages([newMessage, ...messages])
      setFormData({ name: "", relationship: "", message: "" })
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
            <h1 className="text-2xl font-bold text-foreground">Leave a Message</h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page Header */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground mb-2">Share Your Memories</CardTitle>
              <p className="text-muted-foreground text-pretty">
                Your words of comfort and cherished memories mean so much to the family during this difficult time.
                Please share your thoughts about Gary and how he touched your life.
              </p>
            </CardHeader>
          </Card>

          {/* Message Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Leave Your Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relationship" className="text-foreground">
                      Relationship to Gary
                    </Label>
                    <Input
                      id="relationship"
                      value={formData.relationship}
                      onChange={(e) => handleInputChange("relationship", e.target.value)}
                      placeholder="e.g., Friend, Neighbor, Colleague"
                      className="bg-input border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Share your memories, condolences, or thoughts about Gary..."
                    rows={6}
                    required
                    className="bg-input border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Share Your Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Messages Display */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                Messages of Love and Remembrance ({messages.length})
              </h2>
            </div>

            {messages.map((message) => (
              <Card key={message.id} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{message.name}</h3>
                      <p className="text-sm text-muted-foreground">{message.relationship}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{message.date}</span>
                  </div>
                  <p className="text-foreground leading-relaxed text-pretty">{message.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/order-of-service">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                View Order of Service
              </Button>
            </Link>
            <Link href="/add-memories">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Share Photos & Memories
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
