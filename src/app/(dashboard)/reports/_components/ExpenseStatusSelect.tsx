import React from "react"
import { useQueryState } from "nuqs"
import { Label } from "@/components/Label"
import { cx } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { expense_statuses } from "@/data/schema"

const DEFAULT_STATUS = "all"

type ExpenseStatus = (typeof expense_statuses)[number]

const statusColorMap: {
  [key in ExpenseStatus["value"]]?: string
} = {
  pending: "bg-gray-500 dark:bg-gray-500",
  approved: "bg-emerald-600 dark:bg-emerald-500",
  actionRequired: "bg-rose-600 dark:bg-rose-500",
  inAudit: "bg-yellow-600 dark:bg-yellow-500",
}

const ExpenseStatusSelect: React.FC = () => {
  const [status, setStatus] = useQueryState<string>("expense_status", {
    defaultValue: DEFAULT_STATUS,
    parse: (value) =>
      [DEFAULT_STATUS, ...expense_statuses.map((s) => s.value)].includes(value)
        ? value
        : DEFAULT_STATUS,
  })

  const handleValueChange = (value: string) => {
    setStatus(value)
  }

  return (
    <div>
      <Label className="font-medium">Expense Status</Label>
      <Select value={status} onValueChange={handleValueChange}>
        <SelectTrigger className="mt-2 w-full md:w-44">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem key="all" value="all">
            All
          </SelectItem>
          {expense_statuses.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              <div className="flex items-center gap-x-2.5">
                <span
                  className={cx(
                    statusColorMap[status.value] ||
                      "bg-gray-600 dark:bg-gray-500",
                    "inline-block size-2 shrink-0 rounded-full",
                  )}
                  aria-hidden="true"
                />
                {status.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export { ExpenseStatusSelect }

