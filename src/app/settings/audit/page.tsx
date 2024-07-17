"use client"

import { Divider } from "@/components/Divider";
import { Label } from "@/components/Label";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { X, Plus, ReceiptText } from 'lucide-react';
import { Card } from "@/components/Card";

const users = [
    {
        initials: "JM",
        name: "Jeff Mueller",
        email: "j.mueller@Acme.com",
        permission: "all areas"
    },
    {
        initials: "RS",
        name: "Rebecca Show",
        email: "r.show@Acme.com",
        permission: "marketing"
    },
    {
        initials: "RS",
        name: "Rebecca Show",
        email: "r.show@Acme.com",
        permission: "marketing"
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
                                Enable comprehensive audit trails to track and log expenses, ensuring compliance and enhancing security.
                            </p>
                            <Button variant="secondary" className="mt-4">
                                Add rule
                            </Button>
                        </div>
                        <div className="md:col-span-2 space-y-6">
                            <Card>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">Rule condition</h3>
                                <div className="mt-4 space-y-3">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="inline-flex h-9 items-center text-sm text-gray-900 dark:text-gray-50 rounded-md bg-blue-50">
                                            <span className="px-4 py-2 flex items-center gap-1">
                                                <ReceiptText className="-ml-1 size-4 shrink-0 text-blue-600 dark:text-gray-500" aria-hidden="true" />
                                                <span className="ml-0.5 font-semibold text-blue-600">Every transaction</span>
                                                <span className="text-blue-500">requires</span>
                                                <span className="font-semibold text-blue-600">memo</span>
                                            </span>
                                            <span className="h-full w-px bg-white" />
                                            <button
                                                type="button"
                                                className="px-2.5 py-2 group"
                                                aria-label="Remove filter condition"
                                            >
                                                <X className="-ml-0.5 size-4 text-blue-500 group-hover:text-blue-600 shrink-0" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <Button variant="secondary" className="gap-2">
                                            <Plus className="-ml-0.5 size-4" aria-hidden="true" />
                                            Add condition
                                        </Button>
                                    </div>
                                    <div className="block w-fit uppercase text-xs font-medium rounded-full bg-gray-400 px-2.5 py-1 text-white">and</div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="inline-flex h-9 items-center text-sm rounded-md bg-blue-50">
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
                                                className="px-2.5 py-2 group"
                                                aria-label="Remove filter condition"
                                            >
                                                <X className="-ml-0.5 size-4 text-blue-500 group-hover:text-blue-600 shrink-0" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <Button variant="secondary" className="gap-2">
                                            <Plus className="-ml-0.5 size-4" aria-hidden="true" />
                                            Add condition
                                        </Button>
                                    </div>
                                    <div className="block w-fit uppercase text-xs font-medium rounded-full bg-gray-400 px-2.5 py-1 text-white">and</div>
                                    <div>
                                        <div className="flex flex-wrap items-start gap-3">
                                            <div className="inline-flex h-9 items-center text-sm rounded-md bg-blue-50">
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
                                                    className="px-2.5 py-2 group"
                                                    aria-label="Remove filter condition"
                                                >
                                                    <X className="-ml-0.5 size-4 text-blue-500 group-hover:text-blue-600 shrink-0" aria-hidden="true" />
                                                </button>
                                            </div>
                                            <Button variant="secondary" className="gap-2">
                                                <Plus className="-ml-0.5 size-4" aria-hidden="true" />
                                                Add condition
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
                                    className="absolute right-1 top-1 p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-50"
                                    aria-label="Delete filter condition"
                                >
                                    <X className="size-4" aria-hidden="true" />
                                </Button>
                            </Card>
                            <Card>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">Audit bot</h3>
                                <div className="mt-4 flex flex-wrap items-center gap-3">
                                    <div className="inline-flex h-9 items-center text-sm text-gray-900 dark:text-gray-50 rounded-md bg-blue-50">
                                        <span className="px-4 py-2 flex items-center gap-1">
                                            <ReceiptText className="-ml-1 size-4 shrink-0 text-blue-600 dark:text-gray-500" aria-hidden="true" />
                                            <span className="ml-1 font-semibold text-blue-600">Audit checks</span>
                                            <span className="text-blue-500">for</span>
                                            <span className="font-semibold text-blue-600">memo</span>
                                            <span className="text-blue-500">and</span>
                                            <span className="font-semibold text-blue-600"> receipt matching</span>
                                        </span>
                                        <span className="h-full w-px bg-white" />
                                        <button
                                            type="button"
                                            className="px-2.5 py-2 group"
                                            aria-label="Remove filter condition"
                                        >
                                            <X className="-ml-0.5 size-4 text-blue-500 group-hover:text-blue-600 shrink-0" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <Button variant="secondary" className="gap-2">
                                        <Plus className="-ml-0.5 size-4" aria-hidden="true" />
                                        Add condition
                                    </Button>
                                </div>
                                <p className="mt-2 max-w-sm leading-5 text-xs text-gray-500 dark:text-gray-500">Checks whether receipt matches topic in corresponding memo text based on computer vision</p>
                                <div className="mt-4">
                                    <Label className="font-medium">Sample size (%)</Label>
                                    <div className="mt-2 flex items-center gap-2">
                                        <Input
                                            type="number"
                                            value={25}
                                            className="w-20"
                                        />
                                        <p className="text-sm font-medium text-gray-900 dark:text-gray-50">of all transactions{' '}
                                            <span className="font-normal text-gray-600 dark:text-gray-400">(20K of 80K)</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 text-right text-sm text-gray-700 dark:text-gray-300">
                                    Last edited:{' '}
                                    <time dateTime='2024-07-19T12:29' className="font-medium">5d ago</time>
                                </p>
                                <Button
                                    variant="ghost"
                                    className="absolute p-2 right-1 top-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-50"
                                    aria-label="Delete filter condition"
                                >
                                    <X className="size-4" aria-hidden="true" />
                                </Button>
                            </Card>
                        </div>
                    </div>
                </form>
            </section>
            <Divider className="my-12" />
            <form>
                <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                    <div>
                        <h2
                            id="personal-information"
                            className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
                        >
                            Approvers
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Define people who can approve bills and expenses.
                        </p>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">Users with approval rights</h3>
                        <ul role="list" className="space-y-4 divide-y divide-gray-200 dark:divide-gray-800">
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
}