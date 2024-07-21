"use client"

import { Button } from "@/components/Button";
import { departments } from "@/data/data";
import { Plus, Trash2, Ellipsis } from "lucide-react";
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
    TableCaption,
    TableCell,
    TableFoot,
    TableHead,
    TableHeaderCell,
    TableRoot,
    TableRow,
} from "@/components/Table"

const users = [
    {
        initials: "JM",
        name: "Jeff Mueller",
        email: "j.mueller@acme.com",
        dateAdded: "Jan 13, 2022",
        lastActive: "Mar 2, 2024",
        permission: "All areas"
    },
    {
        initials: "RS",
        name: "Rebecca Show",
        email: "r.show@acme.com",
        dateAdded: "Feb 12, 2022",
        lastActive: "Jun 2, 2024",
        permission: "Sales"
    },
    {
        initials: "MR",
        name: "Mike Ryder",
        email: "m.ryder@acme.com",
        dateAdded: "Sep 19, 2023",
        lastActive: "Jul 10, 2024",
        permission: "Marketing"
    },
    {
        initials: "LS",
        name: "Lena Shine",
        email: "l.shin@acme.com",
        dateAdded: "Jan 21, 2024",
        lastActive: "Feb 8, 2024",
        permission: "Sales"
    },
    {
        initials: "MS",
        name: "Manuela Stone",
        email: "m.stone@acme.com",
        dateAdded: "Apr 18, 2023",
        lastActive: "Dec 20, 2023",
        permission: "IT"
    },
]

// @CHRIS: change wording in first <p> if name "Insights" changes

export default function Users() {
    return (
        <div>
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
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeaderCell className="w-full">Name / Email</TableHeaderCell>
                                        <TableHeaderCell>Date added</TableHeaderCell>
                                        <TableHeaderCell className="w-full">Last active</TableHeaderCell>
                                        <TableHeaderCell>Permission</TableHeaderCell>
                                        <TableHeaderCell className="text-right">
                                            <span className="sr-only">Edit</span>
                                        </TableHeaderCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((item) => (
                                        <TableRow key={item.name}>
                                            <TableCell className="w-full">
                                                <div className="flex items-center gap-4">
                                                    <span className="rounded-full size-9 text-xs font-medium inline-flex items-center justify-center ring-1 ring-gray-300 dark:ring-gray-700 p-1.5 bg-gray-50 text-gray-700">
                                                        {item.initials}
                                                    </span>
                                                    <div>
                                                        <p className="text-sm text-gray-900 font-medium">{item.name}</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-500">{item.email}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {item.dateAdded}
                                            </TableCell>
                                            <TableCell>
                                                {item.lastActive}
                                            </TableCell>
                                            <TableCell>
                                                <Select defaultValue={item.permission}>
                                                    <SelectTrigger>
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
                                            </TableCell>
                                            <TableCell className="w-16 text-right">
                                                <Button variant="ghost" className="p-2.5  hover:bg-gray-50 hover:dark:bg-gray-900 hover:border hover:border-gray-300 hover:dark:border-gray-800 text-gray-600 dark:text-gray-400">
                                                    <Ellipsis className="size-4 shrink-0" aria-hidden="true" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableRoot>
                    </div>
                </div>
            </form>
        </div>
    );
}