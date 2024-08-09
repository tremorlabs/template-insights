//#CHRIS have to add use client here but better move this to another component
"use client"
import { getColumns } from "@/app/(dashboard)/transactions/_components/Columns"
import { DataTable } from "@/app/(dashboard)/transactions/_components/DataTable"
import { DataTableDrawer } from "@/app/(dashboard)/transactions/_components/DataTableDrawer"
import { Transaction } from "@/data/schema"
import { transactions } from "@/data/transactions"
import { Row } from "@tanstack/react-table"
import React from "react"

export default function Example() {
  const [row, setRow] = React.useState<Row<Transaction> | null>(null)
  const datas = row?.original

  // @CHRIS this onEditClick is not required since the click on the row will trigger the drawer
  // but you can add other behavior on this button if needed
  const columns = getColumns({
    onEditClick: setRow,
  })

  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Details
      </h1>
      <div className="mt-4 sm:mt-6 lg:mt-10">
        <DataTable data={transactions} columns={columns} onRowClick={setRow} />
        <DataTableDrawer
          open={!!datas}
          onOpenChange={(open: boolean) => !open && setRow(null)}
          datas={datas}
        />
      </div>
    </>
  )
}
