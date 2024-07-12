//#CHRIS have to add use client here but better move this to another component 
"use client"
import { getColumns } from "@/components/ui/data-table/Columns"
import { DataTable } from "@/components/ui/data-table/DataTable"
import { statuses, transactions } from "@/data/data"
import { Button } from "@/components/Button"
import { RiDeleteBinLine, RiDownload2Line, RiErrorWarningFill, RiFileImageLine } from "@remixicon/react"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { Badge, BadgeProps } from "@/components/Badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"
import { RiFileLine, RiAddCircleLine } from "@remixicon/react"
import { Feed } from "@/components/ui/drawer/Feed"
import { cx } from "@/lib/utils"
import {
    Drawer,
    DrawerBody,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/Drawer"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/Select"
import { formatters } from "@/lib/utils"
import { categories } from "@/data/data"
import { Transaction } from "@/data/schema"
import React from "react"
import { Row } from "@tanstack/react-table"

export default function Example() {
    const [row, setRow] = React.useState<Row<Transaction> | null>(null)
    const datas = row?.original
    const status = statuses.find(
        (item) => item.value === row?.getValue("status"),
    )

    // @CHRIS this onEditClick is not required since the click on the row will trigger the drawer 
    // but you can add other behavior on this button if needed
    const columns = getColumns({
        onEditClick: setRow
    })

    return (
        <>
            <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
                Details
            </h1>
            <div className="mt-4 sm:mt-6 lg:mt-10">
                <DataTable data={transactions} columns={columns} onRowClick={setRow} />
                <Drawer open={!!datas} onOpenChange={(open) => !open && setRow(null)}>
                    {datas ? (
                        <DrawerContent className="sm:max-w-lg">
                            <DrawerHeader className="w-full">
                                <DrawerTitle className="flex items-center w-full justify-between">
                                    <span>{datas.merchant}</span>
                                    <span>{formatters.currency(datas.amount)}</span>
                                </DrawerTitle>
                                <div className="mt-1 flex items-center justify-between">
                                    <span className="text-left text-sm text-gray-500 dark:text-gray-500">{datas.purchased}</span>
                                    <Badge variant={status?.variant as BadgeProps["variant"]}>
                                        {status?.label}
                                    </Badge>
                                </div>
                            </DrawerHeader>
                            <DrawerBody>
                                <Tabs defaultValue="details" className="mt-1">
                                    <TabsList>
                                        <TabsTrigger value="details" className="px-5">Details</TabsTrigger>
                                        <TabsTrigger value="accounting" className="px-5">
                                            <div className="flex items-center">
                                                Accounting
                                                {datas.merchant === "Tchibo (Schweiz) AG" && (
                                                    <span className="ml-1.5 mb-2 block rounded-full size-[5px] bg-blue-500" />
                                                )}
                                            </div>
                                        </TabsTrigger>
                                        <TabsTrigger value="activity" className="px-5">Activity</TabsTrigger>
                                    </TabsList>
                                    <TabsContent
                                        value="details"
                                        className="space-y-6"
                                    >
                                        <div className="mt-6">
                                            <div className="flex items-center justify-between">
                                                <Label className="font-medium">Upload receipt</Label>
                                                {datas.merchant === "Tchibo (Schweiz) AG" ? null : (
                                                    <span className="flex items-center gap-x-1 text-xs font-medium rounded-md text-amber-700 py-1 px-2">
                                                        <RiErrorWarningFill className="size-4 shrink-0" aria-hidden="true" />
                                                        Required by policy
                                                    </span>
                                                )}
                                            </div>
                                            {datas.merchant === "Tchibo (Schweiz) AG" ? (
                                                <div className="mt-3 flex items-center justify-between rounded-lg border border-gray-200 h-20 p-4">
                                                    <div className="flex items-center gap-4">
                                                        <RiFileImageLine className="size-5 shrink-0 text-gray-900" aria-hidden="true" />
                                                        <span className="text-sm text-gray-900 font-medium">tchibo_receipt_23423.png</span>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <RiDeleteBinLine className="size-5 shrink-0 text-gray-500" aria-hidden="true" />
                                                        <RiDownload2Line className="size-5 shrink-0 text-gray-500" aria-hidden="true" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="mt-3 h-36 flex items-center justify-center border border-dashed rounded-lg border-gray-300 dark:border-gray-700">
                                                    <div>
                                                        <RiFileLine
                                                            className="mx-auto size-9 text-gray-400 dark:text-gray-600"
                                                            aria-hidden={true}
                                                        />
                                                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Click to browse or drag receipt here</p>
                                                        <p className="text-xs text-center text-gray-500 dark:text-gray-500">PDF, JPG, PNG, XML</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <Label className="font-medium" htmlFor="category">Accounting Categorization</Label>
                                            {datas.merchant === "Migros" ? (
                                                <Select>
                                                    <SelectTrigger id="category" className="mt-2">
                                                        <SelectValue placeholder="Select category" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {categories.map((category, idx) => (
                                                            <SelectItem key={idx} value={category}>
                                                                {category}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            ) : (
                                                <Select defaultValue={datas.category}>
                                                    <SelectTrigger id="category" className="mt-2">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {categories.map((category, idx) => (
                                                            <SelectItem key={idx} value={category}>
                                                                {category}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <Label className="font-medium" htmlFor="memo">Memo</Label>
                                                {datas.merchant === "Tchibo (Schweiz) AG" ? null : (
                                                    <span className="flex items-center gap-x-1 text-xs font-medium rounded-md text-amber-700 py-1 px-2">
                                                        <RiErrorWarningFill className="size-4 shrink-0" aria-hidden="true" />
                                                        Required by policy
                                                    </span>
                                                )}
                                            </div>
                                            {/* @SEV: is type="text" already default? */}
                                            <Input
                                                id="memo"
                                                name="memo"
                                                type="text"
                                                placeholder={datas.merchant === "Tchibo (Schweiz) AG" ? "Coffee to go" : "Describe the business purpose for this expense"}
                                                className={cx(
                                                    datas.merchant === "Tchibo (Schweiz) AG" ? "[&>input]:placeholder-gray-900" : "[&>input]:placeholder-gray-400",
                                                    "mt-2"
                                                )}
                                            />
                                            {datas.merchant === "Tchibo (Schweiz) AG" ? null : (
                                                <div className="mt-3 flex items-center gap-2">
                                                    <p className="text-xs text-gray-500">AI suggestion</p>
                                                    <button className="flex items-center gap-2 rounded-md bg-gray-100 hover:bg-gray-100/50 text-gray-700 px-2 py-1 text-xs font-medium">
                                                        Groceries at {datas.merchant}
                                                        <RiAddCircleLine className="size-4 shrink-0" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </TabsContent>
                                    <TabsContent
                                        value="accounting"
                                        className="space-y-6"
                                    >
                                        <div className="mt-6">
                                            <span className="text-sm text-gray-900 dark:text-gray-50 font-medium">Audit trail</span>
                                        </div>
                                        <Feed />
                                    </TabsContent>
                                    <TabsContent
                                        value="Activity"
                                    >
                                        Activity
                                    </TabsContent>
                                </Tabs>
                            </DrawerBody>
                            <DrawerFooter className="flex items-center gap-2">
                                <DrawerClose>
                                    <Button variant="secondary" className="w-full">Dispute</Button>
                                </DrawerClose>
                                <DrawerClose>
                                    <Button className="w-full">
                                        {datas.merchant === "Tchibo (Schweiz) AG" ? "Approve" : "Submit"}
                                    </Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    ) : null}
                </Drawer>
            </div>
        </>
    )
}