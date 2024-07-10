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
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} overflow-y-scroll scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 bg-gray-50 dark:bg-gray-950`}
        suppressHydrationWarning
      >
        <div className="mx-auto max-w-screen-2xl">
          <ThemeProvider defaultTheme="system" attribute="class">
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <main className={cx(
              isCollapsed ? "lg:pl-[60px]" : "lg:pl-64",
              "lg:bg-gray-50 lg:py-3 lg:pr-3 transition-width transition-slowest ease"
            )}>
              <div className="lg:rounded-lg lg:border lg:border-gray-200 bg-white p-6">
                {children}
              </div>
            </main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}