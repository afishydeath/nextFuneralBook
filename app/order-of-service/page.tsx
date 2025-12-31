"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Clock, Calendar, Play, ChevronDown, ChevronUp, Music, BookOpen, Mic } from "lucide-react"
import { useState } from "react"

interface ServiceItem {
  id: string
  title: string
  subtitle: string
  time: string
  type: "hymn" | "prayer" | "tribute" | "general"
  content?: string
  spotifyId?: string
  audioUrl?: string
}

const serviceItems: ServiceItem[] = [
  {
    id: "welcome",
    title: "Welcome",
    subtitle: "Pastor Glenn Stanley",
    time: "unknown",
    type: "general",
  },
  {
    id: "song",
    title: "Song",
    subtitle: "When the Roll is Called Up Yonder",
    time: "unknown",
    type: "hymn",
    content: `1 When the trumpet of the Lord shall sound and time shall be no more,
And the morning breaks, eternal, bright and fair;
When the saved of earth shall gather over on the other shore,
And the roll is called up yonder, I'll be there.

Refrain:
When the roll is called up yonder,
When the roll is called up yonder,
When the roll is called up yonder,
When the roll is called up yonder, I'll be there.

2 On that bright and cloudless morning when the dead in Christ shall rise,
And the glory of his resurrection share;
When his chosen ones shall gather to their home beyond the skies,
And the roll is called up yonder, I'll be there. [Refrain]

3 Let us labor for the Master from the dawn till setting sun;
Let us talk of all his wondrous love and care.
Then when all of life is over and our work on earth is done,
And the roll is called up yonder, I'll be there. [Refrain]`
  },

  {
    id: "bible-reading",
    title: "Bible Reading",
    subtitle: "Psalm 119: 9-16 - Larry Ransley",
    time: "unknown",
    type: "prayer",
    content: `How can a young person stay on the path of purity
by living according to your word I seek you with all my heart
do not let me stray from your commands
I have hidden your word in my heart
that I might not sin against you
praise be to you Lord
teach me your decrees
with my lips I recount
all the laws that come from your mouth
I rejoice in following your statutes
as one rejoices in great riches
I meditate on your precepts
and I consider your ways
I delight in your decrees
I will not neglect your word`,
  },
  {
    id: "eulogy",
    title: "Eulogy",
    subtitle: "Read by Pastor Judy Stanley",
    time: "unknown",
    type: "general",
  },
  {
    id: "song-2",
    title: "Song",
    subtitle: "Blessed Assurance",
    time: "unknown",
    type: "hymn",
    content: `1 Blessed assurance, Jesus is mine!
Oh, what a foretaste of glory divine!
Heir of salvation, purchase of God,
born of his Spirit, washed in his blood.

Refrain:
This is my story, this is my song,
praising my Savior all the day long.
This is my story, this is my song,
praising my Savior all the day long.`
  },
  {
    id: "sharing-memories",
    title: "Sharing Memories of Gary",
    subtitle: "Pastor Glenn Stanley",
    time: "unknown",
    type: "general",
  },
  {
    id: "song-3",
    title: "Song",
    subtitle: "It is well with my soul",
    time: "unknown",
    type: "hymn",
    content: `When peace, like a river, attendeth my way,
When sorrows like sea billows roll;
Whatever my lot, Thou hast taught me to say,
It is well, it is well with my soul.

Refrain:
It is well with my soul,
It is well, it is well with my soul.

Though Satan should buffet, though trials should come,
Let this blest assurance control,
That Christ hath regarded my helpless estate,
And hath shed His own blood for my soul.

My sin—oh, the bliss of this glorious thought!—
My sin, not in part but the whole,
Is nailed to the cross, and I bear it no more,
Praise the Lord, praise the Lord, O my soul!

For me, be it Christ, be it Christ hence to live:
If Jordan above me shall roll,
No pang shall be mine, for in death as in life
Thou wilt whisper Thy peace to my soul.

But, Lord, ’tis for Thee, for Thy coming we wait,
The sky, not the grave, is our goal;
Oh, trump of the angel! Oh, voice of the Lord!
Blessed hope, blessed rest of my soul!

And Lord, haste the day when the faith shall be sight,
The clouds be rolled back as a scroll;
The trump shall resound, and the Lord shall descend,
Even so, it is well with my soul.`
  },
  {
    id: "benediction",
    title: "Benediction",
    subtitle: "Pastor Glenn Stanley",
    time: "unknown",
    type: "general",
  },
]

