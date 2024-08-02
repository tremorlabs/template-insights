"use client"

import { Button } from "@/components/Button";
import { departments } from "@/data/data";
import { Plus, Ellipsis } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/DropdownMenu"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/Select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRoot,
    TableRow,
} from "@/components/Table"
import { cx, focusRing } from "@/lib/utils";

const users = [
    {
        initials: "AC",
        name: "Adam Clarke",
        email: "a.clarke@acme.com",
        dateAdded: "Jan 13, 2022",
        lastActive: "Mar 2, 2024",
        permission: "All areas",
        status: "active"
    },
    {
        initials: "LB",
        name: "Lisa Brown",
        email: "l.brown@acme.com",
        dateAdded: "Feb 12, 2022",
        lastActive: "Jun 2, 2024",
        permission: "Sales",
        status: "active"
    },
    {
        initials: "DW",
        name: "David Wilson",
        email: "d.wilson@acme.com",
        dateAdded: "Sep 19, 2023",
        lastActive: "Jul 10, 2024",
        permission: "Marketing",
        status: "active"
    },
    {
        initials: "KT",
        name: "Karen Thompson",
        email: "k.thompson@acme.com",
        dateAdded: "Jan 21, 2024",
        lastActive: "Feb 8, 2024",
        permission: "Sales",
        status: "active"
    },
    {
        initials: "NP",
        name: "Nathan Parker",
        email: "n.parker@acme.com",
        dateAdded: "Apr 18, 2023",
        lastActive: "Dec 20, 2023",
        permission: "IT",
        status: "active"
    },
    {
        initials: "SG",
        name: "Sarah Green",
        email: "s.green@acme.com",
        dateAdded: "Jul 14. 2024",
        lastActive: "--",
        permission: "",
        status: "pending"
    },
]

// @CHRIS: change wording in first <p> if name "Insights" changes
// @SEV: table overflow mobile view although table root is set

export default function Users() {
    return (
        <div>
            <section aria-labelledby="members">
                <form>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                        <div>
                            <h2
                                id="members"
                                className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
                            >
                                Members
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Invite employees to Insights and manage their permissions to streamline expense management.
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">Users with approval rights</h3>
                                <div className="flex items-center gap-4">
                                    <Button className="w-full sm:w-fit gap-2">
                                        <Plus className="-ml-1 size-4 shrink-0" aria-hidden="true" />
                                        Add user
                                    </Button>
                                </div>
                            </div>
                            <TableRoot className="mt-6">
                                <Table className="border-transparent dark:border-transparent">
                                    <TableHead>
                                        <TableRow>
                                            <TableHeaderCell className="w-full text-xs font-medium uppercase">Name / Email</TableHeaderCell>
                                            <TableHeaderCell className="text-xs font-medium uppercase">Date added</TableHeaderCell>
                                            <TableHeaderCell className="text-xs font-medium uppercase">Last active</TableHeaderCell>
                                            <TableHeaderCell className="text-xs font-medium uppercase">Permission</TableHeaderCell>
                                            <TableHeaderCell className="text-xs font-medium uppercase">
                                                <span className="sr-only">Edit</span>
                                            </TableHeaderCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {users.map((item) => (
                                            <TableRow key={item.name}>
                                                <TableCell className="w-full">
                                                    <div className="flex items-center gap-4">
                                                        <span className="rounded-full size-9 text-xs font-medium inline-flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-700 p-1.5 text-gray-700">
                                                            {item.initials}
                                                        </span>
                                                        {item.status === "pending" ? (
                                                            <div>
                                                                <div className="flex items-center gap-2">
                                                                    <div className="text-sm text-gray-900 dark:text-gray-50 font-medium">{item.name}</div>
                                                                    <span className="rounded-md text-xs font-medium px-1.5 py-0.5 bg-gray-100 text-gray-600 dark:text-gray-300">pending</span>
                                                                </div>
                                                                <div className="text-xs text-gray-500 dark:text-gray-500">{item.email}</div>
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center gap-4">
                                                                <span className="rounded-full size-9 text-xs font-medium inline-flex items-center justify-center border border-gray-300 dark:border-gray-700 p-1.5 bg-gray-50 text-gray-700">
                                                                    {item.initials}
                                                                </span>
                                                                <div>
                                                                    <div className="text-sm text-gray-900 dark:text-gray-50 font-medium">{item.name}</div>
                                                                    <div className="text-xs text-gray-500 dark:text-gray-500">{item.email}</div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    {item.dateAdded}
                                                </TableCell>
                                                <TableCell>
                                                    {item.lastActive}
                                                </TableCell>
                                                <TableCell>
                                                    {item.status === "pending" ? (
                                                        <Button variant="secondary" className="text-blue-600 justify-center sm:w-36">Resend</Button>
                                                    ) : (
                                                        <Select defaultValue={item.permission}>
                                                            <SelectTrigger className="sm:w-36">
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
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    {/* @SEV: weird focus ring behavior although same styling in dashboard.tremor.so */}
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" className="p-2.5 hover:bg-gray-50 hover:dark:bg-gray-900 hover:border hover:border-gray-300 hover:dark:border-gray-800 data-[state=open]:border-gray-300 data-[state=open]:bg-gray-50 text-gray-600 dark:text-gray-400 data-[state=open]:dark:border-gray-700 data-[state=open]:dark:bg-gray-900">
                                                                <Ellipsis className="size-4 shrink-0" aria-hidden="true" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className="w-36">
                                                            <DropdownMenuItem>
                                                                View details
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="text-red-600 dark:text-red-500">
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableRoot>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}