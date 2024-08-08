import React from "react"
import { useQueryState } from "nuqs"
import { Label } from "@/components/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { DEFAULT_RANGE, RANGE_DAYS, RANGE_LABELS, RangeKey } from "./dateRanges"

const DateRangeSelect = () => {
  const [range, setRange] = useQueryState<RangeKey>("range", {
    defaultValue: DEFAULT_RANGE,
    parse: (value): RangeKey =>
      Object.keys(RANGE_DAYS).includes(value)
        ? (value as RangeKey)
        : DEFAULT_RANGE,
  })

  const handleValueChange = (value: string) => {
    setRange(value as RangeKey)
  }

  return (
    <div>
      <Label className="font-medium">Date Range</Label>
      <Select value={range} onValueChange={handleValueChange}>
        <SelectTrigger className="mt-2 w-full md:w-36">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent align="end">
          {Object.entries(RANGE_LABELS).map(([value, label]) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default DateRangeSelect
