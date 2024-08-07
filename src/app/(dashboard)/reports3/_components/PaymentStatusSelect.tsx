import React from "react"
import { useQueryState } from "nuqs"
import { payment_statuses } from "@/data/schema"
import { Label } from "@/components/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"

const DEFAULT_STATUS = "all"

const PaymentStatusSelect = () => {
  const [status, setStatus] = useQueryState("payment_status", {
    defaultValue: DEFAULT_STATUS,
    parse: (value) =>
      [DEFAULT_STATUS, ...payment_statuses.map(s => s.value)].includes(value)
        ? value
        : DEFAULT_STATUS,
  })

  const handleValueChange = (value: string) => {
    setStatus(value)
  }

  return (
    <div>
      <Label>Payment Status:</Label>
      <Select value={status} onValueChange={handleValueChange}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem key="all" value="all">
            All
          </SelectItem>
          {payment_statuses.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default PaymentStatusSelect