"use client"
import React, { useState, useEffect } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { RadioCardGroup, RadioCardItem } from "@/components/RadioCardGroup"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup"
import { Slider } from "@/components/Slider"
import { Card } from "@/components/Card"
import { Button } from "@/components/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Region = {
  value: string
  label: string
  multiplier: number
}

type CloudProviderRegions = {
  aws: Region[]
  azure: Region[]
}

const regionOptions: CloudProviderRegions = {
  aws: [
    { value: "us-east-2", label: "🇺🇸 Ohio (us-east-2)", multiplier: 1.0 },
    {
      value: "us-east-1",
      label: "🇺🇸 N. Virginia (us-east-1)",
      multiplier: 1.1,
    },
    { value: "us-west-2", label: "🇺🇸 Oregon (us-west-2)", multiplier: 1.0 },
    {
      value: "eu-central-1",
      label: "🇩🇪 Frankfurt (eu-central-1)",
      multiplier: 1.2,
    },
    { value: "eu-west-1", label: "🇮🇪 Ireland (eu-west-1)", multiplier: 1.2 },
    { value: "eu-west-2", label: "🇬🇧 London (eu-west-2)", multiplier: 1.3 },
    {
      value: "ap-northeast-1",
      label: "🇯🇵 Tokyo (ap-northeast-1)",
      multiplier: 1.4,
    },
    { value: "ap-south-1", label: "🇮🇳 Mumbai (ap-south-1)", multiplier: 0.9 },
    {
      value: "ap-southeast-1",
      label: "🇸🇬 Singapore (ap-southeast-1)",
      multiplier: 1.3,
    },
    {
      value: "ap-southeast-2",
      label: "🇦🇺 Sydney (ap-southeast-2)",
      multiplier: 1.3,
    },
    { value: "eu-west-3", label: "🇫🇷 Paris (eu-west-3)", multiplier: 1.2 },
    {
      value: "ap-northeast-2",
      label: "🇰🇷 Seoul (ap-northeast-2)",
      multiplier: 1.4,
    },
    { value: "sa-east-1", label: "🇧🇷 São Paulo (sa-east-1)", multiplier: 1.5 },
    {
      value: "ca-central-1",
      label: "🇨🇦 Montreal (ca-central-1)",
      multiplier: 1.1,
    },
  ],
  azure: [
    { value: "eastus", label: "🇺🇸 East US (eastus)", multiplier: 1.0 },
    { value: "eastus2", label: "🇺🇸 East US 2 (eastus2)", multiplier: 1.1 },
    {
      value: "southcentralus",
      label: "🇺🇸 South Central US (southcentralus)",
      multiplier: 1.2,
    },
    { value: "westus2", label: "🇺🇸 West US 2 (westus2)", multiplier: 1.0 },
    {
      value: "germanywestcentral",
      label: "🇩🇪 Germany West Central (germanywestcentral)",
      multiplier: 1.3,
    },
    {
      value: "switzerlandnorth",
      label: "🇨🇭 Switzerland North (switzerlandnorth)",
      multiplier: 1.4,
    },
  ],
}

