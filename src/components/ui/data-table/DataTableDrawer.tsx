// components/ui/drawer/TransactionDrawer.tsx
"use client";
import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/Drawer";
import { Badge, BadgeProps } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { Input } from "@/components/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { RiFileLine } from "@remixicon/react";
import { Feed } from "@/components/ui/drawer/Feed";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Select";
import { formatters } from "@/lib/utils";
import { categories, statuses } from "@/data/data";
import { Transaction } from "@/data/schema";

interface DataTableDrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    datas: Transaction | undefined;
}

export function DataTableDrawer({ open, onOpenChange, datas }: DataTableDrawerProps) {
    const status = statuses.find(
        (item) => item.value === datas?.status,
    );

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
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
                                    Accounting
                                </TabsTrigger>
                                <TabsTrigger value="activity" className="px-5">Activity</TabsTrigger>
                            </TabsList>
                            <TabsContent
                                value="details"
                                className="space-y-6"
                            >
                                <div className="mt-6">
                                    <Label className="font-medium">Upload receipt</Label>
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
                                </div>
                                <div>
                                    <Label className="font-medium" htmlFor="category">Accounting Categorization</Label>
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
                                </div>
                                <div>
                                    <Label className="font-medium" htmlFor="memo">Memo</Label>
                                    <Input
                                        id="memo"
                                        name="memo"
                                        type="text"
                                        placeholder="Describe the business purpose for this expense"
                                        className="mt-2"
                                    />
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
                                Submit
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            ) : null}
        </Drawer>
    );
};
