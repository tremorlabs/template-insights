import React from "react"

import ActivityCalendar, { type Props } from "react-activity-calendar"
import { Tooltip } from "@/components/Tooltip"
import { dailyTransactions } from "@/data/dailyTransactions"
export default function TransactionCalendar() {
  return (
    <ActivityCalendar
      blockMargin={4}
      blockRadius={2}
      blockSize={12}
      colorScheme="light"
      data={dailyTransactions}
      renderBlock={(block, activity) => (
        <Tooltip sideOffset={2} triggerAsChild delayDuration={50} className="max-w-sm z-50"
          content={`${activity.count} fraud attempts on ${activity.date}`}
        >
          {block}
        </Tooltip>
      )}
      theme={{
        light: ['#fffbeb', '#fde68a', '#fbbf24', '#d97706', '#92400e'],
        dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
      }}
      fontSize={14}
      maxLevel={4}
      weekStart={0}
      hideColorLegend hideTotalCount
    />
  )
}
