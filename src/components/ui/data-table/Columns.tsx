"use client"

import { Badge, BadgeProps } from "@/components/Badge"
import { Checkbox } from "@/components/Checkbox"
import { statuses } from "@/data/data"
import { Transaction } from "@/data/schema"
import { formatters } from "@/lib/utils"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./DataTableColumnHeader"
import { DataTableRowActions } from "./DataTableRowActions"

const columnHelper = createColumnHelper<Transaction>()

// @SEV: is there a reason why "column" was lowercase before?
export const Columns = [
    columnHelper.display({
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected()
                        ? true
                        : table.getIsSomeRowsSelected()
                            ? "indeterminate"
                            : false
                }
                onCheckedChange={() => table.toggleAllPageRowsSelected()}
                className="translate-y-0.5"
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={() => row.toggleSelected()}
                className="translate-y-0.5"
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
        meta: {
            displayName: "Select",
        },
    }),
    columnHelper.accessor("purchased", {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Purchased" />
        ),
        enableSorting: true,
        enableHiding: false,
        meta: {
            className: "tabular-nums",
            displayName: "Purchased",
        },
    }),
    columnHelper.accessor("status", {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        enableSorting: true,
        meta: {
            className: "text-left",
            displayName: "Status",
        },
        cell: ({ row }) => {
            const status = statuses.find(
                (item) => item.value === row.getValue("status"),
            )

            if (!status) {
                return null
            }

            return (
                <Badge variant={status.variant as BadgeProps["variant"]}>
                    {status.label}
                </Badge>
            )
        },
    }),
    columnHelper.accessor("merchant", {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Merchant" />
        ),
        enableSorting: false,
        meta: {
            className: "text-left",
            displayName: "Merchant",
        },
        filterFn: "arrIncludesSome",
    }),
    columnHelper.accessor("category", {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Category" />
        ),
        enableSorting: false,
        meta: {
            className: "text-left",
            displayName: "Category",
        },
    }),
    columnHelper.accessor("amount", {
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Amount" />
        ),
        enableSorting: true,
        meta: {
            className: "text-right",
            displayName: "Amount",
        },
        cell: ({ getValue }) => {
            return (
                <span className="font-medium">{formatters.currency(getValue())}</span>
            )
        },
    }),
    columnHelper.display({
        id: "edit",
        header: "Edit",
        enableSorting: false,
        enableHiding: false,
        meta: {
            className: "text-right",
            displayName: "Edit",
        },
        cell: ({ row }) => <DataTableRowActions row={row} />,
    }),
] as ColumnDef<Transaction>[]