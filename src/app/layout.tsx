// import { cookies } from "next/headers"
"use client"
import React from "react"
import type { Metadata } from "next"
import { cx } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { siteConfig } from "./siteConfig"

import { Sidebar } from "@/components/ui/navigation/Sidebar"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// export const metadata: Metadata = {
//   metadataBase: new URL("https://yoururl.com"),
//   title: siteConfig.name,
//   description: siteConfig.description,
//   keywords: [],
//   authors: [
//     {
//       name: "yourname",
//       url: "",
//     },
//   ],
//   creator: "yourname",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name,
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} overflow-y-scroll scroll-auto bg-gray-50 antialiased selection:bg-blue-100 selection:text-blue-700 dark:bg-gray-950`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="light" attribute="class">
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
