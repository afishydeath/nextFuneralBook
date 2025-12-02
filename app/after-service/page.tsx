import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Car, Phone, Info } from "lucide-react"

export default function AfterServicePage() {
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
            <h1 className="text-2xl font-bold text-foreground">After Service Information</h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page Header */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground mb-2">Reception & Gathering Details</CardTitle>
              <p className="text-muted-foreground text-pretty">
                Following the service, family and friends are invited to join us for a reception to continue sharing
                memories and celebrating Gary's life together.
              </p>
            </CardHeader>
          </Card>

          {/* Reception Information */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Reception Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">Time</h3>
                  <p className="text-muted-foreground">Time Unknown</p>
                  <p className="text-sm text-muted-foreground mt-1">Immediately following the service</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground text-pretty">
                    Location of reception unknown
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-3">What to Expect</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Light refreshments and beverages will be served</li>
                  <li>• Opportunity to share stories and memories with family</li>
                  <li>• Photo displays of Gary's life will be available for viewing</li>
                  <li>• Guest book for additional messages and signatures</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Interment Information */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Interment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Private Family Service</h4>
                  <p className="text-muted-foreground text-pretty">
                    A private interment service for immediate family will be held at Restwood Memorial Gardens on
                    Sunday, March 26th at 09:00 AM.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground text-pretty">
                    A Crematorium
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          
          {/* Important Information */}
          <Card className="bg-muted border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dress Code</h4>
                  <p className="text-muted-foreground text-pretty">
                    Business casual or semi-formal attire is appropriate. Margaret loved bright colors, so please don't
                    feel limited to traditional black.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Accessibility</h4>
                  <p className="text-muted-foreground text-pretty">
                    Both venues are wheelchair accessible with designated parking spaces and accessible restroom
                    facilities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Photography</h4>
                  <p className="text-muted-foreground text-pretty">
                    Photography is welcome during the reception. Please be respectful during the formal service
                    portions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Children</h4>
                  <p className="text-muted-foreground text-pretty">
                    Children are welcome at both the service and reception. A quiet room will be available if needed.
                  </p>
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
