"use client";

import { useState } from 'react'

type VideoEmbedProps = {
  // A YouTube or ABC7 embed URL
  src: string
  title: string
  // Shown on the placeholder when there is no YouTube thumbnail
  source?: string
  className?: string
}

function youTubeId(src: string) {
  const match = src.match(/youtube(?:-nocookie)?\.com\/embed\/([\w-]+)/)
  return match ? match[1] : null
}

// Shows a picture with a play button and loads the real video player only when
// the visitor clicks. This keeps pages fast and stops YouTube and ABC from
// setting cookies before the visitor chooses to watch.
export default function VideoEmbed({ src, title, source, className = '' }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false)
  const id = youTubeId(src)

  if (playing) {
    const playSrc = id
      ? src.replace(/youtube\.com\/embed/, 'youtube-nocookie.com/embed') + (src.includes('?') ? '&' : '?') + 'autoplay=1'
      : src
    return (
      <iframe
        className={`w-full h-full ${className}`}
        src={playSrc}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group/video relative block w-full h-full overflow-hidden bg-violet-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-saffron-400 ${className}`}
    >
      {id ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-end justify-center pb-4 bg-gradient-to-br from-violet-700 to-violet-950 text-white text-lg font-bold">
          {source}
        </span>
      )}
      <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-black/70 group-hover/video:bg-red-600 transition-colors shadow-lg">
          <svg className="w-7 h-7 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}
