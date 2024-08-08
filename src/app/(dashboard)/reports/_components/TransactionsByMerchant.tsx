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
  merchant: string
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

  const merchantTotals = transactions.reduce<Record<string, number>>(
    (acc, transaction) => {
      const date = new Date(transaction.transaction_date)
      if (
        new Date(date) >= filterDate &&
        (expenseStatus === "all" ||
          transaction.expense_status === expenseStatus) &&
        transaction.amount >= minAmount &&
        transaction.amount <= maxAmount &&
        (selectedCountries.length === 0 ||
          selectedCountries.includes(transaction.country))
      ) {
        acc[transaction.merchant] =
          (acc[transaction.merchant] || 0) + transaction.amount
      }
      return acc
    },
    {},
  )

  return Object.entries(merchantTotals)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([merchant, totalAmount]) => ({ merchant, totalAmount }))
}

export function TransactionsByMerchant() {
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
  const [minAmount, maxAmount] = useMemo(() => {
    const [min, max] = amountRange.split("-").map(Number)
    return [min, max === Infinity ? Number.MAX_SAFE_INTEGER : max]
  }, [amountRange])

  const [selectedCountries] = useQueryState<string[]>("countries", {
    defaultValue: [],
    parse: (value: string) => (value ? value.split("+") : []),
    serialize: (value: string[]) => value.join("+"),
  })

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

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <h2 className="text-sm text-gray-600 dark:text-gray-400">
            Top 5 Merchants by Transaction Amount
          </h2>
          <Tooltip
            side="bottom"
            content="Total amount of transactions for the top 5 merchants in the selected period and amount range."
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
        index="merchant"
        categories={["totalAmount"]}
        showLegend={false}
        colors={["orange"]}
        yAxisWidth={120}
        valueFormatter={valueFormatter}
        className="mt-6 h-48"
        layout="vertical"
        barCategoryGap="6%"
      />
    </div>
  )
}
