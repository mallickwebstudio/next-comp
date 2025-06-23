import { Metadata } from "next";
import { Rubik } from "next/font/google";
import Providers from "@/hooks/providers";
import { siteConfig } from "@/lib/metadata";
import "./globals.css";


const rubik = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata:Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "UI/UX Designer",
    "Content Writer",
    "Video Editor",
    "Digital Marketer",
    "SEO Specialist",
    "Illustrator",
    "Animator",
    "Photographer",
    "Copywriter",
    "Data Scientist",
    "App Developer",
    "Social Media Manager",
    "Product Designer",
    "3D Artist",
    "Brand Strategist",
    "Email Marketer",
    "Voiceover Artist",
    "Game Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Cybersecurity Expert",
    "Cloud Architect",
    "AI/ML Specialist",
    "Technical Writer",
    "Virtual Assistant",
  ],
  authors: [
    {
      name: siteConfig.owner,
      url: siteConfig.ownerSite,
    },
  ],
  creator: "name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@mallickwebstudo",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.className} ${rubik.variable} relative min-h-screen bg-background antialiased mx-auto w-full`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}