import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"
import { Input } from "@/components/Input"
import { Tooltip } from "@/components/Tooltip"
import { cx } from "@/lib/utils"
import {
  ArrowDownToDot,
  CircleArrowOutUpRight,
  CircleCheckBig,
  CirclePause,
  CornerDownRight,
  Plus,
  Settings,
  SquareFunction,
  Trash2,
} from "lucide-react"
import React from "react"

import { Button } from "@/components/Button"
import { Label } from "@/components/Label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"

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

const data = [
  {
    value: "attachment",
    label: "Attachment is received",
  },
  {
    value: "payment",
    label: "Payment has been made",
  },
  {
    value: "transfer",
    label: "Transfer has been made",
  },
]

const conditions = [
  {
    value: "is-below",
    label: "is below",
  },
  {
    value: "is-equal-to",
    label: "is equal to",
  },
  {
    value: "is-greater-than",
    label: "is greater than",
  },
  {
    value: "is-less-than",
    label: "is less than",
  },
]

const actions = [
  {
    value: "require-receipt",
    label: "Require receipt",
  },
  {
    value: "require-approval",
    label: "Require approval",
  },
  {
    value: "block",
    label: "Block",
  },
]

const rules = [
  [
    {
      id: 1,
      type: "event",
      method: {
        title: "Transaction has been made",
        description: "Applies across all employees",
      },
    },
    {
      id: 2,
      type: "function",
      method: {
        title: "Is greater than USD 75",
        description: "Applies to all merchant categories",
      },
    },
    {
      id: 3,
      type: "action",
      method: { title: "Require receipt", description: "Within 15 days" },
    },
  ],
  // add more rules
]

const rulesSetup = [
  {
    id: 1,
    type: "event",
    description: "Select an event you want to audit",
  },
  {
    id: 2,
    type: "function",
    description: "If applicable, choose a complementary condition",
  },
  {
    id: 3,
    type: "action",
    description: "Choose a corresponding behavior for the event",
  },
]

