import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function MemorialHomepage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <Image
                src="/funeral-book-logo.webp"
                alt="The Funeral Book"
                width={120}
                height={60}
                className="object-contain"
              />
              <div className="h-8 w-px bg-border"></div>
              <h1 className="text-2xl font-bold text-foreground">Digital Memorial Services</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Memorial Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Memorial Card */}
          <Card className="mb-12 bg-card border-border shadow-lg">
            <CardContent className="p-8 text-center">
              {/* Memorial Photo */}
              <div className="mb-8">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-muted">
                  <Image
                    src="/GARY 2010.jpg"
                    alt="Memorial portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Memorial Information */}
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground text-balance">Gary Robert Beaumont</h2>

                <div className="text-xl text-muted-foreground space-y-2">
                  <p>14th, January, 1947 - 18th, March, 2024</p>
                  <p className="text-2xl font-semibold text-foreground italic">In Loving Memory</p>
                </div>

                <div className="max-w-2xl mx-auto mt-6">
                  <p className="text-lg text-foreground leading-relaxed text-pretty">
                    {
                      "TODO DEDICATION"
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/order-of-service">
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-card border-border h-64">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                       <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Order of Service</h3>
                    <p className="text-muted-foreground text-pretty">
                      View the complete funeral service program and schedule
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/leave-message">
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-card border-border h-64">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Leave a Message</h3>
                    <p className="text-muted-foreground text-pretty">
                      Share your condolences and memories with the family
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/donations">
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-card border-border h-64">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Donations</h3>
                    <p className="text-muted-foreground text-pretty">
                      Make a charitable donation in memory of Gary
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/after-service">
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-card border-border h-64">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">After Service Information</h3>
                    <p className="text-muted-foreground text-pretty">
                      Details about reception and gathering arrangements
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/add-memories">
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-card border-border h-64">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Add Memories</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Share photos and stories to celebrate Gary's life
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Contact Information Card */}
            <Link href="/contact">
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-card border-border h-64">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="mb-3">
                      <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-primary-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Need Assistance?</h3>
                      <p className="text-muted-foreground mb-3 text-pretty">Contact the funeral home for support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">{"With love and remembrance • Digital Memorial Services"}</p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Created by{" "}
            <a
              href="https://waymarkfoundry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors"
            >
              Waymark Foundry
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
