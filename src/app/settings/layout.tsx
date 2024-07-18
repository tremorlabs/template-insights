"use client";
import React from "react";

import { cx } from "@/lib/utils";
import { Sidebar } from "@/components/ui/navigation/Sidebar";
import { TabNavigation, TabNavigationLink } from "@/components/TabNavigation"
import { usePathname } from "next/navigation"
import { siteConfig } from "../siteConfig";
import Link from "next/link";

const navigationSettings = [
    { name: "Audit", href: siteConfig.baseLinks.settings.audit },
    { name: "Billing & Usage", href: siteConfig.baseLinks.settings.billing },
    { name: "Users", href: siteConfig.baseLinks.settings.users },
]

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };
    const pathname = usePathname()
    return (
        <div className="mx-auto max-w-screen-2xl">
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <div
                className={cx(
                    isCollapsed ? "lg:pl-[60px]" : "lg:pl-64",
                    "lg:bg-gray-50 lg:py-3 lg:pr-3 transition-width transition-slowest ease"
                )}
            >
                <div className="lg:rounded-lg lg:border lg:border-gray-200 bg-white p-4 sm:p-6 lg:p-8">
                    <h1 className="text-lg text-gray-900 dark:text-gray-50 font-semibold">Settings</h1>
                    <TabNavigation className="mt-6">
                        {navigationSettings.map((item) => (
                            <TabNavigationLink
                                key={item.name}
                                asChild
                                active={pathname === item.href}
                                className="px-5"
                            >
                                <Link href={item.href}>{item.name}</Link>
                            </TabNavigationLink>
                        ))}
                    </TabNavigation>
                    <div className="pt-6">{children}</div>
                </div>
            </div>
        </div>
    );
}
