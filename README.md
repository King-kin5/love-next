# For You 💌

A romantic single-page site: love letters, ten reasons, photos, videos, and a Spotify playlist — built with Next.js 14 + TypeScript.

## One heads-up on Node version

You mentioned Node 15 — just flagging that it's no longer supported by current Next.js (which needs **Node 18.18+**) or by Vercel's build system. Locally, install a current LTS with:

```bash
nvm install --lts
nvm use --lts
```

You don't need to do anything special for Vercel itself — it picks a modern Node version automatically when you deploy.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add your content

1. **Photos** — put image files in `public/assets/` named `photo1.jpg` … `photo6.jpg` (or edit the `photos` array in `app/page.tsx` to use your own filenames). Add more by adding more entries to that array.
2. **Videos** — put video files in `public/assets/` named `video-1.mp4` … `video-4.mp4` (or edit the `videos` array in `app/page.tsx`, which also lets you add as many as you want, each with its own caption).
3. **Spotify playlist** — copy your playlist's share link, grab the ID after `/playlist/`, and paste it in place of `YOUR_PLAYLIST_ID` in `app/page.tsx` (search for `spotify.com/embed`).

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push this folder to a GitHub repo and import it at vercel.com — either way, no extra config needed.
