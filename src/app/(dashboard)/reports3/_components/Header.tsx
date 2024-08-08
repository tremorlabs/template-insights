"use client"
import React from "react"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import DateRangeSelect from "./DateRangeSelect"
import ExpenseStatusSelect from "./ExpenseStatusSelect"
import PaymentStatusSelect from "./PaymentStatusSelect"
import { Button } from "@/components/Button"
import { useQueryState } from "nuqs"
import { DEFAULT_RANGE, RangeKey } from "./dateRanges"
import { AmountSlider } from "./AmountSlider"

function FormattedDate() {
  const [dateString, setDateString] = React.useState<string>("")

  React.useEffect(() => {
    const date = new Date(new Date().setHours(new Date().getHours() - 1))
    setDateString(
      date.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    )
  }, [])

  return (
    <p className="whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
      Last refresh: {dateString}
    </p>
  )
}

export default function Header() {
  const scrolled = useScroll(10)

  const [, setRange] = useQueryState("range")
  const [, setExpenseStatus] = useQueryState("expense_status")
  const [, setPaymentStatus] = useQueryState("payment_status")
  const [, setAmountRange] = useQueryState("amount_range")

  const handleResetFilters = () => {
    setRange(DEFAULT_RANGE)
    setExpenseStatus("all")
    setPaymentStatus("all")
    setAmountRange(null)
  }

  return (
    <div
      className={cx(
        "sticky top-0 z-50 -my-6 flex flex-col md:flex-row md:items-center md:justify-between md:flex-wrap gap-6 bg-white dark:bg-gray-900 py-6 transition-all",
        scrolled && "border-b border-gray-200 dark:border-gray-800",
        // @SEV: weird border glitch in dark mode (-> changes color)
      )}
    >
      <div className="space-y-1">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Reports
        </h1>
        <FormattedDate />
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:items-end">
        <DateRangeSelect />
        <ExpenseStatusSelect />
        <PaymentStatusSelect />
        <AmountSlider />
        <Button variant="light" className="h-fit dark:border-gray-800" onClick={handleResetFilters}>Reset</Button>
      </div>
    </div>
  )
}