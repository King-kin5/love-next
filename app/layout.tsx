import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For You — Every Moment, Treasured",
  description: "A little corner of the internet, made just for us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content="For You — Every Moment, Treasured" />
        <meta property="og:description" content="A little corner of the internet, made just for us." />
        <meta property="og:image" content="/assets/picture1.jpeg" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Dancing+Script:wght@500;700&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
