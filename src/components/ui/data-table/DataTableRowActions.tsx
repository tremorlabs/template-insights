"use client"

import { Button } from "@/components/Button"
import { RiMoreFill } from "@remixicon/react"
import { Row } from "@tanstack/react-table"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { Badge, BadgeProps } from "@/components/Badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"
import { RiFileLine } from "@remixicon/react"
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
import { categories, statuses } from "@/data/data"
import { Transaction } from "@/data/schema"

interface DataTableRowActionsProps {
  row: Row<Transaction>
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const datas = row.original

  const status = statuses.find((item) => item.value === row.getValue("status"))

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
          <DrawerTitle className="flex w-full items-center justify-between">
            <span>{datas.merchant}</span>
            <span>{formatters.currency(datas.amount)}</span>
          </DrawerTitle>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-left text-sm text-gray-500 dark:text-gray-500">
              {datas.purchased}
            </span>
            <Badge variant={status?.variant as BadgeProps["variant"]}>
              {status?.label}
            </Badge>
          </div>
        </DrawerHeader>
        <DrawerBody>
          <Tabs defaultValue="details" className="mt-1">
            <TabsList>
              <TabsTrigger value="details" className="px-5">
                Details
              </TabsTrigger>
              <TabsTrigger value="accounting" className="px-5">
                Accounting
              </TabsTrigger>
              <TabsTrigger value="activity" className="px-5">
                Activity
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4">
              <div className="mt-6">
                <Label className="font-medium">Upload receipt</Label>
                <div className="mt-2 flex h-36 items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                  <div>
                    <RiFileLine
                      className="mx-auto size-9 text-gray-400 dark:text-gray-600"
                      aria-hidden={true}
                    />
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      Click to browse or drag receipt here
                    </p>
                    <p className="text-center text-xs text-gray-500 dark:text-gray-500">
                      PDF, JPG, PNG, XML
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Label className="font-medium" htmlFor="category">
                  Accounting Categorization
                </Label>
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
                <Label className="font-medium" htmlFor="memo">
                  Memo
                </Label>
                <Input
                  id="memo"
                  name="memo"
                  placeholder="Describe the business purpose for this expense"
                  className="mt-2"
                />
              </div>
            </TabsContent>
            <TabsContent value="Accounting">Accounting</TabsContent>
            <TabsContent value="Activity">Activity</TabsContent>
          </Tabs>
        </DrawerBody>
        <DrawerFooter className="flex items-center gap-2">
          <DrawerClose>
            <Button variant="secondary" className="w-full">
              Dispute
            </Button>
          </DrawerClose>
          <DrawerClose>
            <Button className="w-full">Submit</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
