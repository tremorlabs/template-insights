//#CHRIS have to add use client here but better move this to another component 
"use client"
import { getColumns } from "@/components/ui/data-table/Columns"
import { DataTable } from "@/components/ui/data-table/DataTable"
import { transactions } from "@/data/transactions"
import { Transaction } from "@/data/schema"
import React from "react"
import { Row } from "@tanstack/react-table"
import { DataTableDrawer } from "@/components/ui/data-table/DataTableDrawer"

export default function Example() {
    const [row, setRow] = React.useState<Row<Transaction> | null>(null)
    const datas = row?.original

    // @CHRIS this onEditClick is not required since the click on the row will trigger the drawer 
    // but you can add other behavior on this button if needed
    const columns = getColumns({
        onEditClick: setRow
    })

    return (
        <>
            <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
                Details
            </h1>
            <div className="mt-4 sm:mt-6 lg:mt-10">
                <DataTable data={transactions} columns={columns} onRowClick={setRow} />
                <DataTableDrawer open={!!datas} onOpenChange={(open: boolean) => !open && setRow(null)} datas={datas} />
            </div >
        </>
    )
}