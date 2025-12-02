"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import {
  ArrowLeft,
  Camera,
  Heart,
  Upload,
  ImageIcon,
  Calendar,
  X,
  Play,
  Music,
  Video,
  ChevronLeft,
  ChevronRight,
  Share2,
  Facebook,
  Instagram,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface MediaItem {
  type: "image" | "video" | "music"
  url: string
  title?: string
  spotifyId?: string
}

interface Memory {
  id: number
  name: string
  relationship: string
  category: string
  title: string
  description: string
  detailedStory?: string
  imageUrl?: string
  media?: MediaItem[]
  date: string
  timeframe: string
  musicPlaylist?: { title: string; spotifyId: string }[]
}

export default function AddMemoriesPage() {
  const [memoryForm, setMemoryForm] = useState({
    name: "",
    relationship: "",
    category: "",
    title: "",
    description: "",
    timeframe: "",
  })

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>("")
  const [expandedMemory, setExpandedMemory] = useState<Memory | null>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [playingSpotify, setPlayingSpotify] = useState<string | null>(null)

  const [memories, setMemories] = useState<Memory[]>([
    {
      id: 1,
      name: "Submitter's Name",
      relationship: "Relationship",
      category: "family",
      title: "Memory title",
      description:
        "Shorter description of the memory",
      detailedStory:
        "More detailed description",
      imageUrl: "/08_Gary in Cadets.jpg",
      media: [
        { type: "image", url: "/08_Gary in Cadets.jpg", title: "Gary in Cadets" },
        { type: "image", url: "02_Gary_11ish_with family.jpg", title: "Gary with Family" },
      ],
      date: "submission date",
      timeframe: "memory date",
      musicPlaylist: [
        { title: "Can't Help Myself - The Four Tops", spotifyId: "6b6IMqP565TbtFFZg9iFf3" }, // leaving this as an example
      ],
    },
  ])

  const categories = [
    { value: "family", label: "Family Moments" },
    { value: "friends", label: "Friends & Social" },
    { value: "work", label: "Work & Career" },
    { value: "hobbies", label: "Hobbies & Interests" },
    { value: "travel", label: "Travel & Adventures" },
    { value: "community", label: "Community Service" },
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (memoryForm.name && memoryForm.title && memoryForm.description) {
      const newMemory: Memory = {
        id: memories.length + 1,
        name: memoryForm.name,
        relationship: memoryForm.relationship || "Friend",
        category: memoryForm.category || "family",
        title: memoryForm.title,
        description: memoryForm.description,
        imageUrl: previewUrl || undefined,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        timeframe: memoryForm.timeframe,
      }
      setMemories([newMemory, ...memories])
      setMemoryForm({
        name: "",
        relationship: "",
        category: "",
        title: "",
        description: "",
        timeframe: "",
      })
      setSelectedFile(null)
      setPreviewUrl("")
    }
  }

  const openMemoryDetails = (memory: Memory) => {
    setExpandedMemory(memory)
    setCurrentMediaIndex(0)
  }

  const closeMemoryDetails = () => {
    setExpandedMemory(null)
    setPlayingSpotify(null)
  }

  const nextMedia = () => {
    if (expandedMemory?.media) {
      setCurrentMediaIndex((prev) => (prev + 1) % expandedMemory.media!.length)
    }
  }

  const prevMedia = () => {
    if (expandedMemory?.media) {
      setCurrentMediaIndex((prev) => (prev - 1 + expandedMemory.media!.length) % expandedMemory.media!.length)
    }
  }

  const toggleSpotifyPlayer = (spotifyId: string) => {
    setPlayingSpotify(playingSpotify === spotifyId ? null : spotifyId)
  }

  const shareMemoryToFacebook = (memory: Memory) => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(
      `Remembering Gary Robert Beaumont: "${memory.title}" - ${memory.description.substring(0, 100)}...`,
    )
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, "_blank")
  }

  const shareMemoryToInstagram = (memory: Memory) => {
    const text = `Remembering Gary Robert Beaumont: "${memory.title}" - ${memory.description.substring(0, 100)}... ${window.location.href}`
    navigator.clipboard.writeText(text)
    alert("Memory details copied to clipboard! You can now paste it in your Instagram story or post.")
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "family":
        return "👨‍👩‍👧‍👦"
      case "friends":
        return "👥"
      case "work":
        return "💼"
      case "hobbies":
        return "🎨"
      case "travel":
        return "✈️"
      case "community":
        return "🤝"
      default:
        return "📷"
    }
  }

  const getMediaIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />
      case "music":
        return <Music className="w-4 h-4" />
      default:
        return <ImageIcon className="w-4 h-4" />
    }
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
            <h1 className="text-2xl font-bold text-foreground">Share Memories</h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Page Header */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground mb-2 flex items-center justify-center gap-2">
                <Camera className="w-6 h-6 text-primary" />
                Celebrate Gary's Life
              </CardTitle>
              <p className="text-muted-foreground text-pretty">
                Share your favorite photos and memories of Gary. These precious moments will create a lasting
                tribute to her beautiful life and the joy he brought to so many people.
              </p>
            </CardHeader>
          </Card>

          {/* Add Memory Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Upload className="w-5 h-5 text-primary" />
                Share a Memory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="memory-name" className="text-foreground">
                      Your Name *
                    </Label>
                    <Input
                      id="memory-name"
                      value={memoryForm.name}
                      onChange={(e) => setMemoryForm((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="memory-relationship" className="text-foreground">
                      Relationship to Gary
                    </Label>
                    <Input
                      id="memory-relationship"
                      value={memoryForm.relationship}
                      onChange={(e) => setMemoryForm((prev) => ({ ...prev, relationship: e.target.value }))}
                      placeholder="e.g., Daughter, Friend, Neighbor"
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="memory-category" className="text-foreground">
                      Memory Category
                    </Label>
                    <Select
                      value={memoryForm.category}
                      onValueChange={(value) => setMemoryForm((prev) => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="memory-timeframe" className="text-foreground">
                      When was this? (Optional)
                    </Label>
                    <Input
                      id="memory-timeframe"
                      value={memoryForm.timeframe}
                      onChange={(e) => setMemoryForm((prev) => ({ ...prev, timeframe: e.target.value }))}
                      placeholder="e.g., Summer 2020, Christmas 2019"
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="memory-title" className="text-foreground">
                    Memory Title *
                  </Label>
                  <Input
                    id="memory-title"
                    value={memoryForm.title}
                    onChange={(e) => setMemoryForm((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Give your memory a meaningful title"
                    required
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="memory-description" className="text-foreground">
                    Share Your Memory *
                  </Label>
                  <Textarea
                    id="memory-description"
                    value={memoryForm.description}
                    onChange={(e) => setMemoryForm((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Tell us about this special moment with Gary..."
                    rows={4}
                    required
                    className="bg-input border-border resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="memory-photo" className="text-foreground">
                    Add a Photo (Optional)
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    {previewUrl ? (
                      <div className="space-y-4">
                        <div className="relative w-48 h-48 mx-auto">
                          <Image
                            src={previewUrl || "/placeholder.svg"}
                            alt="Memory preview"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setSelectedFile(null)
                            setPreviewUrl("")
                          }}
                          className="bg-transparent"
                        >
                          Remove Photo
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
                        <div>
                          <Input
                            id="memory-photo"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <Label
                            htmlFor="memory-photo"
                            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                          >
                            <Upload className="w-4 h-4" />
                            Choose Photo
                          </Label>
                        </div>
                        <p className="text-sm text-muted-foreground">JPG, PNG, or GIF up to 10MB</p>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Share Memory
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Memories Gallery */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Shared Memories ({memories.length})</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memories.map((memory) => (
                <Card
                  key={memory.id}
                  className="bg-card border-border overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openMemoryDetails(memory)}
                >
                  {memory.imageUrl && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={memory.imageUrl || "/placeholder.svg"}
                        alt={memory.title}
                        fill
                        className="object-cover"
                      />
                      {memory.media && memory.media.length > 1 && (
                        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                          <ImageIcon className="w-3 h-3" />
                          {memory.media.length}
                        </div>
                      )}
                    </div>
                  )}
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                        {getCategoryIcon(memory.category)} {categories.find((c) => c.value === memory.category)?.label}
                      </span>
                      {memory.timeframe && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {memory.timeframe}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-balance">{memory.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 text-pretty line-clamp-3">{memory.description}</p>

                    {(memory.media || memory.musicPlaylist) && (
                      <div className="flex items-center gap-2 mb-3">
                        {memory.media?.some((m) => m.type === "image") && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center gap-1">
                            <ImageIcon className="w-3 h-3" />
                            Photos
                          </span>
                        )}
                        {memory.media?.some((m) => m.type === "video") && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center gap-1">
                            <Video className="w-3 h-3" />
                            Videos
                          </span>
                        )}
                        {memory.musicPlaylist && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center gap-1">
                            <Music className="w-3 h-3" />
                            Music
                          </span>
                        )}
                      </div>
                    )}

                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>
                          <strong className="text-foreground">{memory.name}</strong> • {memory.relationship}
                        </span>
                        <span>{memory.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/leave-message">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                Leave a Message
              </Button>
            </Link>
            <Link href="/donations">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {expandedMemory && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">{expandedMemory.title}</h2>
              <Button variant="ghost" size="sm" onClick={closeMemoryDetails}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Media Gallery */}
              {expandedMemory.media && expandedMemory.media.length > 0 && (
                <div className="space-y-4">
                  <div className="relative">
                    <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
                      {expandedMemory.media[currentMediaIndex].type === "video" ? (
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                          <div className="text-center">
                            <Video className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                            <p className="text-muted-foreground">{expandedMemory.media[currentMediaIndex].title}</p>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={expandedMemory.media[currentMediaIndex].url || "/placeholder.svg"}
                          alt={expandedMemory.media[currentMediaIndex].title || "Memory"}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    {expandedMemory.media.length > 1 && (
                      <>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute left-2 top-1/2 -translate-y-1/2"
                          onClick={prevMedia}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={nextMedia}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </div>

                  {/* Media thumbnails */}
                  {expandedMemory.media.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {expandedMemory.media.map((media, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentMediaIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                            index === currentMediaIndex ? "border-primary" : "border-transparent"
                          }`}
                        >
                          {media.type === "video" ? (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                              <Video className="w-6 h-6 text-muted-foreground" />
                            </div>
                          ) : (
                            <Image
                              src={media.url || "/placeholder.svg"}
                              alt={media.title || "Thumbnail"}
                              width={80}
                              height={80}
                              className="object-cover w-full h-full"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  {expandedMemory.media[currentMediaIndex].title && (
                    <p className="text-center text-muted-foreground text-sm">
                      {expandedMemory.media[currentMediaIndex].title}
                    </p>
                  )}
                </div>
              )}

              {/* Detailed Story */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">The Story</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {expandedMemory.detailedStory || expandedMemory.description}
                </p>
              </div>

              {/* Music Playlist */}
              {expandedMemory.musicPlaylist && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Music className="w-5 h-5 text-primary" />
                    Music from this Memory
                  </h3>
                  <div className="space-y-3">
                    {expandedMemory.musicPlaylist.map((song, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-foreground">{song.title}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleSpotifyPlayer(song.spotifyId)}
                            className="flex items-center gap-2"
                          >
                            <Play className="w-4 h-4" />
                            {playingSpotify === song.spotifyId ? "Hide Player" : "Play"}
                          </Button>
                        </div>
                        {playingSpotify === song.spotifyId && (
                          <iframe
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator`}
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen={false}
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="rounded-lg"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Memory Details */}
              <div className="border-t border-border pt-4 space-y-4">
                {/* Social Media Sharing */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-primary" />
                    Share this Memory
                  </h4>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => shareMemoryToFacebook(expandedMemory)}
                      size="sm"
                      className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white"
                    >
                      <Facebook className="w-3 h-3" />
                      Facebook
                    </Button>
                    <Button
                      onClick={() => shareMemoryToInstagram(expandedMemory)}
                      size="sm"
                      className="flex items-center gap-2 bg-gradient-to-r from-[#E4405F] to-[#5B51D8] hover:opacity-90 text-white"
                    >
                      <Instagram className="w-3 h-3" />
                      Instagram
                    </Button>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shared by:</span>
                    <span className="text-foreground">
                      {expandedMemory.name} ({expandedMemory.relationship})
                    </span>
                  </div>
                  {expandedMemory.timeframe && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">When:</span>
                      <span className="text-foreground">{expandedMemory.timeframe}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shared on:</span>
                    <span className="text-foreground">{expandedMemory.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
              className="hover:text-muted-foreground transition-colors underline"
            >
              Waymark Foundry
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
