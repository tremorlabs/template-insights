"use client"
import { BarChartVariant } from "@/components/BarChartVariant"
import { Tooltip } from "@/components/Tooltip"
import { Transaction } from "@/data/schema"
import { transactions } from "@/data/transactions"
import { InfoIcon } from "lucide-react"
import { useQueryState } from "nuqs"
import { useMemo } from "react"
import { DEFAULT_RANGE, RANGE_DAYS, RangeKey } from "./dateRanges"

interface ChartDataItem {
  date: string
  totalAmount: number
}

const processTransactions = (
  transactions: Transaction[],
  range: RangeKey,
  expenseStatus: string,
  minAmount: number,
  maxAmount: number,
  selectedCountries: string[],
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

  const summedData = transactions.reduce<Record<string, number>>(
    (acc, transaction) => {
      const date = transaction.transaction_date.split("T")[0]
      if (
        new Date(date) >= filterDate &&
        (expenseStatus === "all" ||
          transaction.expense_status === expenseStatus) &&
        transaction.amount >= minAmount &&
        transaction.amount <= maxAmount &&
        (selectedCountries.length === 0 ||
          selectedCountries.includes(transaction.country))
      ) {
        acc[date] = (acc[date] || 0) + transaction.amount
      }
      return acc
    },
    {},
  )

  return allDates.map((date) => ({
    date,
    totalAmount: summedData[date] || 0,
  }))
}

export function TransactionAmount() {
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

  const [amountRange] = useQueryState("amount_range", {
    defaultValue: "0-Infinity",
  })

  const [selectedCountries] = useQueryState<string[]>("countries", {
    defaultValue: [],
    parse: (value: string) => (value ? value.split("+") : []),
    serialize: (value: string[]) => value.join("+"),
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
        minAmount,
        maxAmount,
        selectedCountries,
      ),
    [range, expenseStatus, minAmount, maxAmount, selectedCountries],
  )

  const totalAmount = useMemo(
    () =>
      Math.round(chartData.reduce((sum, item) => sum + item.totalAmount, 0)),
    [chartData],
  )

  const valueFormatter = (number: number) =>
    `$${Intl.NumberFormat("us").format(Math.round(number)).toString()}`

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
            Total Transaction Amount
          </h2>
          <Tooltip
            side="bottom"
            content="Total amount of transactions for the selected period and amount range."
          >
            <InfoIcon className="size-4 text-gray-600 dark:text-gray-400" />
          </Tooltip>
        </div>
      </div>
      <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-gray-50">
        {valueFormatter(totalAmount)}
      </p>
      <BarChartVariant
        data={chartData}
        index="date"
        categories={["totalAmount"]}
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
