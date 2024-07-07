import { cookies } from "next/headers"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "./siteConfig"
import {
  RiHome2Line,
  RiLinkM,
  RiListCheck,
  RiSettings5Line,
} from "@remixicon/react"

import { Sidebar } from "@/components/ui/navigation/Sidebar"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yoururl.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "yourname",
      url: "",
    },
  ],
  creator: "yourname",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const navigation = [
  { name: "Overview", href: siteConfig.baseLinks.overview, icon: RiHome2Line },
  { name: "Details", href: siteConfig.baseLinks.details, icon: RiListCheck },
  {
    name: "Settings",
    href: siteConfig.baseLinks.settings.general,
    icon: RiSettings5Line,
  },
] as const

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = false
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950`}
        suppressHydrationWarning
      >
        <div className="mx-auto max-w-screen-2xl">
          <ThemeProvider defaultTheme="system" attribute="class">
            <Sidebar
              defaultLayout={defaultLayout}
              defaultCollapsed={defaultCollapsed}
              navCollapsedSize={4}
            />
            <main className="lg:pl-72 bg-white">{children}</main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}