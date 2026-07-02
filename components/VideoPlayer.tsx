"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({ src, caption }: { src: string; caption?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <figure className="video-card">
      <video
        ref={ref}
        controls
        src={`/assets/${src}`}
        aria-label={caption || "Video"}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="video-play-overlay">
        {!playing && (
          <button aria-label="Play video" onClick={togglePlay}>
            ▶
          </button>
        )}
      </div>
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}
