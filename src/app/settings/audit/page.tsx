"use client"

import React from "react"
import { departments } from "@/data/data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion"
import { Badge } from "@/components/Badge"
import { Divider } from "@/components/Divider"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import {
  CornerDownRight,
  Trash2,
  ChevronRight,
  Plus,
  ArrowDownToDot,
  CircleArrowOutUpRight,
  SquareFunction,
  Settings,
  Pencil,
  CircleCheckBig,
  CirclePause,
} from "lucide-react"
import { cx } from "@/lib/utils"
import { Card } from "@/components/Card"
import { RadioGroup, RadioGroupColorpickItem } from "@/components/RadioGroup"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { CategoryBar } from "@/components/CategoryBar"

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

const blacklist = [
  {
    category: "Blocked transactions",
    value: "$4,653 volume",
    description: "1,234",
    color: "bg-rose-600 dark:bg-rose-400",
  },
  {
    category: "Suspicious transactions",
    value: "$1,201 volume",
    description: "319",
    color: "bg-orange-500 dark:bg-orange-500",
  },
  {
    category: "Successfull transactions",
    value: "$213,642 volume",
    description: "10,546",
    color: "bg-gray-500 dark:bg-gray-500",
  },
]

const keywords = [
  {
    label: "Coffee shop",
    value: "coffee-shop",
    flagged: 831,
    category: "block",
  },
  {
    label: "Club & bar",
    value: "club-bar",
    flagged: 213,
    category: "block",
  },
  {
    label: "Sports",
    value: "sports",
    flagged: 198,
    category: "suspicious",
  },
  {
    label: "Gambel",
    value: "gambel",
    flagged: 172,
    category: "block",
  },
  {
    label: "Liquor",
    value: "liquor",
    flagged: 121,
    category: "suspicious",
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
    label: "require receipt",
  },
  {
    value: "require-approval",
    label: "require approval",
  },
  {
    value: "block",
    label: "block",
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

// @CHRIS: add aria-labelled by in first section

export default function Audit() {
  const [isSpendMgmtEnabled, setIsSpendMgmtEnabled] = React.useState(true)
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
                Enable comprehensive audit trails to track expenses, ensuring
                compliance and enhancing security.
              </p>
            </div>
            <div className="md:col-span-2">
              <Card>
                <div>
                  <h3 className="text-sm font-semibold">1. Existing rules</h3>
                  <Accordion
                    type="single"
                    className="mt-6 space-y-4"
                    collapsible
                  >
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
                            <Button
                              variant="secondary"
                              className="gap-2 py-1.5"
                            >
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
                <div className="mt-6 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold">
                    2. Expense audit trail for all employees
                  </h3>
                  <Button className="w-full gap-2 sm:w-fit">
                    <Plus
                      className="-ml-1 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    Add rule
                  </Button>
                </div>

                {rulesSetup.map((rule, index) => (
                  <React.Fragment key={rule.id}>
                    {index > 0 && (
                      <div className="flex flex-col items-center">
                        <div className="h-7 w-px bg-gray-200 dark:bg-gray-800" />
                      </div>
                    )}
                    {rule.type === "event" ? (
                      <Card className="mt-6 overflow-hidden p-0">
                        <div className="dark:border-organge-500 overflow-hidden border-l-4 border-orange-600 p-6">
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
                      <Card className="overflow-hidden p-0">
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
                            <Input
                              type="number"
                              placeholder="0"
                            />
                          </div>
                        </div>
                      </Card>
                    ) : (
                      <Card className="overflow-hidden p-0">
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
                  <div className="h-8 w-px bg-gray-200 dark:bg-gray-800" />
                  <div className="inline-flex items-center gap-1 rounded-lg bg-gray-900 p-1 shadow-md">
                    <button className="flex items-center gap-2 rounded-[calc(theme(borderRadius.lg)-4px)] px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700">
                      <ArrowDownToDot
                        className="-ml-1 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      Event
                    </button>
                    <button className="flex items-center gap-2 rounded-[calc(theme(borderRadius.lg)-4px)] px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700">
                      <SquareFunction
                        className="-ml-1 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      Function
                    </button>
                    <button className="flex items-center gap-2 rounded-[calc(theme(borderRadius.lg)-4px)] px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700">
                      <CircleArrowOutUpRight
                        className="-ml-1 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      Action
                    </button>
                    <button className="flex items-center gap-2 rounded-[calc(theme(borderRadius.lg)-4px)] bg-blue-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-600">
                      Apply
                    </button>
                  </div>
                </div>
              </Card>
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
                        <Trash2
                          className="size-4 shrink-0"
                          aria-hidden="true"
                        />
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
      <section aria-labelledby="card-policy">
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
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Overview of blocked transactions
            </h3>
            <CategoryBar
              values={[8, 3, 89]}
              colors={["rose", "orange", "gray"]}
              showLabels={false}
              className="mt-10"
            />
            <ul role="list" className="mt-6 flex flex-wrap gap-12">
              {blacklist.map((item) => (
                <li key={item.category} className="flex items-start gap-2.5">
                  <span
                    className={cx(item.color, "mt-[2px] size-2.5 rounded-sm")}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm leading-none text-gray-600 dark:text-gray-400">
                      {item.category}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-50">
                      {item.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {item.value}
                    </p>
                    <a
                      href="#"
                      className="mt-2.5 flex items-center gap-0.5 text-sm font-normal text-blue-600 hover:underline hover:underline-offset-4"
                    >
                      {/* @CHRIS: add arrow animated */}
                      Details
                      <ChevronRight
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                Keyword / Merchant category
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                # of transactions
              </p>
            </div>
            <ul
              role="list"
              className="mt-1 divide-y divide-gray-200 dark:divide-gray-800"
            >
              {keywords.map((item) => (
                <li
                  key={item.value}
                  className="flex items-center justify-between py-2.5"
                >
                  <Badge
                    variant={item.category === "block" ? "error" : "warning"}
                    className="gap-2"
                  >
                    <span
                      className={cx(
                        item.category === "block"
                          ? "bg-rose-600 dark:bg-rose-300"
                          : "bg-orange-500 dark:bg-orange-500",
                        "size-2 rounded-sm",
                      )}
                      aria-hidden="true"
                    />
                    {item.label}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <span className="pr-2 text-sm text-gray-500 dark:text-gray-500">
                      {item.flagged}
                    </span>
                    <span
                      className="h-5 w-px bg-gray-200 dark:bg-gray-800"
                      aria-hidden="true"
                    />
                    <Button
                      variant="ghost"
                      className="p-2.5 text-gray-600 hover:border hover:border-gray-300 hover:bg-gray-50 hover:text-red-500 dark:text-gray-400 hover:dark:border-gray-800 hover:dark:bg-gray-900 hover:dark:text-red-500"
                    >
                      <Trash2 className="size-4 shrink-0" aria-hidden="true" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <div
              className={cx(
                "transform-gpu transition-all ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
                isSpendMgmtEnabled ? "" : "",
              )}
              style={{
                transitionDuration: "300ms",
                animationFillMode: "backwards",
              }}
            >
              <div
                className={cx(
                  "animate-slideDownAndFade transition",
                  isSpendMgmtEnabled ? "hidden" : "",
                )}
                style={{
                  animationDelay: "100ms",
                  animationDuration: "300ms",
                  transitionDuration: "300ms",
                  animationFillMode: "backwards",
                }}
              >
                <div className="mt-4 flex flex-col items-center gap-2 rounded-md bg-gray-50 p-4 ring-1 ring-inset ring-gray-200 sm:flex-row">
                  <div className="flex w-full items-center gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="secondary"
                          className="aspect-square h-[42px] sm:h-[38px]"
                        >
                          <span
                            className="size-2.5 rounded-sm bg-rose-600 dark:bg-rose-300"
                            aria-hidden="true"
                          />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent sideOffset={5} className="p-4">
                        <form>
                          {/* @CHRIS: leading-6, text-sm/6 */}
                          <legend className="sr-only block text-sm/6 font-semibold text-gray-900 dark:text-gray-50">
                            Choose category
                          </legend>
                          <RadioGroup className="flex flex-col gap-3">
                            <div className="flex items-start gap-2.5">
                              <RadioGroupColorpickItem
                                value="1"
                                id="block"
                                aria-label="block"
                                color="text-rose-600 dark:text-rose-400"
                                className="mt-0.5"
                              />
                              <div>
                                <Label
                                  htmlFor="block"
                                  className="font-medium"
                                  aria-describedby="block-description"
                                >
                                  Block
                                </Label>
                                <p
                                  id="block-description"
                                  className="mt-1 text-sm text-gray-500 dark:text-gray-500"
                                >
                                  Blocks transactions, preventing payment.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                              <RadioGroupColorpickItem
                                value="2"
                                id="suspicious"
                                aria-label="suspicious"
                                color="text-orange-500 dark:text-orange-500"
                                className="mt-0.5"
                              />
                              <div>
                                <Label
                                  htmlFor="suspicious"
                                  className="font-medium"
                                  aria-describedby="suspicious-description"
                                >
                                  Suspicious
                                </Label>
                                <p
                                  id="suspicious-description"
                                  className="mt-1 text-sm text-gray-500 dark:text-gray-500"
                                >
                                  Processes transactions but flags for audit.
                                </p>
                              </div>
                            </div>
                          </RadioGroup>
                        </form>
                      </PopoverContent>
                    </Popover>
                    <Input placeholder="Insert keyword" />
                  </div>
                  <div className="flex w-full flex-col items-center gap-2 sm:w-fit sm:flex-row">
                    <Button
                      variant="secondary"
                      className="w-full sm:w-fit"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsSpendMgmtEnabled(!isSpendMgmtEnabled)
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="w-full sm:w-fit">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="secondary"
              className="mt-4 w-full gap-2 sm:w-fit"
              onClick={(e) => {
                e.preventDefault()
                setIsSpendMgmtEnabled(!isSpendMgmtEnabled)
              }}
            >
              <Plus className="-ml-0.5 size-4 shrink-0" aria-hidden="true" />
              Add keyword
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
