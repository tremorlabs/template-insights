"use client"
import React, { useMemo } from "react"
import { BarChartVariant } from "@/components/BarChartVariant"
import { Transaction } from "@/data/schema"
import { transactions } from "@/data/transactions"
import { useQueryState } from "nuqs"
import { RANGE_DAYS, DEFAULT_RANGE, RangeKey } from "./dateRanges"
import { Tooltip } from "@/components/Tooltip"
import { InfoIcon } from "lucide-react"

interface ChartDataItem {
  date: string
  transactionCount: number
}

const processTransactions = (
  transactions: Transaction[],
  range: RangeKey,
  expenseStatus: string,
  paymentStatus: string,
  minAmount: number,
  maxAmount: number,
): ChartDataItem[] => {
  const currentDate = new Date()
  const filterDate = new Date(currentDate)
  const daysToSubtract = RANGE_DAYS[range] || RANGE_DAYS[DEFAULT_RANGE]
  filterDate.setDate(currentDate.getDate() - daysToSubtract)

  const allDates = Array.from({ length: daysToSubtract + 1 }, (_, i) => {
    const date = new Date(currentDate)
    date.setDate(date.getDate() - i)
    return date.toISOString().split("T")[0]
  }).reverse()

  const countedData = transactions.reduce<Record<string, number>>(
    (acc, transaction) => {
      const date = transaction.transaction_date.split("T")[0]
      if (
        new Date(date) >= filterDate &&
        (expenseStatus === "all" ||
          transaction.expense_status === expenseStatus) &&
        (paymentStatus === "all" ||
          transaction.payment_status === paymentStatus) &&
        transaction.amount >= minAmount &&
        transaction.amount <= maxAmount
      ) {
        acc[date] = (acc[date] || 0) + 1
      }
      return acc
    },
    {},
  )

  return allDates.map((date) => ({
    date,
    transactionCount: countedData[date] || 0,
  }))
}

export function TransactionCount() {
  const [range] = useQueryState<RangeKey>("range", {
    defaultValue: DEFAULT_RANGE,
    parse: (value): RangeKey =>
      Object.keys(RANGE_DAYS).includes(value)
        ? (value as RangeKey)
        : DEFAULT_RANGE,
  })

  const [expenseStatus] = useQueryState("expense_status", {
    defaultValue: "all",
  })

  const [paymentStatus] = useQueryState("payment_status", {
    defaultValue: "all",
  })

  const [amountRange] = useQueryState("amount_range", {
    defaultValue: "0-Infinity",
  })

  const [minAmount, maxAmount] = useMemo(() => {
    const [min, max] = amountRange.split("-").map(Number)
    return [min, max === Infinity ? Number.MAX_SAFE_INTEGER : max]
  }, [amountRange])

  const chartData = useMemo(
    () =>
      processTransactions(
        transactions,
        range,
        expenseStatus,
        paymentStatus,
        minAmount,
        maxAmount,
      ),
    [range, expenseStatus, paymentStatus, minAmount, maxAmount],
  )

  const totalCount = useMemo(
    () => chartData.reduce((sum, item) => sum + item.transactionCount, 0),
    [chartData],
  )

  const valueFormatter = (number: number) =>
    Intl.NumberFormat("us").format(number).toString()

  const dateFormatter = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <h2 className="text-sm text-gray-600 dark:text-gray-400">
            Transaction Count
          </h2>
          <Tooltip
            side="bottom"
            content="Total number of transactions for the selected period and amount range."
          >
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </Tooltip>
        </div>
      </div>
      <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-gray-50">
        {valueFormatter(totalCount)}
      </p>
      <BarChartVariant
        data={chartData}
        index="date"
        categories={["transactionCount"]}
        showLegend={false}
        colors={["blue"]}
        yAxisWidth={72}
        valueFormatter={valueFormatter}
        xValueFormatter={dateFormatter}
        className="mt-6 h-48"
      />
    </div>
  )
}
