import { Suspense } from "react"
import Header from "./_components/Header"
import { TransactionChart } from "./_components/TransactionChart"

function ClientPage() {
  return (
    <>
      <Header />
      <section className="my-8">
        <div className="space-y-12">
          <TransactionChart yAxisWidth={70} type="amount" />
          <TransactionChart yAxisWidth={70} type="count" />
          <div className="flex w-full flex-col justify-around gap-12 lg:flex-row lg:gap-20">
            <TransactionChart yAxisWidth={100} type="category" />
            <TransactionChart yAxisWidth={100} type="merchant" />
          </div>
        </div>
      </section>
    </>
  )
}

export default function Page() {
  return (
    <Suspense fallback="Loading...">
      <ClientPage />
    </Suspense>
  )
}
