import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "Ipsita Saha"; // [MISSING INFORMATION: confirm exact preferred name]
const SITE_TAGLINE =
  "Computer Science graduate working across AI/ML, data analytics and web development — published NIR-spectroscopy research, and a singer outside of it.";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Portfolio`,
  description: SITE_TAGLINE,
  openGraph: {
    title: `${SITE_NAME} — Portfolio`,
    description: SITE_TAGLINE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Portfolio`,
    description: SITE_TAGLINE,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/*
          Loaded via a standard stylesheet link (fetched by the browser at
          runtime) rather than next/font/google, so the production build
          doesn't require build-time network access to fonts.googleapis.com.
          Functionally equivalent once deployed.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
