"use client"

import React from "react"
import { Label } from "@/components/Label"
import { Button } from "@/components/Button"
import { BarChart } from "@/components/BarChart"
import { Checkbox } from "@/components/Checkbox"
import { Divider } from "@/components/Divider"
import { DateRangePicker, DateRange } from "@/components/DatePicker"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/Select"
import { categories } from "@/data/data"

import { RiDraggable, RiIndeterminateCircleLine } from "@remixicon/react"

const market = [
    {
        value: "eu-west",
        label: "EU-West",
    },
    {
        value: "eu-east",
        label: "EU-East",
    },
    {
        value: "north-america",
        label: "North America",
    }
]

const team = [
    {
        value: "team-a",
        label: "Team A",
    },
    {
        value: "team-b",
        label: "Team B",
    },
    {
        value: "team-c",
        label: "Team C",
    }
]

const chartdata = [
    {
        date: "Jan, 23",
        "Category 1": 100,
        "Category 2": 100,
        "Category 3": 100,
    },
    {
        date: "Feb, 23",
        "Category 1": 90,
        "Category 2": 67,
        "Category 3": 61,
    },
    {
        date: "Mar, 23",
        "Category 1": 87,
        "Category 2": 61,
        "Category 3": 59,
    },
    {
        date: "Apr, 23",
        "Category 1": 71,
        "Category 2": 5,
        "Category 3": 45,
    },
]


export default function Overview() {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
        undefined,
    )
    return (

        <div className="min-h-screen">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-900 dark:text-gray-50">Overview</h1>
                <DateRangePicker
                    value={dateRange}
                    defaultValue={{
                        from: new Date(new Date().setDate(new Date().getDate() - 30)),
                        to: new Date(),
                    }}
                    onChange={setDateRange}
                    enableYearNavigation={false}
                    className="w-fit"
                    align="end"
                />
            </div>
            <div className="mt-6 p-4 rounded-md bg-gray-50 ring-1 ring-inset ring-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-6 md:gap-x-20">
                    <div className="flex flex-wrap items-center gap-4">
                        <div>
                            <Label className="font-medium">Team</Label>
                            <Select defaultValue="team-a">
                                <SelectTrigger className="mt-2">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {team.map((item) => (
                                        <SelectItem key={item.value} value={item.value}>
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="font-medium">Region</Label>
                            <Select defaultValue="eu-west">
                                <SelectTrigger className="mt-2">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {market.map((item) => (
                                        <SelectItem key={item.value} value={item.value}>
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="font-medium">Merchant Category</Label>
                            <Select defaultValue={categories[1]}>
                                <SelectTrigger className="mt-2 w-44">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((item) => (
                                        <SelectItem key={item} value={item}>
                                            {item}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <span className="font-medium text-sm text-gray-900">Type</span>
                            <div className="mt-2 md:h-9 flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2.5">
                                    <Checkbox id="recurring" name="recurring" defaultChecked />
                                    <Label htmlFor="recurring">Recurring</Label>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Checkbox id="non-recurring" name="non-recurring" />
                                    <Label htmlFor="non-recurring">Non-Recurring</Label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="secondary" className="whitespace-nowrap w-full">Reset all</Button>
                        <Button className="whitespace-nowrap w-full">Add filter selection</Button>
                    </div>
                </div>
                <Divider className="my-4" />
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <button>
                            <RiDraggable className="size-5 text-gray-400 shrink-0 -mr-2" aria-hidden="true" />
                        </button>
                        <div className="pl-2.5 pr-1.5 py-1.5 bg-white text-xs inline-flex items-center gap-1.5 rounded-md ring-1 ring-inset ring-gray-300 shadow-sm">
                            <span className="size-2 bg-blue-500 rounded-sm" aria-hidden="true" />
                            Category 1
                            <span className="font-medium hidden sm:block">Filtered by</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">Team A</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">Marketing</span>
                        </div>
                        <button>
                            <RiIndeterminateCircleLine className="size-4 text-gray-400 shrink-0" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <button>
                            <RiDraggable className="size-5 text-gray-400 shrink-0 -mr-2" aria-hidden="true" />
                        </button>
                        <div className="pl-2.5 pr-1.5 py-1.5 bg-white text-xs inline-flex items-center gap-1.5 rounded-md ring-1 ring-inset ring-gray-300 shadow-sm">
                            <span className="size-2 bg-emerald-500 rounded-sm" aria-hidden="true" />
                            Category 2
                            <span className="font-medium hidden sm:block">Filtered by</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">Team B</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">Sales</span>
                        </div>
                        <button>
                            <RiIndeterminateCircleLine className="size-4 text-gray-400 shrink-0" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <button>
                            <RiDraggable className="size-5 text-gray-400 shrink-0 -mr-2" aria-hidden="true" />
                        </button>
                        <div className="pl-2.5 pr-1.5 py-1.5 bg-white text-xs inline-flex items-center gap-1.5 rounded-md ring-1 ring-inset ring-gray-300 shadow-sm">
                            <span className="size-2 bg-violet-500 rounded-sm" aria-hidden="true" />
                            Category 3
                            <span className="font-medium hidden sm:block">Filtered by</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">EU-West</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">Marketing, Sales</span>
                        </div>
                        <button>
                            <RiIndeterminateCircleLine className="size-4 text-gray-400 shrink-0" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
            <BarChart
                className="mt-6 h-80 w-full"
                data={chartdata}
                index="date"
                categories={["Category 1", "Category 2", "Category 3"]}
                barCategoryGap="25%"
                yAxisWidth={60}
                valueFormatter={(number: number) =>
                    `$${Intl.NumberFormat("us").format(number).toString()}`
                }
                onValueChange={(v) => console.log(v)}
            />
        </div>
    )
}