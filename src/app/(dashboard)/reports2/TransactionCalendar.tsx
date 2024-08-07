"use client"
import React, { useEffect, useState } from "react"
import ActivityCalendar, { type Props } from "react-activity-calendar"
import { Tooltip } from "@/components/Tooltip"
import { dailyTransactions } from "@/data/dailyTransactions"
import type { DailyTransaction } from "@/data/schema"

type TransactionCalendarProps = {
  selectedRange: string
}

const filterTransactionsByDateRange = (
  data: DailyTransaction[],
  range: string,
): DailyTransaction[] => {
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

const TransactionCalendar: React.FC<TransactionCalendarProps> = ({
  selectedRange,
}) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState<DailyTransaction[]>(dailyTransactions)

  useEffect(() => {
    if (selectedRange === "all") {
      setFilteredTransactions(dailyTransactions)
    } else {
      setFilteredTransactions(
        filterTransactionsByDateRange(dailyTransactions, selectedRange),
      )
    }
  }, [selectedRange])

  return (
    <ActivityCalendar
      blockMargin={4}
      blockRadius={2}
      blockSize={12}
      colorScheme="light"
      data={filteredTransactions}
      renderBlock={(block, activity) => (
        <Tooltip
          sideOffset={2}
          triggerAsChild
          delayDuration={50}
          className="z-50 max-w-sm"
          content={`${activity.count} fraud attempts on ${activity.date}`}
        >
          {block}
        </Tooltip>
      )}
      theme={{
        light: ["#fffbeb", "#fde68a", "#fbbf24", "#d97706", "#92400e"],
        dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
      }}
      fontSize={14}
      maxLevel={4}
      weekStart={0}
      hideColorLegend
      hideTotalCount
    />
  )
}

export default TransactionCalendar
