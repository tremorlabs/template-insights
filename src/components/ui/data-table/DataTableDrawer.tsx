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
import { Trash2, File, Download } from "lucide-react";
import { DataTableDrawerFeed } from "@/components/ui/data-table/DataTableDrawerFeed";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Select";
import { formatters } from "@/lib/utils";
import { categories, statuses } from "@/data/data";
import { Transaction } from "@/data/schema";
import { useDropzone } from 'react-dropzone';

interface DataTableDrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    datas: Transaction | undefined;
}

export function DataTableDrawer({ open, onOpenChange, datas }: DataTableDrawerProps) {
    const [files, setFiles] = React.useState<File[]>([]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles: File[]) => setFiles(acceptedFiles as File[]),
    });

    const status = statuses.find(
        (item) => item.value === datas?.status,
    );

    const filesList = files.map((file) => (
        <li
            key={file.name}
            className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950"
        >
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <button
                    type="button"
                    className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:text-gray-600 hover:dark:text-gray-500"
                    aria-label="Remove file"
                    onClick={() =>
                        setFiles((prevFiles) =>
                            prevFiles.filter((prevFile) => prevFile.name !== file.name),
                        )
                    }
                >
                    <Trash2 className="size-5 shrink-0" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    className="rounded-md p-2 text-gray-400 hover:text-gray-500 dark:text-gray-600 hover:dark:text-gray-500"
                    aria-label="Download file"
                >
                    <Download className="size-5 shrink-0" aria-hidden="true" />
                </button>
            </div>
            <div className="flex items-center space-x-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                    <File
                        className="size-5 text-gray-700 dark:text-gray-300"
                        aria-hidden={true}
                    />
                </span>
                <div>
                    <p className="text-xs font-medium text-gray-900 dark:text-gray-50 hover:underline hover:underline-offset-4">
                        <a href="#">
                            {file.name}
                        </a>
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-500">
                        {file.size} bytes
                    </p>
                </div>
            </div>
        </li>
    ));

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
                    <DrawerBody className="-mx-6">
                        <Tabs defaultValue="details">
                            <TabsList className="px-6">
                                <TabsTrigger value="details" className="px-4">Details</TabsTrigger>
                                <TabsTrigger value="accounting" className="px-4">Accounting</TabsTrigger>
                                <TabsTrigger value="activity" className="px-4">Activity</TabsTrigger>
                            </TabsList>
                            <TabsContent
                                value="details"
                                className="space-y-6 px-6"
                            >
                                <div className="mt-6">
                                    <Label htmlFor="file" className="font-medium">Upload receipt</Label>
                                    <div className="mt-2 h-36 relative flex items-center justify-center border border-dashed rounded-lg border-gray-300 dark:border-gray-700">
                                        <div>
                                            <File
                                                className="mx-auto size-9 text-gray-400 dark:text-gray-600"
                                                aria-hidden={true}
                                            />
                                            <div className="mt-2">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="cursor-pointer rounded-md text-sm text-gray-700 dark:text-gray-300"
                                                >
                                                    {/* Extend link target to entire card */}
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    Click
                                                    <input
                                                        {...getInputProps()}
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <span className="pl-1 text-sm text-gray-700 dark:text-gray-300">to browse or drag receipt here</span>
                                                <p className="text-xs text-center text-gray-500 dark:text-gray-500">PDF, JPG, PNG, XML</p>
                                            </div>
                                        </div>
                                    </div>
                                    {filesList.length > 0 && (
                                        <>
                                            <h4 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">
                                                File(s) to upload
                                            </h4>
                                            <ul role="list" className="mt-2 space-y-4">
                                                {filesList}
                                            </ul>
                                        </>
                                    )}
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
                                className="space-y-6 px-6"
                            >
                                <h3 className="mt-6 text-sm text-gray-900 dark:text-gray-50 font-medium">Audit trail</h3>
                                <DataTableDrawerFeed />
                            </TabsContent>
                            <TabsContent
                                value="Activity"
                            >
                                Activity
                            </TabsContent>
                        </Tabs>
                    </DrawerBody>
                    <DrawerFooter className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-6 bg-white">
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
