

import Header from "./_components/Header"
import { TransactionCount } from "./_components/TransactionCount"
import { TransactionAmount } from "./_components/TransactionAmount"

export default function TaskPage() {
  return (
    <>
      <Header />
      <section className="mt-8">
        {/* <h2
          className={cx(
            "sticky top-[97px] z-40 flex items-center gap-2 bg-white py-4",
          )}
        >
          <div
            aria-hidden="true"
            className="rounded border border-blue-200 bg-blue-50 p-1.5"
          >
            <ArrowLeftRight className="size-4 text-blue-500" />
          </div>
          Transactions
        </h2> */}
        <div className="space-y-12">
          <TransactionAmount />
          <TransactionCount />
        </div>
      </section>
    </>
  )
}
