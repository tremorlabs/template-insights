import { Button } from "@/components/Button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { departments } from "@/data/data"
import { Plus, Trash2 } from "lucide-react"
import React from "react"

const users = [
  {
    initials: "JM",
    name: "Jeff Mueller",
    email: "j.mueller@acme.com",
    permission: "All areas",
  },
  {
    initials: "RS",
    name: "Rebecca Show",
    email: "r.show@acme.com",
    permission: "Sales",
  },
  {
    initials: "MR",
    name: "Mike Ryder",
    email: "m.ryder@acme.com",
    permission: "Marketing",
  },
  {
    initials: "LS",
    name: "Lena Shine",
    email: "l.shin@acme.com",
    permission: "Sales",
  },
  {
    initials: "MS",
    name: "Manuela Stone",
    email: "m.stone@acme.com",
    permission: "IT",
  },
]

export default function Approvers() {
  return (
    <section aria-labelledby="approver-list">
      <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
        <div>
          <h2
            id="approver-list"
            className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
          >
            Approvers
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-500">
            Define people who can approve bills and expenses.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Users with approval rights
            </h3>
            <div className="flex items-center gap-4">
              <span className="hidden text-sm text-gray-500 sm:block dark:text-gray-500">
                {users.length} approval users
              </span>
              <Button className="w-full gap-2 sm:w-fit">
                <Plus className="-ml-1 size-4 shrink-0" aria-hidden="true" />
                Add user
              </Button>
            </div>
          </div>
          <ul
            role="list"
            className="mt-6 divide-y divide-gray-200 dark:divide-gray-800"
          >
            {users.map((item) => (
              <li
                key={item.name}
                className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:py-3"
              >
                <div className="flex w-full items-center gap-4">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-gray-50 p-1.5 text-xs font-medium text-gray-700 ring-1 ring-gray-300 dark:ring-gray-700">
                    {item.initials}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {item.email}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center gap-3 sm:w-fit">
                  <Select defaultValue={item.permission}>
                    <SelectTrigger className="w-full sm:w-40">
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
                    <Button
                      variant="ghost"
                      className="aspect-square p-3 text-gray-600 hover:border hover:border-gray-300 hover:bg-gray-50 hover:text-red-500 sm:p-2.5 dark:text-gray-400 hover:dark:border-gray-800 hover:dark:bg-gray-900 hover:dark:text-red-500"
                    >
                      <Trash2 className="size-4 shrink-0" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
