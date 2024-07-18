"use client";
import React from "react";


import { cx } from "@/lib/utils";

import { usePathname } from "next/navigation";
import { siteConfig } from "../siteConfig";
import Link from "next/link";
import { ProgressBar } from "@/components/ProgressBar";

const steps = [
  { name: "Product selection", href: '/onboarding/product' },
  { name: "Billing & Usage", href: '/onboadding/billing' },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="max-w-lg mx-auto">
      <div>{children}</div>
    </div>
  );
}
