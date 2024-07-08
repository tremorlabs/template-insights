"use client"
import React from "react"
import { RiHome2Line, RiListCheck, RiSettings5Line } from "@remixicon/react"
import { siteConfig } from "@/app/siteConfig"
import { cx, focusRing } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/Resizable"

const navigation = [
    { name: "Overview", href: siteConfig.baseLinks.overview, icon: RiHome2Line },
    { name: "Details", href: siteConfig.baseLinks.details, icon: RiListCheck },
    {
        name: "Settings",
        href: siteConfig.baseLinks.settings.general,
        icon: RiSettings5Line,
    },
] as const


interface SidebarProps {
    defaultLayout: number[] | undefined
    defaultCollapsed?: boolean
    navCollapsedSize: number
}

export function Sidebar({
    defaultLayout = [250, 655],
    defaultCollapsed = false,
    navCollapsedSize,
}: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
    const pathname = usePathname()
    const isActive = (itemHref: string) => {
        if (itemHref === siteConfig.baseLinks.settings.general) {
            return pathname.startsWith("/settings")
        }
        return pathname === itemHref || pathname.startsWith(itemHref)
    }
    return (
        <>
            {/* sidebar (lg+) */}
            <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                    document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                        sizes
                    )}`
                }}
                className="h-full max-h-[800px] items-stretch"
            >
                <ResizablePanel
                    defaultSize={defaultLayout[0]}
                    collapsedSize={navCollapsedSize}
                    collapsible={true}
                    minSize={15}
                    maxSize={20}
                    onCollapse={(collapsed: boolean) => {
                        setIsCollapsed(collapsed)
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                            collapsed
                        )}`
                    }}
                    className={cx(
                        isCollapsed &&
                        "min-w-[50px] transition-all duration-300 ease-in-out"
                    )}
                >
                    <nav
                        data-collapsed={isCollapsed}
                        className="hidden lg:z-50 lg:flex lg:flex-col h-screen"
                    >
                        <aside className="flex grow flex-col gap-y-6 overflow-y-auto bg-white p-4 dark:bg-gray-950">
                            <nav
                                aria-label="core navigation links"
                                className="flex flex-1 flex-col space-y-10"
                            >
                                <ul role="list" className="space-y-0.5">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            {isCollapsed ? (
                                                <Link
                                                    href={item.href}
                                                    className={cx(
                                                        isActive(item.href)
                                                            ? "text-indigo-600 dark:text-indigo-400"
                                                            : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                                                        "rounded-md p-2 text-sm font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900",
                                                        focusRing,
                                                    )}
                                                >
                                                    <item.icon className="size-5 shrink-0" aria-hidden="true" />
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className={cx(
                                                        isActive(item.href)
                                                            ? "text-indigo-600 dark:text-indigo-400"
                                                            : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                                                        "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900",
                                                        focusRing,
                                                    )}
                                                >
                                                    <item.icon className="size-4 shrink-0" aria-hidden="true" />
                                                    {item.name}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="mt-auto">
                                {/* <UserProfileDesktop /> */}
                            </div>
                        </aside>
                    </nav>
                    {/* top navbar (xs-lg) */}
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[1]} minSize={30} className="p-10">Second panel</ResizablePanel>
            </ResizablePanelGroup>
        </>
    )
}