function InteractiveServiceItem({ item }: { item: ServiceItem }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showSpotifyEmbed, setShowSpotifyEmbed] = useState(false) // Added state for Spotify embed visibility

  const getIcon = () => {
    switch (item.type) {
      case "hymn":
        return <Music className="w-4 h-4" />
      case "prayer":
        return <BookOpen className="w-4 h-4" />
      case "tribute":
        return <Mic className="w-4 h-4" />
      default:
        return null
    }
  }

  const handlePlay = () => {
    if (item.type === "hymn" && item.spotifyId) {
      setShowSpotifyEmbed(!showSpotifyEmbed) // Toggle Spotify embed instead of opening new window
    } else if (item.type === "tribute" && item.audioUrl) {
      setIsPlaying(!isPlaying)
    }
  }

  const canExpand =( item.type === "prayer" && item.content) || (item.type === "hymn" && item.content)
  const canPlay = (item.type === "hymn" && item.spotifyId) || (item.type === "tribute" && item.audioUrl)

  return (
    <div className="border-b border-border pb-3 last:border-b-0">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {getIcon()}
            <h4 className="font-semibold text-foreground">{item.title}</h4>
            {canPlay && (
              <Button
                size="sm"
                variant="ghost"
                onClick={handlePlay}
                className="h-6 px-2 text-primary hover:text-primary/80"
              >
                <Play className="w-3 h-3" />
              </Button>
            )}
            {canExpand && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-6 px-2 text-primary hover:text-primary/80"
              >
                {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </Button>
            )}
          </div>
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
          {isExpanded && item.content && (
            <div className="mt-3 p-4 bg-muted rounded-lg">
              <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
            </div>
          )}
          {showSpotifyEmbed && item.type === "hymn" && item.spotifyId && (
            <div className="mt-3">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src={`https://open.spotify.com/embed/track/${item.spotifyId}?utm_source=generator`}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          )}
        </div>
        <span className="text-muted-foreground text-sm ml-4">{item.time}</span>
      </div>
    </div>
  )
}

export default function OrderOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Memorial
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Order of Service</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-card border-border">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">Celebration of Life</CardTitle>
              <h2 className="text-2xl text-foreground mb-2">Gary Robert Beaumont</h2>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Date</h3>
                <p className="text-muted-foreground">Tuesday, 26th of March, 2024</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Time</h3>
                <p className="text-muted-foreground">11:00 AM</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <a
                  href="https://maps.app.goo.gl/NoevFPoF6r64iyNo6" // TODO check if this is right
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-pretty hover:text-primary transition-colors cursor-pointer underline decoration-dotted underline-offset-4"
                >
                  Hills Community Church of the Nazarene Kenthurst
                  <br />
                  87 Kenthurst Rd
                  <br />
                  Kenthurst, NSW, 2156
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground text-center">Service Program</CardTitle>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Click the icons to play hymns, expand prayers, or listen to tributes
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {serviceItems.map((item) => (
                <InteractiveServiceItem key={item.id} item={item} />
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Officiant</CardTitle /* TODO check correct */>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Pastor Glenn Stanley</p>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/leave-message">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Leave a Message
              </Button>
            </Link>
            <Link href="/add-memories">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                Share Memories
              </Button>
            </Link>
          </div>
        </div>
      </main>

    
      {/* Footer */}
      <footer className="border-t border-border bg-muted mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">{"With love and remembrance • The Funeral Book"}</p>
              <Image
                src="/bessie_logo_final.png"
                alt="The Funeral Book"
                width={60}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Created by{" "}
            <a
              href="https://github.com/afishydeath"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors"
            >
              Sam Hogan
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