export default function AuditRules() {
  return (
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
              Enable comprehensive audit trails to track expenses, ensuring
              compliance and enhancing security.
            </p>
          </div>
          <div className="md:col-span-2">
            <div>
              <div>
                <h3 className="text-sm font-semibold">Applied Rules</h3>
                <Accordion type="single" className="mt-6 space-y-4" collapsible>
                  <AccordionItem
                    value="1"
                    className="rounded-md border border-gray-200 px-4 dark:border-gray-800"
                  >
                    <AccordionTrigger>
                      <div className="flex h-8 w-full items-center justify-between">
                        <span>IRS receipt rule for all US employees</span>
                        <span className="mr-6 flex items-center gap-2">
                          <CircleCheckBig
                            className="size-5 shrink-0 text-emerald-600 dark:text-emerald-500"
                            aria-hidden={true}
                          />
                          <span className="text-sm text-gray-900 dark:text-gray-50">
                            Live
                          </span>
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Divider className="my-0" />
                      <ul role="list" className="mt-6 space-y-6">
                        {rules.map((ruleGroup, groupIndex) => (
                          <React.Fragment key={groupIndex}>
                            {ruleGroup.map((rule, ruleIndex) => (
                              <li
                                key={rule.id}
                                className="relative flex gap-x-4"
                              >
                                <div
                                  className={cx(
                                    ruleIndex === ruleGroup.length - 1
                                      ? ""
                                      : "-bottom-6",
                                    "absolute left-0 top-0 flex w-9 justify-center",
                                  )}
                                >
                                  <div className="w-px bg-gray-200 dark:bg-gray-800" />
                                </div>
                                {rule.type === "event" ? (
                                  <>
                                    <span className="relative flex aspect-square h-9 items-center justify-center rounded-lg bg-orange-600 dark:bg-orange-500">
                                      <ArrowDownToDot
                                        className="size-5 shrink-0 text-white"
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <div>
                                      <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                        {ruleIndex + 1}. {rule.method.title}
                                      </p>
                                      <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {rule.method.description}
                                      </p>
                                    </div>
                                  </>
                                ) : rule.type === "function" ? (
                                  <>
                                    <span className="relative flex aspect-square h-9 items-center justify-center rounded-lg bg-sky-500 dark:bg-sky-500">
                                      <SquareFunction
                                        className="size-5 shrink-0 text-white"
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <div>
                                      <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                        {ruleIndex + 1}. {rule.method.title}
                                      </p>
                                      <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {rule.method.description}
                                      </p>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <span className="relative flex aspect-square h-9 items-center justify-center rounded-lg bg-emerald-500 dark:bg-emerald-500">
                                      <CircleArrowOutUpRight
                                        className="size-5 shrink-0 text-white"
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <div>
                                      <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                        {ruleIndex + 1}. {rule.method.title}
                                      </p>
                                      <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {rule.method.description}
                                      </p>
                                    </div>
                                  </>
                                )}
                              </li>
                            ))}
                          </React.Fragment>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-center justify-between">
                        <time
                          dateTime="2023-01-23T10:32"
                          className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                        >
                          Updated 30d ago
                        </time>
                        <div className="flex items-center gap-2">
                          <Button variant="secondary" className="gap-2 py-1.5">
                            <Settings
                              className="-ml-0.5 size-4 shrink-0"
                              aria-hidden="true"
                            />
                            Edit
                          </Button>
                          <Button
                            variant="secondary"
                            className="gap-2 py-1.5 text-rose-600 dark:text-rose-400"
                          >
                            <CirclePause
                              className="-ml-0.5 size-4 shrink-0"
                              aria-hidden="true"
                            />
                            Pause
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <Divider className="my-8" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between">
                <h3 className="text-sm font-semibold">Create New Rule</h3>
                <Button
                  className="w-full sm:w-fit"
                  disabled
                >
                  Add rule
                </Button>
              </div>
              <div className="mt-6 space-y-8 rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 lg:p-10">
                <div>
                  <Label className="font-medium">Rule Name</Label>
                  <Input className="mt-2" placeholder="E.g. Min. Transaction Amount USD" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">Define Rule Flow</h3>
                  {rulesSetup.map((rule, index) => (
                    <React.Fragment key={rule.id}>
                      {index > 0 && (
                        <div className="flex flex-col items-center">
                          <div className="h-7 w-px bg-gray-300 dark:bg-gray-800" />
                        </div>
                      )}
                      {rule.type === "event" ? (
                        <Card className="mt-4 relative overflow-hidden p-0 border-gray-300 dark:border-gray-800">
                          <Button
                            variant="ghost"
                            className="absolute right-4 top-4 p-2.5 text-gray-600 hover:border hover:border-gray-300 hover:bg-gray-50 hover:text-red-500 dark:text-gray-400 hover:dark:border-gray-800 hover:dark:bg-gray-900 hover:dark:text-red-500"
                          >
                            <Trash2
                              className="size-4 shrink-0"
                              aria-hidden="true"
                            />
                          </Button>
                          <div className="overflow-hidden border-l-4 border-orange-600 p-6 dark:border-orange-500">
                            <div className="flex items-center gap-4">
                              <span className="flex aspect-square h-10 items-center justify-center rounded-lg bg-orange-600 dark:bg-orange-500">
                                <ArrowDownToDot
                                  className="size-6 shrink-0 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                              <div>
                                <h3 className="text-sm font-medium capitalize text-gray-900 dark:text-gray-50">
                                  {rule.type}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {rule.description}
                                </p>
                              </div>
                            </div>
                            <div className="mt-6">
                              <Label className="font-medium">
                                Select an event
                              </Label>
                              <Select>
                                <SelectTrigger className="mt-2">
                                  <SelectValue placeholder="Select event" />
                                </SelectTrigger>
                                <SelectContent>
                                  {data.map((item) => (
                                    <SelectItem
                                      key={item.value}
                                      value={item.value}
                                    >
                                      {item.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </Card>
                      ) : rule.type === "function" ? (
                        <Card className="relative overflow-hidden p-0 border-gray-300 dark:border-gray-800">
                          <Button
                            variant="ghost"
                            className="absolute right-4 top-4 p-2.5 text-gray-600 hover:border hover:border-gray-300 hover:bg-gray-50 hover:text-red-500 dark:text-gray-400 hover:dark:border-gray-800 hover:dark:bg-gray-900 hover:dark:text-red-500"
                          >
                            <Trash2
                              className="size-4 shrink-0"
                              aria-hidden="true"
                            />
                          </Button>
                          <div className="overflow-hidden border-l-4 border-sky-500 p-6 dark:border-sky-500">
                            <div className="flex items-center gap-4">
                              <span className="flex aspect-square h-10 items-center justify-center rounded-lg bg-sky-500 dark:bg-sky-500">
                                <SquareFunction
                                  className="size-6 shrink-0 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                              <div>
                                <h3 className="text-sm font-medium capitalize text-gray-900 dark:text-gray-50">
                                  {rule.type}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {rule.description}
                                </p>
                              </div>
                            </div>
                            <div className="mt-6">
                              <Label className="font-medium">
                                Select function
                              </Label>
                              <Select>
                                <SelectTrigger className="mt-2">
                                  <SelectValue placeholder="Select condition" />
                                </SelectTrigger>
                                <SelectContent>
                                  {conditions.map((item) => (
                                    <SelectItem
                                      key={item.value}
                                      value={item.value}
                                    >
                                      {item.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                              <CornerDownRight
                                className="size-5 shrink-0 text-gray-400 dark:text-gray-600"
                                aria-hidden="true"
                              />
                              <Input type="number" placeholder="0" />
                            </div>
                          </div>
                        </Card>
                      ) : (
                        <Card className="relative overflow-hidden p-0 border-gray-300 dark:border-gray-800">
                          <Button
                            variant="ghost"
                            className="absolute right-4 top-4 p-2.5 text-gray-600 hover:border hover:border-gray-300 hover:bg-gray-50 hover:text-red-500 dark:text-gray-400 hover:dark:border-gray-800 hover:dark:bg-gray-900 hover:dark:text-red-500"
                          >
                            <Trash2
                              className="size-4 shrink-0"
                              aria-hidden="true"
                            />
                          </Button>
                          <div className="overflow-hidden border-l-4 border-emerald-500 p-6 dark:border-emerald-500">
                            <div className="flex items-center gap-4">
                              <span className="flex aspect-square h-10 items-center justify-center rounded-lg bg-emerald-500 dark:bg-emerald-500">
                                <CircleArrowOutUpRight
                                  className="size-6 shrink-0 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                              <div>
                                <h3 className="text-sm font-medium capitalize text-gray-900 dark:text-gray-50">
                                  {rule.type}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {rule.description}
                                </p>
                              </div>
                            </div>
                            <div className="mt-6">
                              <Label className="font-medium">Select action</Label>
                              <Select defaultValue={actions[0].value}>
                                <SelectTrigger className="mt-2">
                                  <SelectValue placeholder="Select action" />
                                </SelectTrigger>
                                <SelectContent>
                                  {actions.map((item) => (
                                    <SelectItem
                                      key={item.value}
                                      value={item.value}
                                    >
                                      {item.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                By
                              </span>
                              <Select defaultValue={users[0].name}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {users.map((item) => (
                                    <SelectItem key={item.name} value={item.name}>
                                      {item.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </Card>
                      )}
                    </React.Fragment>
                  ))}
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-px bg-gray-300 dark:bg-gray-800" />
                    <div className="inline-flex items-center gap-1 rounded-lg bg-gray-900 dark:bg-[#090E1A] p-1 shadow-md border border-gray-200 dark:border-gray-800">
                      <button className="flex items-center gap-2 rounded-[calc(theme(borderRadius.lg)-4px)] px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700 hover:dark:bg-gray-900">
                        <ArrowDownToDot
                          className="-ml-1 size-4 shrink-0"
                          aria-hidden="true"
                        />
                        Event
                      </button>
                      <button className="flex items-center gap-2 rounded-[calc(theme(borderRadius.lg)-4px)] px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700 hover:dark:bg-gray-900">
                        <SquareFunction
                          className="-ml-1 size-4 shrink-0"
                          aria-hidden="true"
                        />
                        Function
                      </button>
                      <button className="flex items-center gap-2 rounded-[calc(theme(borderRadius.lg)-4px)] px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700 hover:dark:bg-gray-900">
                        <CircleArrowOutUpRight
                          className="-ml-1 size-4 shrink-0"
                          aria-hidden="true"
                        />
                        Action
                      </button>
                      <Button className="px-3 py-1.5 rounded-[calc(theme(borderRadius.lg)-4px)] border-none dark:border-none">Save & Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
