"use client";

import { useEffect } from "react";

export default function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const src = photos[index];
  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true">
      <div className="lightbox-frame fade-in">
        <img
          src={`/assets/${src}`}
          alt={`Photo ${index + 1}`}
          className="lightbox-image"
        />
        <div className="lightbox-controls">
          <button
            aria-label="Previous photo"
            className="lightbox-nav"
            onClick={onPrev}
          >
            ‹
          </button>
          <button
            aria-label="Close lightbox"
            className="lightbox-close"
            onClick={onClose}
          >
            Close
          </button>
          <button aria-label="Next photo" className="lightbox-nav" onClick={onNext}>
            ›
          </button>
        </div>
        <div className="lightbox-caption">Photo {index + 1} of {photos.length}</div>
      </div>
    </div>
  );
}
