"use client"

import { Button } from "@/components/Button"
import { RiMoreFill } from "@remixicon/react"
import { Row } from "@tanstack/react-table"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { Badge } from "@/components/Badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"
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

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<
    TData,
>({ }: DataTableRowActionsProps<TData>) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    variant="ghost"
                    className="group aspect-square p-1.5 hover:border hover:border-gray-300 data-[state=open]:border-gray-300 data-[state=open]:bg-gray-50 hover:dark:border-gray-700 data-[state=open]:dark:border-gray-700 data-[state=open]:dark:bg-gray-900"
                >
                    <RiMoreFill
                        className="size-4 shrink-0 text-gray-500 group-hover:text-gray-700 group-data-[state=open]:text-gray-700 group-hover:dark:text-gray-300 group-data-[state=open]:dark:text-gray-300"
                        aria-hidden="true"
                    />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="sm:max-w-lg">
                <DrawerHeader className="w-full">
                    <DrawerTitle className="flex items-center w-full justify-between">
                        <span>[Merchant]</span>
                        <span>[Amount]</span>
                    </DrawerTitle>
                    <div className="mt-1 flex items-center justify-between">
                        <span className="text-left text-sm text-gray-500 dark:text-gray-500">Jul 10, 2024 at 1:28PM</span>
                        <Badge variant="success">submitted</Badge>
                    </div>
                </DrawerHeader>
                <DrawerBody>
                    <Tabs defaultValue="details" className="mt-1">
                        <TabsList>
                            <TabsTrigger value="details" className="px-5">Details</TabsTrigger>
                            <TabsTrigger value="accounting" className="px-5">Accounting</TabsTrigger>
                            <TabsTrigger value="activity" className="px-5">Activity</TabsTrigger>
                        </TabsList>
                        <TabsContent
                            value="details"
                            className="space-y-4"
                        >
                            <div className="mt-6">
                                <Label className="font-medium">Upload receipt</Label>
                                <div className="mt-2 h-36 border border-dashed rounded-lg border-gray-300">

                                </div>
                            </div>
                            <div>
                                <Label className="font-medium">Memo</Label>
                                {/* @SEV: is type="text" already default? */}
                                <Input
                                    type="text"
                                    placeholder="Describe the business purpose for this expense"
                                    className="mt-2"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="Accounting"
                        >
                            Accounting
                        </TabsContent>
                        <TabsContent
                            value="Activity"
                        >
                            Activity
                        </TabsContent>
                    </Tabs>
                </DrawerBody>
                <DrawerFooter className="flex items-center gap-2">
                    <Button variant="secondary" className="w-full">Dispute</Button>
                    <Button className="w-full">Submit</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}