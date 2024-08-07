import React, { useMemo, useState } from "react"
import { useQueryState } from "nuqs"
import { Label } from "@/components/Label"
import { Slider } from "@/components/Slider"
import { transactions } from "@/data/transactions"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover"
import { Button } from "@/components/Button"

const formatDollar = (amount: number) => {
  return `$${amount.toLocaleString("en-US", { maximumFractionDigits: 0 })}`
}

const presetOptions = [
  { label: "Below 1000", min: 0, max: 1000 },
  { label: "Between 1001 and 4000", min: 1001, max: 4000 },
  { label: "Between 4001 and 7000", min: 4001, max: 7000 },
  { label: "Between 7001 and 9999", min: 7001, max: 9999 },
  { label: "Above 10000", min: 10000, max: Infinity },
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
      <Label>Transaction Amount:</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="tabular-nums block font-normal">
            {formatDollar(min)} - {formatDollar(max)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="z-50 p-4 w-72" align="end">
          <div className="flex h-12 items-end space-x-0.5">
            {distributionData.map((bin, index) => (
              <div
                key={index}
                className={`w-full rounded-sm ${bin.isInRange ? "bg-blue-500" : "bg-gray-200"} transition-all`}
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
            <p className="text-sm font-medium">Popular ranges:</p>
            {presetOptions.map((option) => (
              <Button
                key={option.label}
                variant="secondary"
                className="w-full justify-start"
                onClick={() => handlePresetClick(option.min, option.max)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { AmountSlider }