"use client"

import React from "react"
import { Label } from "@/components/Label"
import { Button } from "@/components/Button"
import { BarChart } from "@/components/BarChart"
import { Checkbox } from "@/components/Checkbox"
import { DateRangePicker, DateRange } from "@/components/DatePicker"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/Select"

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


const presets = [
    {
        label: "Cohort Jan - Mar 23",
        dateRange: {
            from: new Date(),
            to: new Date(),
        },
    },
    {
        label: "Cohort Mar - Aug 23",
        dateRange: {
            from: new Date(new Date().setDate(new Date().getDate() - 7)),
            to: new Date(),
        },
    },
    {
        label: "Cohort Sep - Dec 23",
        dateRange: {
            from: new Date(new Date().setDate(new Date().getDate() - 60)),
            to: new Date(),
        },
    },
    {
        label: "Cohort May - Jun 24",
        dateRange: {
            from: new Date(new Date().setDate(new Date().getDate() - 30)),
            to: new Date(),
        },
    },
]

const tabledata = [
    {
        id: 1,
        name: "1. Assigned Leads",
        Cohort1: "100%",
        Cohort2: "100%",
        Cohort3: "100%",
    },
    {
        id: 2,
        name: "2. Working",
        Cohort1: "99%",
        Cohort2: "81%",
        Cohort3: "80%",
    },
    {
        id: 3,
        name: "3. Intro booked",
        Cohort1: "92%",
        Cohort2: "80%",
        Cohort3: "70%",
    },
    {
        id: 4,
        name: "4. Intro completed",
        Cohort1: "22%",
        Cohort2: "41%",
        Cohort3: "61%",
    },
]

const chartdata = [
    {
        date: "1. Assigned leads",
        "Cohort 1": 100,
        "Cohort 2": 100,
        "Cohort 3": 100,
    },
    {
        date: "2. Working",
        "Cohort 1": 90,
        "Cohort 2": 67,
        "Cohort 3": 61,
    },
    {
        date: "3. Intro booked",
        "Cohort 1": 87,
        "Cohort 2": 61,
        "Cohort 3": 59,
    },
    {
        date: "4. Intro completed",
        "Cohort 1": 71,
        "Cohort 2": 5,
        "Cohort 3": 45,
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
                            <Label className="font-medium text-sm">Define cohort</Label>
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
            </div>
            <BarChart
                className="mt-6 h-80 w-full"
                data={chartdata}
                index="date"
                categories={["Cohort 1", "Cohort 2", "Cohort 3"]}
                barCategoryGap="25%"
                yAxisWidth={40}
                valueFormatter={(number: number) =>
                    `${Intl.NumberFormat("us").format(number).toString()}%`
                }
                onValueChange={(v) => console.log(v)}
            />
        </div>
    )
}