export default function PricingCalculator() {
  const [cloudProvider, setCloudProvider] = useState<"aws" | "azure">("aws")
  const [region, setRegion] = useState(regionOptions.aws[0].value)
  const [activeHours, setActiveHours] = useState([6])
  const [storageVolume, setStorageVolume] = useState(6)
  const [compression, setCompression] = useState("false")
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  useEffect(() => {
    if (regionOptions[cloudProvider].length > 0) {
      setRegion(regionOptions[cloudProvider][0].value)
    }
  }, [cloudProvider])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      console.log("Form submitted")
      router.push("/reports")
    }, 1200)
  }

  const calculatePrice = () => {
    const basePrices = {
      aws: 0.023,
      azure: 0.025,
    }

    const activeHourMultiplier = 0.05
    const compressionMultiplier = compression === "true" ? 0.7 : 1.0

    const basePrice = basePrices[cloudProvider]
    const selectedRegion = regionOptions[cloudProvider].find(
      (r) => r.value === region,
    )
    const regionMultiplier = selectedRegion?.multiplier || 1.0
    const storagePrice =
      basePrice * storageVolume * regionMultiplier * compressionMultiplier
    const activeHoursPrice = activeHours[0] * activeHourMultiplier

    const totalPricePerDay = storagePrice + activeHoursPrice
    const totalPricePerMonth = totalPricePerDay * 30

    const priceRangeLow = (totalPricePerMonth * 0.8 * 10).toFixed(0)
    const priceRangeHigh = (totalPricePerMonth * 1.2 * 10).toFixed(0)

    return `${priceRangeLow} - ${priceRangeHigh} USD`
  }

  return (
    <main className="mx-auto p-4">
      <div
        style={{ animationDuration: "500ms" }}
        className="animate-revealBottom"
      >
        <h1 className="text-xl font-semibold text-gray-900">
          Create a new compute cluster
        </h1>
        <p className="mt-6 text-gray-700 sm:text-sm">
          You have full control over the resources provisioned.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex flex-col gap-6">
          <fieldset
            className="animate-revealBottom space-y-2"
            style={{
              animationDuration: "500ms",
              animationDelay: `200ms`,
              animationFillMode: "backwards",
            }}
          >
            <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Cloud provider
            </legend>
            <RadioCardGroup
              id="cloud-provider"
              value={cloudProvider}
              onValueChange={(value) =>
                setCloudProvider(value as "aws" | "azure")
              }
              className="mt-2 grid grid-cols-1 gap-4 text-sm md:grid-cols-2"
            >
              {Object.keys(regionOptions).map((provider) => (
                <RadioCardItem key={provider} value={provider}>
                  <div>
                    <span className="font-semibold leading-6">
                      {provider.toUpperCase()}
                    </span>
                    <p className="mt-1 text-xs text-gray-500">
                      {
                        regionOptions[provider as keyof typeof regionOptions]
                          .length
                      }{" "}
                      regions available
                    </p>
                  </div>
                </RadioCardItem>
              ))}
            </RadioCardGroup>
          </fieldset>

          <fieldset
            className="animate-revealBottom flex items-start gap-10"
            style={{
              animationDuration: "500ms",
              animationDelay: `400ms`,
              animationFillMode: "backwards",
            }}
          >
            <div className="space-y-2">
              <Label
                className="text-sm font-medium text-gray-900 dark:text-gray-50"
                htmlFor="storage"
              >
                Storage (GB)
              </Label>
              <Input
                id="storage"
                type="number"
                min={6}
                max={128}
                value={storageVolume}
                onChange={(e) => setStorageVolume(Number(e.target.value))}
              />
            </div>
            <fieldset className="space-y-2">
              <legend className="pt-0.5 text-sm font-medium text-gray-900 dark:text-gray-50">
                Would you like to auto compress your data?
              </legend>
              <RadioGroup
                value={compression}
                onValueChange={(value) => {
                  setCompression(value)
                }}
                className="flex gap-6 pt-3"
              >
                <div className="flex items-center gap-x-3">
                  <RadioGroupItem value="true" id="radio_61" />
                  <Label htmlFor="radio_61">Yes</Label>
                </div>
                <div className="flex items-center gap-x-3">
                  <RadioGroupItem value="false" id="radio_62" />
                  <Label htmlFor="radio_62">No</Label>
                </div>
              </RadioGroup>
            </fieldset>
          </fieldset>

          <fieldset
            className="animate-revealBottom space-y-2"
            style={{
              animationDuration: "500ms",
              animationDelay: `600ms`,
              animationFillMode: "backwards",
            }}
          >
            <Label
              className="text-sm font-medium text-gray-900 dark:text-gray-50"
              htmlFor="region"
            >
              Region
            </Label>
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger id="region" className="w-full">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regionOptions[cloudProvider].map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <span className="flex items-center gap-x-2">
                      {option.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </fieldset>

          <fieldset
            className="animate-revealBottom space-y-2"
            style={{
              animationDuration: "500ms",
              animationDelay: `800ms`,
              animationFillMode: "backwards",
            }}
          >
            <Label
              className="text-sm font-medium text-gray-900 dark:text-gray-50"
              htmlFor="hours"
            >
              Active hours per day
            </Label>

            <div className="flex flex-nowrap gap-4">
              <Slider
                value={activeHours}
                onValueChange={setActiveHours}
                id="hours"
                defaultValue={[8]}
                max={24}
                step={1}
              />
              <div className="flex h-7 w-10 items-center justify-center rounded bg-blue-500 text-white">
                <span className="tabular-nums">{activeHours}</span>
              </div>
            </div>
          </fieldset>

          <Card
            className="animate-revealBottom mt-6 space-y-1"
            style={{
              animationDuration: "500ms",
              animationDelay: `1000ms`,
              animationFillMode: "backwards",
            }}
          >
            <p className="text-gray-700 sm:text-sm">Estimated monthly cost</p>
            <p className="text-2xl font-medium text-gray-900">
              {calculatePrice()}
            </p>
          </Card>

          <div className="mt-6 flex justify-between">
            <Button type="button" variant="ghost" asChild>
              <Link href="/onboarding/employees">Back</Link>
            </Button>
            <Button
              type="submit"
              disabled={
                !cloudProvider ||
                !region ||
                !activeHours ||
                !storageVolume ||
                !compression ||
                loading
              }
              isLoading={loading}
            >
              Continue
            </Button>
          </div>
        </div>
      </form>
    </main>
  )
}
