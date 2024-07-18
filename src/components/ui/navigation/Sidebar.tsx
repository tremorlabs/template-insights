"use client";
import React from "react";
import { Logo } from "../Logo";
import { Tooltip } from "@/components/Tooltip";
import { siteConfig } from "@/app/siteConfig";
import { cx, focusRing } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Table2,
    Settings2,
    PanelRightClose,
    PanelRightOpen,
    BarChartBig
} from "lucide-react";

import {
    RiSidebarFoldLine,
    RiSidebarUnfoldLine,
    RiHome2Line,
    RiLinkM,
    RiListCheck,
    RiSettings5Line,
} from "@remixicon/react";

const navigation = [
    { name: "Reports", href: siteConfig.baseLinks.overview, icon: BarChartBig },
    { name: "Transactions", href: siteConfig.baseLinks.details, icon: Table2 },
    {
        name: "Settings",
        href: siteConfig.baseLinks.settings.audit,
        icon: Settings2,
    },
] as const;

const shortcuts = [
    {
        name: "Add new user",
        href: "/settings/users",
    },
    {
        name: "Workspace usage",
        href: "/settings/billing#billing-overview",
    },
    {
        name: "Cost spend control",
        href: "/settings/billing#cost-spend-control",
    },
    {
        name: "Overview – Rows written",
        href: "/reports#usage-overview",
    },
] as const;

// @Chris: kick out remixicon package if not used finally

interface SidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
}

export function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
    const pathname = usePathname();
    const isActive = (itemHref: string) => {
        if (itemHref === siteConfig.baseLinks.settings.audit) {
            return pathname.startsWith("/settings");
        }
        return pathname === itemHref || pathname.startsWith(itemHref);
    };
    return (
        <>
            {/* sidebar (lg+) */}
            <nav
                className={cx(
                    isCollapsed ? "lg:w-[60px]" : "lg:w-64",
                    "hidden overflow-x-hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col bg-gray-50",
                    "transition-width transform-gpu ease duration-100"
                )}
            >
                <aside className="flex flex-col gap-y-4 overflow-y-auto px-3 py-4  whitespace-nowrap">
                    <div>
                        <div className="flex items-center gap-x-2.5">
                            <button
                                className="rounded-md inline-flex p-2 hover:bg-gray-200 transition"
                                onClick={toggleSidebar}
                            >
                                {isCollapsed ? (
                                    <PanelRightClose
                                        className="size-5 shrink-0 text-gray-500 hover:text-gray-600 dark:text-gray-400"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <PanelRightOpen
                                        className="size-5 shrink-0 text-gray-500 hover:text-gray-600 dark:text-gray-400"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                            <span className={cx("text-sm text-gray-900 font-semibold transition-all", isCollapsed ? "opacity-0" : "opacity-100")}>
                                Acme Corp.
                            </span>
                        </div>
                        {/* <div className="mt-2 py-2 flex items-center gap-2.5">
                            <div className="border border-gray-200 p-2 rounded-md bg-white shadow-sm">
                                <Logo className="size-5 shrink-0" aria-hidden="true" />
                            </div>
                            {!isCollapsed ? (
                                <span className="text-sm text-gray-900 font-semibold">Database</span>
                            ) : null}
                        </div> */}
                    </div>
                    <nav
                        aria-label="core navigation links"
                        className="flex flex-1 flex-col space-y-10"
                    >
                        <div>
                            <span
                                aria-hidden={isCollapsed}
                                className={cx(
                                    "text-xs block h-6  font-medium leading-6 text-gray-500 transition-opacity",
                                    isCollapsed ? "opacity-0" : "opacity-100"
                                )}
                            >
                                Platform
                            </span>
                            <ul role="list" className={cx("space-y-2 mt-1")}>
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        {isCollapsed ? (
                                            <Tooltip side="right" content={item.name} sideOffset={6} showArrow={false} className="z-[999]">
                                                <Link
                                                    href={item.href}
                                                    className={cx(
                                                        isActive(item.href)
                                                            ? "text-blue-600 dark:text-blue-500"
                                                            : "text-gray-700 dark:text-gray-300",
                                                        "inline-flex items-center hover:bg-gray-200/50 hover:dark:bg-gray-800 rounded-md p-2 text-sm font-medium transition",
                                                        focusRing
                                                    )}
                                                >
                                                    <item.icon
                                                        className="size-5 shrink-0"
                                                        aria-hidden="true"
                                                    />
                                                </Link>
                                            </Tooltip>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={cx(
                                                    isActive(item.href)
                                                        ? "text-blue-600 dark:text-blue-500"
                                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 hover:dark:bg-gray-900",
                                                    "flex items-center hover:bg-gray-200/50 hover:dark:bg-gray-900 gap-x-2.5 rounded-md p-2 text-sm font-medium transition",
                                                    focusRing
                                                )}
                                            >
                                                <item.icon
                                                    className="size-5 shrink-0"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cx(isCollapsed ? "opacity-0" : "opacity-100", "transition-opacity")} >
                            <span className="text-xs font-medium leading-6 text-gray-500">
                                Recent
                            </span>
                            <ul
                                aria-label="shortcuts"
                                role="list"
                                className="mt-1 space-y-0.5"
                            >
                                {shortcuts.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={cx(
                                                pathname === item.href ||
                                                    pathname.startsWith(item.href)
                                                    ? "text-indigo-600 dark:text-indigo-400"
                                                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-50",
                                                "flex items-center gap-x-2.5 rounded-md p-2 text-sm font-medium transition hover:bg-gray-200 hover:dark:bg-gray-900",
                                                focusRing
                                            )}
                                        >
                                            <RiLinkM
                                                className="size-4 shrink-0"
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                    <div className="mt-auto">{/* <UserProfileDesktop /> */}</div>
                </aside>
            </nav>
            {/* top navbar (xs-lg) */}
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-2 shadow-sm sm:gap-x-6 sm:px-4 lg:hidden dark:border-gray-800 dark:bg-gray-950">
                {/* <WorkspacesDropdownMobile /> */}
                <div className="flex items-center gap-1 sm:gap-2">
                    {/* <UserProfileMobile />
                    <MobileSidebar /> */}
                </div>
            </div>
        </>
    );
}