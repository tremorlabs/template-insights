"use client"
import React, { useState, useEffect, useMemo } from "react"
import { aggregatedReport } from "@/data/report"
import { BarChartVariant } from "@/components/BarChartVariant"
import { Divider } from "@/components/Divider"
import { Label } from "@/components/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { Tooltip } from "@/components/Tooltip"
import { ArrowLeftRight, InfoIcon, UserIcon } from "lucide-react"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import TransactionCalendar from "./TransactionCalendar"
import UsageLimit from "./UsageLimit"
import UsageOverview from "./UsageOverview"

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`

const dateFormatter = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  })
}

type AmountStatus = {
  amount: number
  status: string
}

type AggregatedReportItem = {
  date: string
  amounts: AmountStatus[]
}

const filterDataByDateRange = (
  data: AggregatedReportItem[],
  range: string,
): AggregatedReportItem[] => {
  const now = new Date()
  let fromDate: Date

  switch (range) {
    case "7":
      fromDate = new Date(now.setDate(now.getDate() - 7))
      break
    case "30":
      fromDate = new Date(now.setDate(now.getDate() - 30))
      break
    case "60":
      fromDate = new Date(now.setDate(now.getDate() - 60))
      break
    case "90":
      fromDate = new Date(now.setDate(now.getDate() - 90))
      break
    case "180":
      fromDate = new Date(now.setDate(now.getDate() - 180))
      break
    case "365":
      fromDate = new Date(now.setDate(now.getDate() - 365))
      break
    default:
      return data
  }

  return data.filter((item) => new Date(item.date) >= fromDate)
}

function FormattedDate() {
  const [dateString, setDateString] = useState<string>("")

  useEffect(() => {
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
    <p className="whitespace-nowrap text-sm text-gray-400">
      Last refresh: {dateString}
    </p>
  )
}

function Reports() {
  const [selectedRange, setSelectedRange] = useState<string>("60")
  const [filteredData, setFilteredData] =
    useState<AggregatedReportItem[]>(aggregatedReport)
  const scrolled = useScroll(10)

  useEffect(() => {
    if (selectedRange === "all") {
      setFilteredData(aggregatedReport)
    } else {
      setFilteredData(filterDataByDateRange(aggregatedReport, selectedRange))
    }
  }, [selectedRange])

  const totalAmount = useMemo(() => {
    return filteredData.reduce((sum, item) => {
      const totalEntry = item.amounts.find(
        (amount) => amount.status === "total",
      )
      return sum + (totalEntry ? totalEntry.amount : 0)
    }, 0)
  }, [filteredData])

  const getTotalAmount = (item: AggregatedReportItem) => {
    const totalEntry = item.amounts.find((amount) => amount.status === "total")
    return totalEntry ? totalEntry.amount : 0
  }

  const getApprovedAmount = (item: AggregatedReportItem) => {
    const approvedEntry = item.amounts.find(
      (amount) => amount.status === "approved",
    )
    return approvedEntry ? approvedEntry.amount : 0
  }

  const getBlockedAmount = (item: AggregatedReportItem) => {
    const blockedEntry = item.amounts.find(
      (amount) => amount.status === "blocked",
    )
    return blockedEntry ? blockedEntry.amount : 0
  }

  return (
    <div className="min-h-screen">
      <div
        className={cx(
          "sticky top-0 z-50 -my-6 flex items-center justify-between bg-white py-6 transition-all",
          scrolled && "border-b",
        )}
      >
        <div className="space-y-1">
          <h1 className="font-semibold text-gray-900 dark:text-gray-50">
            Reports
          </h1>
          <FormattedDate />
        </div>
        <div>
          <Label className="sr-only">Select Date Range:</Label>

          <Select value={selectedRange} onValueChange={setSelectedRange}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="7">Last 7 Days</SelectItem>
              <SelectItem value="30">Last 30 Days</SelectItem>
              <SelectItem value="60">Last 60 Days</SelectItem>
              <SelectItem value="90">Last 90 Days</SelectItem>
              <SelectItem value="180">Last 180 Days</SelectItem>
              <SelectItem value="365">Last 365 Days</SelectItem>
              <Divider className="my-1" />
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <section className="mt-6">
        <h2
          className={cx(
            "sticky top-[97px] z-40 flex items-center gap-2 bg-white py-4",
          )}
        >
          <div
            aria-hidden="true"
            className="rounded border border-blue-200 bg-blue-50 p-1.5"
          >
            <ArrowLeftRight className="size-4 text-blue-500" />
          </div>
          Transactions
        </h2>
        <div className="mt-3 space-y-12">
          <div>
            <div className="flex gap-2">
              <h1 className="text-sm text-gray-600 dark:text-gray-400">
                Total Transaction Amount
              </h1>
              <Tooltip
                side="bottom"
                content="Total amount of transactions for the selected period."
              >
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </div>
            <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
              {valueFormatter(totalAmount)}
            </p>
            <BarChartVariant
              data={filteredData.map((item) => ({
                date: item.date,
                amount: getTotalAmount(item),
              }))}
              index="date"
              categories={["amount"]}
              showLegend={false}
              colors={["blue"]}
              yAxisWidth={67}
              valueFormatter={valueFormatter}
              xValueFormatter={dateFormatter}
              className="mt-6 h-48"
            />
          </div>
          <Divider />
          <div>
            <div className="flex gap-2">
              <h1 className="text-sm text-gray-600 dark:text-gray-400">
                Total Blocked Transaction Amount
              </h1>
              <Tooltip content="Total blocked amount of transactions for the selected period.">
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </div>
            <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
              {valueFormatter(
                filteredData.reduce(
                  (sum, item) => sum + getBlockedAmount(item),
                  0,
                ),
              )}
            </p>
            <BarChartVariant
              data={filteredData.map((item) => ({
                date: item.date,
                amount: getBlockedAmount(item),
              }))}
              index="date"
              categories={["amount"]}
              showLegend={false}
              yAxisWidth={67}
              valueFormatter={valueFormatter}
              xValueFormatter={dateFormatter}
              className="mt-6 h-48"
            />
          </div>
        </div>
      </section>
      <section className="mt-6">
        <h2
          className={cx(
            "sticky top-[97px] z-40 flex items-center gap-2 bg-white py-4",
          )}
        >
          <div
            aria-hidden="true"
            className="rounded border border-orange-200 bg-orange-50 p-1.5"
          >
            <UserIcon className="size-4 text-orange-500" />
          </div>
          Customers
        </h2>
        <div className="space-y-12">
          <div>
            <div className="flex gap-2">
              <h1 className="text-sm text-gray-600 dark:text-gray-400">
                Total Transaction Amount
              </h1>
              <Tooltip content="Total amount of transactions for the selected period.">
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </div>
            <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
              {valueFormatter(totalAmount)}
            </p>
            <BarChartVariant
              data={filteredData.map((item) => ({
                date: item.date,
                amount: getTotalAmount(item),
              }))}
              index="date"
              categories={["amount"]}
              showLegend={false}
              colors={["orange"]}
              yAxisWidth={67}
              valueFormatter={valueFormatter}
              xValueFormatter={dateFormatter}
              className="mt-6 h-48"
            />
          </div>
          <Divider />
          <div>
            <div className="flex gap-2">
              <h1 className="text-sm text-gray-600 dark:text-gray-400">
                Total Blocked Transaction Amount
              </h1>
              <Tooltip content="Total blocked amount of transactions for the selected period.">
                <InfoIcon className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </div>
            <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
              {valueFormatter(
                filteredData.reduce(
                  (sum, item) => sum + getBlockedAmount(item),
                  0,
                ),
              )}
            </p>
            <BarChartVariant
              data={filteredData.map((item) => ({
                date: item.date,
                amount: getBlockedAmount(item),
              }))}
              index="date"
              categories={["amount"]}
              showLegend={false}
              colors={["orange"]}
              yAxisWidth={67}
              valueFormatter={valueFormatter}
              xValueFormatter={dateFormatter}
              className="mt-6 h-48"
            />
          </div>
        </div>
      </section>
      <section className="mt-6">
        <h2
          className={cx(
            "sticky top-[97px] z-40 flex items-center gap-2 bg-white py-4",
          )}
        >
          <div
            aria-hidden="true"
            className="rounded border border-amber-200 bg-amber-50 p-1.5"
          >
            <UserIcon className="size-4 text-amber-500" />
          </div>
          Fraud and Risk
        </h2>
        <div className="mt-6">
          <TransactionCalendar selectedRange={selectedRange} />
        </div>
      </section>
      <section className="mt-6">
        <h2
          className={cx(
            "sticky top-[97px] z-40 flex items-center gap-2 bg-white py-4",
          )}
        >
          <div
            aria-hidden="true"
            className="rounded border border-violet-200 bg-violet-50 p-1.5"
          >
            <UserIcon className="size-4 text-violet-500" />
          </div>
          Spending Limits
        </h2>
        <div className="">
          <UsageLimit />
          <UsageOverview />
        </div>
      </section>
    </div>
  )
}

export default Reports
