"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type VideoBlockProps =
  | { mode: "youtube"; youtubeId: string; title: string; className?: string }
  | { mode: "local"; src: string; poster?: string; title: string; className?: string };

export function VideoBlock(props: VideoBlockProps) {
  const [activated, setActivated] = useState(false);
  const { title, className = "" } = props;

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-organic bg-tierra-dark ${className}`}
    >
      {!activated ? (
        <button
          type="button"
          onClick={() => setActivated(true)}
          aria-label={`Reproducir video: ${title}`}
          className="group flex h-full w-full items-center justify-center bg-gradient-to-br from-campo-dark to-tierra-dark"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-yema text-tierra-dark shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
          </span>
          <span className="absolute bottom-4 left-4 right-4 text-left font-sans text-sm font-medium text-crema">
            {title}
          </span>
        </button>
      ) : props.mode === "youtube" ? (
        // Placeholder: reemplazar youtubeId por el video final del campo/proceso
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${props.youtubeId}?autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerate-form; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        // Placeholder: reemplazar src por el archivo final en /public/videos/
        <video
          className="h-full w-full object-cover"
          src={props.src}
          poster={props.poster}
          controls
          autoPlay
          data-placeholder="reemplazar por video real del campo del cliente"
        />
      )}
    </div>
  );
}
