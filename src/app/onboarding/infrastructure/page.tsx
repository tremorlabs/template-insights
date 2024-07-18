"use client"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/Button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { Switch } from "@/components/Switch"
import {
  RadioCardGroup,
  RadioCardIndicator,
  RadioCardItem,
} from "@/components/RadioCardGroup"
import { Label } from "@/components/Label"

const PricingCalculator = () => {
  const [cloudProvider, setCloudProvider] = useState<"aws" | "azure">("aws")
  const [region, setRegion] = useState("")
  const [activeHours, setActiveHours] = useState(6)
  const [storageVolume, setStorageVolume] = useState(9999)
  const [isCompressed, setIsCompressed] = useState(false)
  const [computeSize, setComputeSize] = useState("3600 GiB RAM, 960 vCPU")

  const calculatePrice = () => {
    // This is a placeholder calculation
    return 51399325
  }

  type Region = {
    value: string
    label: string
  }

  type CloudProviderRegions = {
    aws: Region[]
    azure: Region[]
  }

  const regionOptions: CloudProviderRegions = {
    aws: [
      { value: "us-east-2", label: "🇺🇸 Ohio (us-east-2)" },
      { value: "us-east-1", label: "🇺🇸 N. Virginia (us-east-1)" },
      { value: "us-west-2", label: "🇺🇸 Oregon (us-west-2)" },
      { value: "eu-central-1", label: "🇩🇪 Frankfurt (eu-central-1)" },
      { value: "eu-west-1", label: "🇮🇪 Ireland (eu-west-1)" },
      { value: "eu-west-2", label: "🇬🇧 London (eu-west-2)" },
      { value: "ap-northeast-1", label: "🇯🇵 Tokyo (ap-northeast-1)" },
      { value: "ap-south-1", label: "🇮🇳 Mumbai (ap-south-1)" },
      { value: "ap-southeast-1", label: "🇸🇬 Singapore (ap-southeast-1)" },
      { value: "ap-southeast-2", label: "🇦🇺 Sydney (ap-southeast-2)" },
      { value: "eu-west-3", label: "🇫🇷 Paris (eu-west-3)" },
      { value: "ap-northeast-2", label: "🇰🇷 Seoul (ap-northeast-2)" },
      { value: "sa-east-1", label: "🇧🇷 São Paulo (sa-east-1)" },
      { value: "ca-central-1", label: "🇨🇦 Montreal (ca-central-1)" },
    ],
    azure: [
      { value: "eastus", label: "🇺🇸 East US (eastus)" },
      { value: "eastus2", label: "🇺🇸 East US 2 (eastus2)" },
      {
        value: "southcentralus",
        label: "🇺🇸 South Central US (southcentralus)",
      },
      { value: "westus2", label: "🇺🇸 West US 2 (westus2)" },
      {
        value: "germanywestcentral",
        label: "🇩🇪 Germany West Central (germanywestcentral)",
      },
      {
        value: "switzerlandnorth",
        label: "🇨🇭 Switzerland North (switzerlandnorth)",
      },
    ],
  }

  const computeSizeOptions = [
    { value: "3600 GiB RAM, 960 vCPU", label: "🖥️ 3600 GiB RAM, 960 vCPU" },
    { value: "7200 GiB RAM, 1920 vCPU", label: "🖥️ 7200 GiB RAM, 1920 vCPU" },
    { value: "14400 GiB RAM, 3840 vCPU", label: "🖥️ 14400 GiB RAM, 3840 vCPU" },
  ]

  // Set default region when cloudProvider changes
  useEffect(() => {
    if (regionOptions[cloudProvider].length > 0) {
      setRegion(regionOptions[cloudProvider][0].value)
    }
  }, [cloudProvider])

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h2 className="mb-4 mt-6 text-xl font-bold">Cloud provider</h2>
        <RadioCardGroup
          value={cloudProvider}
          onValueChange={(value) => setCloudProvider(value as "aws" | "azure")}
          className="mt-2 grid grid-cols-1 gap-4 text-sm md:grid-cols-2"
        >
          {Object.keys(regionOptions).map((provider) => (
            <RadioCardItem key={provider} value={provider}>
              <div className="flex items-start gap-3">
                <RadioCardIndicator className="mt-1" />
                <div>
                  <span className="leading-6">{provider.toUpperCase()}</span>
                  <p className="mt-1 text-xs text-gray-500">
                    {
                      regionOptions[provider as keyof typeof regionOptions]
                        .length
                    }{" "}
                    regions available
                  </p>
                </div>
              </div>
            </RadioCardItem>
          ))}
        </RadioCardGroup>

        <h2 className="mb-4 mt-6 text-xl font-bold">Region</h2>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-full">
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

        <h2 className="mb-4 mt-6 text-xl font-bold">Active hours per day</h2>
        {/* Implement slider here */}

        <h2 className="mb-4 mt-6 text-xl font-bold">Storage</h2>
        <div className="flex space-x-4">
          <input
            type="number"
            value={storageVolume}
            onChange={(e) => setStorageVolume(Number(e.target.value))}
            className="w-1/2 rounded border px-2 py-1"
          />
        </div>

        <div className="mt-4 flex items-center">
          <span className="mr-4">Is your data compressed?</span>
          <Switch
            checked={isCompressed}
            onCheckedChange={() => setIsCompressed(!isCompressed)}
          />
        </div>

        <h2 className="mb-4 mt-6 text-xl font-bold">Compute size</h2>
        <Select value={computeSize} onValueChange={setComputeSize}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select compute size" />
          </SelectTrigger>
          <SelectContent>
            {computeSizeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <span className="flex items-center gap-x-2">
                  {option.label}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg bg-blue-100 p-6">
        <h2 className="mb-2 text-3xl font-bold">Average price per month</h2>
        <div className="mb-4 text-5xl font-bold">
          ${calculatePrice().toLocaleString()}
        </div>
        <div className="mt-6">
          <div className="mb-2 flex items-center">
            <span className="mr-2">✓</span>
            <span>
              ${(calculatePrice() - 22711).toLocaleString()} for storage
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <span className="mr-2">✓</span>
            <span>$22,711 compute cost</span>
          </div>
          <div className="mb-2 flex items-center">
            <span className="mr-2">✓</span>
            <span>Includes data transfer costs</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>Includes 3 availability zones</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator
