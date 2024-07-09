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

import { RiDraggable, RiIndeterminateCircleLine } from "@remixicon/react"

const people = [
    {
        value: "emily-ross",
        label: "Emily Ross",
    },
    {
        value: "mike-dudler",
        label: "Mike Dudler",
    },
    {
        value: "zhan-wathan",
        label: "Zhan Wathan",
    }
]

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

const data = [
    {
        date: "Jan 23",
        Revenue: 2338,
    },
    {
        date: "Feb 23",
        Revenue: 2103,
    },
    {
        date: "Mar 23",
        Revenue: 2194,
    },
    {
        date: "Apr 23",
        Revenue: 2108,
    },
    {
        date: "May 23",
        Revenue: 1812,
    },
    {
        date: "Jun 23",
        Revenue: 1726,
    },
    {
        date: "Jul 23",
        Revenue: 1982,
    },
    {
        date: "Aug 23",
        Revenue: 2012,
    },
    {
        date: "Sep 23",
        Revenue: 2342,
    },
    {
        date: "Oct 23",
        Revenue: 2473,
    },
    {
        date: "Nov 23",
        Revenue: 3848,
    },
    {
        date: "Dec 23",
        Revenue: 3736,
    },
    {
        date: "Jan 24",
        Revenue: 3919,
    },
    {
        date: "Feb 24",
        Revenue: 4172,
    },
    {
        date: "Mar 24",
        Revenue: 4901,
    },
    {
        date: "Apr 24",
        Revenue: 5403,
    },
]


export default function Overview() {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
        undefined,
    )
    return (

        <div className="min-h-screen">
            <h1 className="font-semibold text-gray-900 dark:text-gray-50">Overview</h1>
            <div className="mt-4 p-4 rounded-md bg-gray-50 ring-1 ring-inset ring-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-6 lg:gap-x-20">
                    <div className="flex flex-wrap items-center gap-y-4 gap-x-4">
                        <div>
                            <Label className="font-medium text-sm">Time period</Label>
                            <DateRangePicker
                                // presets={presets}
                                value={dateRange}
                                defaultValue={{
                                    from: new Date(new Date().setDate(new Date().getDate() - 30)),
                                    to: new Date(),
                                }}
                                onChange={setDateRange}
                                enableYearNavigation={false}
                                className="w-fit mt-2"
                                align="start"
                            />
                        </div>
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
                            <Label className="font-medium">Market</Label>
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
                            <span className="font-medium text-sm text-gray-900">Source</span>
                            <div className="mt-2 md:h-9 flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2.5">
                                    <Checkbox id="marketing-sourced" name="marketing-sourced" defaultChecked />
                                    <Label htmlFor="marketing-sourced">Marketing</Label>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Checkbox id="sales-sourced" name="sales-sourced" defaultChecked />
                                    <Label htmlFor="sales-sourced">Sales</Label>
                                </div>
                                <div className="h-8 flex items-center gap-2.5">
                                    <Checkbox id="partnership-sourced" name="partnership-sourced" />
                                    <Label htmlFor="partnership-sourced">Partnership</Label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className="whitespace-nowrap">Add as new cohort</Button>
                </div>
                <Divider className="my-4" />
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <button>
                            <RiDraggable className="size-5 text-gray-400 shrink-0 -mr-2" aria-hidden="true" />
                        </button>
                        <div className="pl-2.5 pr-1.5 py-1.5 bg-white text-xs inline-flex items-center gap-1.5 rounded-md ring-1 ring-inset ring-gray-300 shadow-sm">
                            <span className="size-2 bg-blue-500 rounded-sm" aria-hidden="true" />
                            Cohort 1
                            <span className="font-medium hidden sm:block">Filtered by</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">Emily R.</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">Jan - Jun 24</span>
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
                            Cohort 2
                            <span className="font-medium hidden sm:block">Filtered by</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">EU-East</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">Jan - Jun 24</span>
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
                            Cohort 3
                            <span className="font-medium hidden sm:block">Filtered by</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">EU-West</span>
                            <span className="px-1.5 py-1 rounded-sm bg-blue-50 text-blue-600 font-medium">Jan - Jun 24</span>
                        </div>
                        <button>
                            <RiIndeterminateCircleLine className="size-4 text-gray-400 shrink-0" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
            <BarChart
                className="mt-6 h-80 w-full"
                data={data}
                index="date"
                categories={["Revenue"]}
                yAxisWidth={60}
                valueFormatter={(number: number) =>
                    `$${Intl.NumberFormat("us").format(number).toString()}`
                }
                onValueChange={(v) => console.log(v)}
            />
        </div>
    )
}