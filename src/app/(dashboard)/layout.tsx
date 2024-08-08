"use client"
import React from "react"

import { cx } from "@/lib/utils"

import { Sidebar } from "@/components/ui/navigation/Sidebar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      {/* @CHRIS: check whether <main> is used twice */}
      <main
        className={cx(
          isCollapsed ? "lg:pl-[60px]" : "lg:pl-64",
          "transition-slowest ease transition-width lg:bg-gray-50 lg:py-3 lg:pr-3 lg:dark:bg-gray-900",
        )}
      >
        <div className="bg-white p-4 sm:p-6 lg:rounded-lg lg:border lg:border-gray-200 dark:bg-gray-900 lg:dark:border-gray-800">
          {children}
        </div>
      </main>
    </div>
  )
}
