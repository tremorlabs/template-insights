"use client"

import { departments } from "@/data/data";
import { Badge } from "@/components/Badge";
import { Divider } from "@/components/Divider";
import { Label } from "@/components/Label";
import { KeywordInput } from "@/components/KeywordInput";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { X, Settings, ReceiptText, Trash2, PlusIcon, Ellipsis } from 'lucide-react';
import { cx } from "@/lib/utils";
import { Card } from "@/components/Card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/Select"
import { CategoryBar } from "@/components/CategoryBar";

const users = [
    {
        initials: "JM",
        name: "Jeff Mueller",
        email: "j.mueller@acme.com",
        permission: "All areas"
    },
    {
        initials: "RS",
        name: "Rebecca Show",
        email: "r.show@acme.com",
        permission: "Sales"
    },
    {
        initials: "MR",
        name: "Mike Ryder",
        email: "m.ryder@acme.com",
        permission: "Marketing"
    },
    {
        initials: "LS",
        name: "Lena Shine",
        email: "l.shin@acme.com",
        permission: "Sales"
    },
    {
        initials: "MS",
        name: "Manuela Stone",
        email: "m.stone@acme.com",
        permission: "IT"
    },
]

const blacklist = [
    {
        category: "Blocked transactions",
        value: "$4,653",
        description: "1,234 transctions",
        color: "bg-rose-600 dark:bg-rose-400"
    },
    {
        category: "Suspicious transactions",
        value: "$1,201",
        description: "319 transctions",
        color: "bg-rose-300 dark:bg-rose-700"
    },
    {
        category: "Successfull transactions",
        value: "$213,642",
        description: "10,546 transctions",
        color: "bg-gray-500 dark:bg-gray-500"
    },
]

const keywords = [
    {
        label: "Coffee shop",
        value: "coffee-shop"
    },
    {
        label: "Club & bar",
        value: "club-bar"
    },
    {
        label: "Sporty facility",
        value: "sports-facility"
    },
    {
        label: "Liquor",
        value: "liquor"
    },
]

// @CHRIS: add aria-labelled by in first section

