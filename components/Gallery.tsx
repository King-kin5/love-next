"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

export default function Gallery({ photos }: { photos: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function open(i: number) {
    setOpenIndex(i);
  }
  function close() {
    setOpenIndex(null);
  }
  function prev() {
    setOpenIndex((v) => (v === null ? null : (v - 1 + photos.length) % photos.length));
  }
  function next() {
    setOpenIndex((v) => (v === null ? null : (v + 1) % photos.length));
  }

  return (
    <>
      <div className="gallery-grid">
        {photos.map((file, i) => (
          <div className="tile" key={i} onClick={() => open(i)} role="button" tabIndex={0} aria-label={`Open photo ${i + 1}`} onKeyDown={(e) => { if (e.key === 'Enter') open(i); }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/assets/${file}`}
              alt={`Photo ${i + 1}`}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const label = target.nextElementSibling as HTMLElement | null;
                if (label) label.style.display = "flex";
              }}
            />
            <span className="placeholder-label" style={{ display: "none" }}>
              add {file}
              <br />
              to /public/assets
            </span>
          </div>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox photos={photos} index={openIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </>
  );
}
