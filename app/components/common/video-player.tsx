"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export default function VideoPlayer({
  src,
  poster,
  className,
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [showControls, setShowControls] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg bg-black", className)}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {!controls && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity",
            showControls || !isPlaying ? "opacity-100" : "opacity-0"
          )}
        >
          <Button
            variant="secondary"
            size="icon"
            onClick={togglePlay}
            className="rounded-full w-16 h-16"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
