"use client"

import { Badge } from "@/components/Badge";
import { Divider } from "@/components/Divider";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/Select"
import { Label } from "@/components/Label";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { cx } from "@/lib/utils";
import { ChevronDown, X, Plus, Settings, Trash2, ReceiptText } from 'lucide-react';
import { Card } from "@/components/Card";
import { roles } from "@/data/data";

const activity = [
    { id: 1, rule: 'Require memo text for:', value: 'every transaction', person: { name: 'Emily Ross' } },
    { id: 2, rule: 'Require receipt for transactions:', value: '> USD 75', person: { name: 'Emily Ross' } },
    { id: 3, rule: 'Require approval for transactions:', value: '> USD 75', person: { name: 'Emily Ross' } },
]

export default function Audit() {
    return (
        <div>
            <section aria-labelledby="personal-information">
                <form>
                    <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                        <div>
                            <h2
                                id="personal-information"
                                className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
                            >
                                Configure audit trail
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                Manage your personal information and role.
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <Card>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">Rule conditions</h3>
                                <div className="mt-4 h-9 flex items-center gap-3">
                                    <div className="inline-flex items-center text-sm text-gray-900 dark:text-gray-50 rounded-md bg-gray-100">
                                        <span className="px-4 py-2 flex items-center gap-1.5">
                                            <ReceiptText className="-ml-1 size-4 shrink-0 text-gray-500 dark:text-gray-500" aria-hidden="true" />
                                            <span className="ml-0.5 font-semibold">Every transaction</span>
                                            <span>requires</span>
                                            <span className="font-semibold">memo</span>
                                        </span>
                                        <span className="h-full w-px bg-white" />
                                        <button
                                            type="button"
                                            className="px-2.5 py-2 group"
                                            aria-label="Remove filter condition"
                                        >
                                            <X className="size-4 text-gray-500 group-hover:text-gray-700 shrink-0" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <Button variant="secondary" className="gap-2">
                                        <Plus className="size-4" aria-hidden="true" />
                                        Add condition
                                    </Button>
                                </div>
                                <div className="absolute right-0 top-1">
                                    <Button
                                        variant="ghost"
                                        className="text-gray-400 hover:text-gray-700 dark:text-gray-600 hover:dark:text-gray-300"
                                        aria-label="Delete filter condition"
                                    >
                                        <X className="size-4" aria-hidden="true" />
                                    </Button>
                                    {/* <ul role="list" className="mt-4 space-y-6">
                                    {activity.map((activityItem, activityItemIdx) => (
                                        <li key={activityItem.id} className="relative flex gap-x-3">
                                            <div
                                                className={cx(
                                                    activityItemIdx === activity.length - 1 ? 'size-8' : '-bottom-8',
                                                    'absolute left-0 top-0 flex w-8 justify-center',
                                                )}
                                            >
                                                <div className="w-px bg-gray-200" />
                                            </div>
                                            <>
                                                <div className="relative flex size-8 flex-none items-center justify-center bg-white">
                                                    <span className="size-6 flex items-center text-xs font-semibold text-gray-700 dark:text-gray-300 justify-center rounded-md bg-gray-100 ring-1 ring-gray-300 dark:ring-gray-700">
                                                        {activityItem.id}
                                                    </span>
                                                </div>
                                                <p className="flex-auto py-0.5 text-sm leading-7 text-gray-500">
                                                    {activityItem.rule}{' '}
                                                    <span className="inline-flex items-center gap-2">
                                                        <span className="font-medium text-gray-900 dark:text-gray-50">{activityItem.value}</span>
                                                        <button className="border border-gray-200 dark:border-gray-800 bg-white size-6 inline-flex items-center justify-center rounded-md">
                                                            <ChevronDown className="size-5 text-gray-700 dark:text-gray-300 shrink-0" aria-hidden="true" />
                                                        </button>
                                                    </span>
                                                </p>
                                                <div className="flex items-center gap-1">
                                                    <button
                                                        type="button"
                                                        className="p-1 group"
                                                    >
                                                        <Settings className="size-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 group-hover:dark:text-gray-400" aria-hidden="true" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="p-1 group"
                                                    >
                                                        <Trash2 className="size-5 text-gray-400 group-hover:text-red-500 dark:text-gray-500 group-hover:dark:text-red-500" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </>
                                        </li>
                                    ))}
                                </ul> */}
                                </div>
                            </Card>
                            <Divider>
                                <Button variant="secondary" className="gap-2">
                                    <Plus className="-ml-1 size-4 shrink-0" />
                                    Add rule
                                </Button>
                            </Divider>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}