export default function Audit() {
    return (
        <div>
            <section aria-labelledby="audit-rules-configuration">
                <form>
                    <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                        <div>
                            <h2
                                id="personal-information"
                                className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
                            >
                                Configure audit trails
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Enable comprehensive audit trails to track expenses, ensuring compliance and enhancing security.
                            </p>
                        </div>
                        <div className="md:col-span-2 space-y-6">
                            <Card>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">Rule condition</h3>
                                <div className="mt-6 space-y-3">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="inline-flex h-[38px] items-center text-sm text-gray-900 dark:text-gray-50 rounded-md bg-blue-50">
                                            <span className="px-4 py-2 flex items-center gap-1">
                                                <ReceiptText className="-ml-1 size-4 shrink-0 text-blue-600 dark:text-gray-500" aria-hidden="true" />
                                                <span className="ml-0.5 font-semibold text-blue-600">Every transaction</span>
                                                <span className="text-blue-500">requires</span>
                                                <span className="font-semibold text-blue-600">memo</span>
                                            </span>
                                            <span className="h-full w-px bg-white" />
                                            <button
                                                type="button"
                                                className="px-2.5 py-2 h-full group"
                                                aria-label="Remove filter condition"
                                            >
                                                <X className="-ml-0.5 size-4 text-blue-500 group-hover:text-blue-600 shrink-0" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <Button variant="secondary" className="h-[38px] gap-2">
                                            <Settings className="-ml-0.5 size-4" aria-hidden="true" />
                                            Edit condition
                                        </Button>
                                    </div>
                                    <div className="block w-fit uppercase text-xs font-medium rounded-full bg-gray-400 px-2.5 py-1 text-white">and</div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="inline-flex h-[38px] items-center text-sm rounded-md bg-blue-50">
                                            <span className="px-4 py-2 flex items-center gap-1">
                                                <ReceiptText className="-ml-1 size-4 shrink-0 text-blue-600 dark:text-gray-500" aria-hidden="true" />
                                                <span className="ml-1 font-semibold text-blue-600">Every transaction</span>
                                                <span className="text-blue-500">above</span>
                                                <span className="font-semibold text-blue-600">USD 75</span>
                                                <span className="text-blue-500">requires</span>
                                                <span className="font-semibold text-blue-600">approval</span>
                                            </span>
                                            <span className="h-full w-px bg-white" />
                                            <button
                                                type="button"
                                                className="px-2.5 py-2 h-full group"
                                                aria-label="Remove filter condition"
                                            >
                                                <X className="-ml-0.5 size-4 text-blue-500 group-hover:text-blue-600 shrink-0" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <Button variant="secondary" className="h-[38px] gap-2">
                                            <Settings className="-ml-0.5 size-4" aria-hidden="true" />
                                            Edit condition
                                        </Button>
                                    </div>
                                    <div className="block w-fit uppercase text-xs font-medium rounded-full bg-gray-400 px-2.5 py-1 text-white">and</div>
                                    <div>
                                        <div className="flex flex-wrap items-start gap-3">
                                            <div className="inline-flex h-[38px] items-center text-sm rounded-md bg-blue-50">
                                                <span className="px-4 py-2 flex items-center gap-1">
                                                    <ReceiptText className="-ml-1 size-4 shrink-0 text-blue-600 dark:text-gray-500" aria-hidden="true" />
                                                    <span className="ml-1 font-semibold text-blue-600">Every transaction</span>
                                                    <span className="text-blue-500">above</span>
                                                    <span className="font-semibold text-blue-600">USD 75</span>
                                                    <span className="text-blue-500">requires</span>
                                                    <span className="font-semibold text-blue-600">receipt</span>
                                                </span>
                                                <span className="h-full w-px bg-white" />
                                                <button
                                                    type="button"
                                                    className="px-2.5 py-2 h-full group"
                                                    aria-label="Remove filter condition"
                                                >
                                                    <X className="-ml-0.5 size-4 text-blue-500 group-hover:text-blue-600 shrink-0" aria-hidden="true" />
                                                </button>
                                            </div>
                                            <Button variant="secondary" className="h-[38px] gap-2">
                                                <Settings className="-ml-0.5 size-4" aria-hidden="true" />
                                                Edit condition
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-2 max-w-sm leading-5 text-xs text-gray-500 dark:text-gray-500">Allowed file types: .png, .jpg or .pdf</p>
                                <p className="mt-6 flex justify-end text-sm text-gray-700 dark:text-gray-300">
                                    Last edited:{' '}
                                    <time dateTime='2024-07-17T09:32' className="font-medium">7d ago</time>
                                </p>
                                <Button
                                    variant="ghost"
                                    className="absolute right-1 top-1 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-500 hover:dark:text-gray-300"
                                    aria-label="Delete filter condition"
                                >
                                    <X className="size-5" aria-hidden="true" />
                                </Button>
                            </Card>
                            <Card>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">Audit bot</h3>
                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <div className="inline-flex items-center h-[38px] text-sm text-gray-900 dark:text-gray-50 rounded-md bg-blue-50">
                                        <span className="px-4 py-2 flex items-center gap-1">
                                            <ReceiptText className="-ml-1 size-4 shrink-0 text-blue-600 dark:text-gray-500" aria-hidden="true" />
                                            <span className="ml-1 font-semibold text-blue-600">Audit checks</span>
                                            <span className="text-blue-500">for</span>
                                            <span className="font-semibold text-blue-600">memo</span>
                                            <span className="text-blue-500">and</span>
                                            <span className="font-semibold text-blue-600">receipt matching</span>
                                        </span>
                                        <span className="h-full w-px bg-white" />
                                        <button
                                            type="button"
                                            className="px-2.5 py-2 h-full group"
                                            aria-label="Remove filter condition"
                                        >
                                            <X className="-ml-0.5 size-4 text-blue-500 group-hover:text-blue-600 shrink-0" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <Button variant="secondary" className="h-[38px] gap-2">
                                        <Settings className="-ml-0.5 size-4" aria-hidden="true" />
                                        Edit condition
                                    </Button>
                                </div>
                                <p className="mt-2 max-w-sm leading-5 text-xs text-gray-500 dark:text-gray-500">Checks whether receipt matches topic in corresponding memo text based on computer vision</p>
                                <div className="mt-4">
                                    <Label className="font-medium">Sample size (%)</Label>
                                    <div className="mt-2 flex items-center gap-2">
                                        <Input
                                            type="number"
                                            value={25}
                                            className="w-16"
                                        />
                                        <p className="text-sm font-medium text-gray-900 dark:text-gray-50">of all transactions{' '}
                                            <span className="font-normal text-gray-600 dark:text-gray-400">(30,358 of 121,432)</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 text-right text-sm text-gray-700 dark:text-gray-300">
                                    Last edited:{' '}
                                    <time dateTime='2024-07-19T12:29' className="font-medium">5d ago</time>
                                </p>
                                <Button
                                    variant="ghost"
                                    className="absolute p-2 right-1 top-1 text-gray-500 hover:text-gray-700 dark:text-gray-500 hover:dark:text-gray-300"
                                    aria-label="Delete filter condition"
                                >
                                    <X className="size-5" aria-hidden="true" />
                                </Button>
                            </Card>
                            {/* <Divider>
                                <Button variant="secondary">
                                    Add rule
                                </Button>
                            </Divider> */}
                        </div>
                    </div>
                </form>
            </section>
            <Divider className="my-10" />
            <form>
                <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                    <div>
                        <h2
                            id="approver-list"
                            className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
                        >
                            Approvers
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Define people who can approve bills and expenses.
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">Users with approval rights</h3>
                            <div className="flex items-center gap-4">
                                <span className="hidden sm:block text-sm text-gray-500 dark:text-gray-500">{users.length} approval users</span>
                                <Button className="w-full sm:w-fit gap-2">
                                    <PlusIcon className="-ml-1 size-4 shrink-0" aria-hidden="true" />
                                    Add user
                                </Button>
                            </div>
                        </div>
                        <ul role="list" className="mt-6 divide-y divide-gray-200 dark:divide-gray-800">
                            {users.map((item) => (
                                <li key={item.name} className="py-3 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="rounded-full size-9 text-xs font-medium inline-flex items-center justify-center ring-1 ring-gray-300 dark:ring-gray-700 p-1.5 bg-gray-50 text-gray-700">
                                            {item.initials}
                                        </span>
                                        <div>
                                            <p className="text-sm text-gray-900 font-medium">{item.name}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-500">{item.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Select defaultValue={item.permission}>
                                            <SelectTrigger className="w-40">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {departments.map((item) => (
                                                    <SelectItem key={item.value} value={item.label}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <div>
                                            <Button variant="secondary" className="py-2.5 hover:text-red-500 hover:dark:text-red-500">
                                                <Trash2 className="size-4 shrink-0" aria-hidden="true" />
                                            </Button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </form>
            <Divider className="my-10" />
            <form>
                <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                    <div>
                        <h2
                            id="card-policy"
                            className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
                        >
                            Transaction policy
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Block transactions by keywords or merchant category.
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <div className="flex items-center justify-between gap-4">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">Overview of blocked transactions</h3>
                            {/* <Button className="w-full sm:w-fit gap-2">
                                <PlusIcon className="-ml-1 size-4 shrink-0" aria-hidden="true" />
                                Add entry
                            </Button> */}
                        </div>
                        <CategoryBar
                            values={[8, 3, 89]}
                            colors={["rose", "roseLight", "gray"]}
                            showLabels={false}
                            className="mt-10"
                        />
                        <ul role="list" className="mt-6 flex flex-wrap gap-12">
                            {blacklist.map((item) => (
                                <li key={item.category} className="flex items-start gap-2.5">
                                    <span
                                        className={cx(
                                            item.color,
                                            "mt-[2px] rounded-sm size-2.5"
                                        )}
                                        aria-hidden="true"
                                    />
                                    <div>
                                        <p className="text-sm leading-none text-gray-600 dark:text-gray-400">{item.category}</p>
                                        <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-50">{item.value}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-500">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10">
                            <p className="text-sm text-gray-900 dark:text-gray-50">Keyword / Merchant category</p>
                        </div>
                        <ul role="list" className="mt-1 divide-y divide-gray-200 dark:divide-gray-800">
                            {keywords.map((item) => (
                                <li key={item.value} className="py-2.5 flex items-center justify-between">
                                    <Badge variant="error" className="gap-2">
                                        <span
                                            className="rounded-sm bg-rose-600 dark:bg-rose-300 size-2"
                                            aria-hidden="true"
                                        />
                                        {item.label}
                                    </Badge>
                                    <Button variant="secondary" className="py-2.5 hover:text-red-500 hover:dark:text-red-500">
                                        <Trash2 className="size-4 shrink-0" aria-hidden="true" />
                                    </Button>
                                </li>
                            ))}
                            {/* w */}
                        </ul>
                        <div className="mt-4 p-4 flex items-center gap-2 rounded-md bg-gray-50 ring-1 ring-inset ring-gray-200">
                            <Button variant="secondary" className="py-3.5 px-4">
                                <span className="rounded-sm bg-rose-600 dark:bg-rose-300 size-2" aria-hidden="true" />
                            </Button>
                            <Input placeholder="Insert keyword" />
                            <Button variant="secondary">
                                Cancel
                            </Button>
                            <Button className="hover:text-red-500 hover:dark:text-red-500">
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}