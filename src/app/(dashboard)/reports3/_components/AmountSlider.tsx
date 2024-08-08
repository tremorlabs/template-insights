import React, { useMemo, useState } from "react"
import { useQueryState } from "nuqs"
import { Label } from "@/components/Label"
import { Slider } from "@/components/Slider"
import { transactions } from "@/data/transactions"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { CornerDownRight } from 'lucide-react';

const formatDollar = (amount: number) => {
  return `$${amount.toLocaleString("en-US", { maximumFractionDigits: 0 })}`
}

export const conditions = [
  {
    value: "is-equal-to",
    label: "is equal to",
  },
  {
    value: "is-between",
    label: "is between",
  },
  {
    value: "is-greater-than",
    label: "is greater than",
  },
  {
    value: "is-less-than",
    label: "is less than",
  },
]

const presetOptions = [
  { label: "Below $1,000", min: 0, max: 1000 },
  { label: "Between $1,001 and $4,000", min: 1001, max: 4000 },
  { label: "Between $4,001 and $7,000", min: 4001, max: 7000 },
]

function AmountSlider() {
  const [minAmount, maxAmount] = useMemo(() => {
    const amounts = transactions.map((t) => t.amount)
    return [Math.floor(Math.min(...amounts)), Math.ceil(Math.max(...amounts))]
  }, [])

  const [range, setRange] = useQueryState("amount_range", {
    defaultValue: `${minAmount}-${maxAmount}`,
    parse: (value) => {
      try {
        const [min, max] = value.split("-").map(Number)
        if (isNaN(min) || isNaN(max)) {
          throw new Error("Invalid range values")
        }
        return `${Math.max(min, minAmount)}-${Math.min(max, maxAmount)}`
      } catch (error) {
        console.error("Error parsing amount range:", error)
        return `${minAmount}-${maxAmount}`
      }
    },
    serialize: (value) => value,
  })

  const [min, max] = useMemo(() => {
    try {
      return range.split("-").map(Number)
    } catch (error) {
      console.error("Error parsing range:", error)
      return [minAmount, maxAmount]
    }
  }, [range, minAmount, maxAmount])

  const [localMin, setLocalMin] = useState(min)
  const [localMax, setLocalMax] = useState(max)

  const handleValueChange = (value: number[]) => {
    setLocalMin(value[0])
    setLocalMax(value[1])
  }

  const handleValueCommit = (value: number[]) => {
    setRange(`${value[0]}-${value[1]}`)
  }

  const handlePresetClick = (min: number, max: number) => {
    const adjustedMin = Math.max(min, minAmount)
    const adjustedMax = Math.min(max, maxAmount)
    setLocalMin(adjustedMin)
    setLocalMax(adjustedMax)
    setRange(`${adjustedMin}-${adjustedMax}`)
  }

  const distributionData = useMemo(() => {
    const numBins = 30
    const binSize = (maxAmount - minAmount) / numBins
    const bins = Array(numBins).fill(0)
    transactions.forEach((t) => {
      const binIndex = Math.min(
        Math.floor((t.amount - minAmount) / binSize),
        numBins - 1,
      )
      bins[binIndex]++
    })
    const maxCount = Math.max(...bins)
    return bins.map((count, index) => ({
      height: (count / maxCount) * 100,
      isInRange:
        minAmount + index * binSize >= localMin &&
        minAmount + (index + 1) * binSize <= localMax,
    }))
  }, [minAmount, maxAmount, localMin, localMax])

  return (
    <div className="">
      <Label className="font-medium">Transaction Amount</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="tabular-nums text-left block font-normal w-full md:w-36 mt-2 dark:bg-[#090E1A] hover:dark:bg-gray-950/50">
            {formatDollar(min)} - {formatDollar(max)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="z-50 p-4 w-72" align="end">
          <div className="flex h-12 items-end space-x-0.5">
            {distributionData.map((bin, index) => (
              <div
                key={index}
                className={`w-full rounded-sm ${bin.isInRange ? "bg-blue-500 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-800"} transition-all`}
                style={{ height: `${bin.height}%` }}
              />
            ))}
          </div>
          <div className="space-y-4 mt-4">
            <Slider
              minStepsBetweenThumbs={10}
              min={minAmount}
              max={maxAmount}
              step={50}
              value={[localMin, localMax]}
              onValueChange={handleValueChange}
              onValueCommit={handleValueCommit}
            />
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">Popular ranges:</p>
            {presetOptions.map((option) => (
              <Button
                key={option.label}
                variant="secondary"
                className="w-full justify-start dark:bg-gray-950"
                onClick={() => handlePresetClick(option.min, option.max)}
              >
                {option.label}
              </Button>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">Custom amount:</p>
            <Select
            // value={(selectedValues as ConditionFilter)?.condition}
            // onValueChange={(value) => {
            //   setSelectedValues((prev) => {
            //     return {
            //       condition: value,
            //       value: [
            //         value !== "" ? (prev as ConditionFilter)?.value?.[0] : "",
            //         "",
            //       ],
            //     }
            //   })
            // }}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                {conditions?.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* @SEV: initial state disabled */}

            <div className="flex w-full items-center gap-2">
              <CornerDownRight
                className="size-4 shrink-0 text-gray-500"
                aria-hidden="true"
              />
              <Input
                // disabled={!(selectedValues as ConditionFilter)?.condition}
                type="number"
                placeholder="$0"
              // value={(selectedValues as ConditionFilter)?.value?.[0]}
              // onChange={(e) => {
              //   setSelectedValues((prev) => {
              //     return {
              //       condition: (prev as ConditionFilter)?.condition,
              //       value: [
              //         e.target.value,
              //         isBetween ? (prev as ConditionFilter)?.value?.[1] : "",
              //       ],
              //     }
              //   })
              // }}
              />
              {/* {(selectedValues as ConditionFilter)?.condition ===
                "is-between" && ( */}
              <>
                <span className="text-xs font-medium text-gray-500">and</span>
                <Input
                  // disabled={!(selectedValues as ConditionFilter)?.condition}
                  type="number"
                  placeholder="$0"
                // value={(selectedValues as ConditionFilter)?.value?.[1]}
                // onChange={(e) => {
                //   setSelectedValues((prev) => {
                //     return {
                //       condition: (prev as ConditionFilter)?.condition,
                //       value: [
                //         (prev as ConditionFilter)?.value?.[0],
                //         e.target.value,
                //       ],
                //     }
                //   })
                // }}
                />
              </>
            </div>

          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { AmountSlider }