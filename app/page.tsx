import HeartField from "@/components/HeartField";
import Gallery from "@/components/Gallery";
import VideoPlayer from "@/components/VideoPlayer";

const letters = [
  {
    stamp: "WITH\nLOVE",
    text: "In this short time, you've filled my life with so much love and happiness. Every moment we share has been a treasure. You've shown me what true partnership means and I couldn't ask for a better partner.",
  },
  {
    stamp: "FOR\nYOU",
    text: "I look forward to all the memories we have yet to create and the love that will continue to grow between us. Thank you for being you and for making this first month so special. Here's to many more months and years of love, laughter and happiness together!",
  },
  {
    stamp: "EVERY\nDAY",
    text: "Everyday, my love for you deepens. It's not just a feeling; it's a constant, a quiet strength that grows with each sunrise and settles with each sunset.",
  },
  {
    stamp: "MY\nGIFT",
    text: "Your presence in my life is a gift, a source of endless joy and unwavering support. I cherish every moment with you, and even when we're apart, my thoughts are filled with your laughter and the warmth of your love.",
  },
  {
    stamp: "EVERY\nNEW DAY",
    text: "I love you more than words can express, and I look forward to every new day we get to share.",
  },
  {
    stamp: "SO\nSPECIAL",
    text: "Even though love can't always be explained, the way you love me makes me feel deeply special and wanted. I struggle to put it into words, but I know how much I care… I never imagined this would become something so beautiful.",
  },
];

const reasons = [
  "You care so much about me.",
  "You love me irrespective of my flaws.",
  "You respect me and my choices.",
  "You don't feel threatened by my goals and ambition.",
  "You are supportive.",
  "You make me happy.",
  "You love me again.",
  "You prioritize my happiness.",
  "You are always ready to make sacrifices for me.",
  "You are you.",
];

// Add or remove entries here — each needs a file in /public/assets
const photos = [
  "picture1.jpeg",
  "IMG-20260703-WA0009.jpg",
  "IMG-20260703-WA0005.jpg",
  "IMG-20260703-WA0007.jpg",
  "IMG-20260703-WA0010.jpg",
];

// Add or remove entries here too — each needs a video file in /public/assets
const videos = [
  { src: "video1.mp4", caption: "our memories" },
  { src: "video2.mp4", caption: "from you and i" },
  
];

export default function Home() {
  return (
    <>
      <HeartField />

      <section id="hero">
        <div className="wax-seal">&hearts;</div>
        <span className="eyebrow">for you, always</span>
        <h1>Thank You for Being You</h1>
        <p className="sub">A little corner of the internet, made just for us.</p>
        <div className="scroll-cue">scroll down ↓</div>
      </section>

      <section id="letters">
        <div className="section-head">
          <span className="eyebrow">a few words</span>
          <h2>Love Letters</h2>
        </div>
        <div className="postcards">
          {letters.map((letter, i) => (
            <div className="postcard" key={i}>
              <div className="tape" />
              <div className="stamp">
                {letter.stamp.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j === 0 ? <br /> : null}
                  </span>
                ))}
              </div>
              <span className="no">No. {String(i + 1).padStart(2, "0")}</span>
              <p>{letter.text}</p>
            </div>
          ))}
        </div>
        <p className="final-line">&quot;Thank you for being you.&quot;</p>
      </section>

      <section id="reasons">
        <div className="section-head">
          <span className="eyebrow">counting the ways</span>
          <h2>Ten Reasons Why I Love You</h2>
        </div>
        <div className="reasons-grid">
          {reasons.map((reason, i) => (
            <div className="reason-card" key={i}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery">
        <div className="section-head">
          <span className="eyebrow">frames of us</span>
          <h2>Our Pictures</h2>
        </div>
        <Gallery photos={photos} />
      </section>

      <section id="videos">
        <div className="section-head">
          <span className="eyebrow">moments in motion</span>
          <h2>Our Videos</h2>
        </div>
        <div className="video-grid">
          {videos.map((video, i) => (
            <VideoPlayer key={i} src={video.src} caption={video.caption} />
          ))}
        </div>
     
      </section>

      <section id="music">
        <div className="section-head">
          <span className="eyebrow">our soundtrack</span>
          <h2>The Playlist</h2>
        </div>
        <div className="music-wrap">
          <div className="vinyl" />
          {/* Replace YOUR_PLAYLIST_ID with your real Spotify playlist ID */}
          <div className="spotify-embed">
            <iframe
              title="Our Spotify playlist"
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/playlist/0p7rNsW24ErbsDFxoO9Foh"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="rule" />
        <div className="signature">— always yours</div>
        <div className="small">MADE WITH LOVE, JUST FOR YOU</div>
      </footer>
    </>
  );
}
