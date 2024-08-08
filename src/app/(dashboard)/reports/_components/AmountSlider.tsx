import React, { useMemo, useState } from "react"
import { useQueryState } from "nuqs"
import { Label } from "@/components/Label"
import { Slider } from "@/components/Slider"
import { transactions } from "@/data/transactions"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"

const formatDollar = (amount: number) => {
  return `$${amount.toLocaleString("en-US", { maximumFractionDigits: 0 })}`
}

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

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.max(Number(e.target.value), minAmount)
    if (newMin >= localMax) {
      setLocalMax(newMin + 50)
    }
    setLocalMin(newMin)
    setRange(`${newMin}-${localMax}`)
  }

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.min(Number(e.target.value), maxAmount)
    if (newMax <= localMin) {
      setLocalMin(minAmount)
    }
    setLocalMax(newMax)
    setRange(`${localMin}-${newMax}`)
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
    <div>
      <Label className="font-medium">Transaction Amount</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="secondary"
            className="mt-2 block w-full text-left font-normal tabular-nums md:w-36 dark:bg-[#090E1A] hover:dark:bg-gray-950/50"
          >
            {formatDollar(localMin)} - {formatDollar(localMax)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="z-50 w-72 p-4" align="end">
          <div className="flex h-12 items-end space-x-0.5">
            {distributionData.map((bin, index) => (
              <div
                key={index}
                className={`w-full rounded-sm ${bin.isInRange ? "bg-blue-500 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-800"} transition-all`}
                style={{ height: `${bin.height}%` }}
              />
            ))}
          </div>
          <div className="mt-4 space-y-4">
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
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Popular ranges:
            </p>
            {presetOptions.map((option) => (
              <Button
                key={option.label}
                variant="secondary"
                className="w-full justify-start font-normal dark:bg-gray-950"
                onClick={() => handlePresetClick(option.min, option.max)}
              >
                {option.label}
              </Button>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Custom range:
            </p>
            <div className="flex w-full items-center gap-2">
              <Input
                name="Minimum Amount"
                type="number"
                step={50}
                placeholder={`$${minAmount}`}
                value={localMin}
                onChange={handleMinInputChange}
                enableStepper={false} // has to be false because of URL change rate limits
              />
              <>
                <span className="text-xs font-medium text-gray-500">–</span>
                <Input
                  name="Maximum Amount"
                  type="number"
                  step={50}
                  placeholder={`$${maxAmount}`}
                  value={localMax}
                  onChange={handleMaxInputChange}
                  enableStepper={false} // has to be false because of URL change rate limits
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
