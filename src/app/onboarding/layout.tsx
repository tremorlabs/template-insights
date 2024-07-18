"use client"
import React from "react"
import { cx } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/ui/Logo"
import useScroll from "@/lib/useScroll"
import { Button } from "@/components/Button"

// Define the type for the steps
interface Step {
  name: string
  href: string
}

// Define the steps array with type Step
const steps: Step[] = [
  { name: "Product selection", href: "/onboarding/product" },
  { name: "Employees", href: "/onboarding/employees" },
  { name: "Infrastructure", href: "/onboarding/infrastructure" },
]

interface StepProgressProps {
  steps: Step[]
}

const StepProgress = ({ steps }: StepProgressProps) => {
  const pathname = usePathname()
  const currentStepIndex = steps.findIndex((step) =>
    pathname.startsWith(step.href),
  )

  return (
    <div className="flex flex-nowrap gap-1">
      {steps.map((step, index) => (
        <div
          key={step.name}
          className={cx(
            "h-1 w-12 rounded-full",
            index <= currentStepIndex ? "bg-blue-500" : "bg-gray-300",
          )}
        />
      ))}
    </div>
  )
}

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const scrolled = useScroll(15)

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 flex items-center justify-between border-b bg-gray-50 px-6 transition-all",
          scrolled ? "h-12" : "h-20",
        )}
      >
        <Logo className="w-7 text-blue-500" />
        <div aria-hidden>
          <StepProgress steps={steps} />
        </div>
        <Button variant="ghost">Skip to dashboard</Button>
      </header>
      <div className="mx-auto mb-20 mt-28 max-w-lg">{children}</div>
    </>
  )
}

export default Layout
