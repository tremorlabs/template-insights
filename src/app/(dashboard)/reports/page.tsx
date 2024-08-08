import Header from "./_components/Header"
import { TransactionChart } from "./_components/TransactionChart"

export default function TaskPage() {
  return (
    <>
      <Header />
      <section className="mt-8">
        <div className="space-y-12">
          <TransactionChart type="amount" />
          <TransactionChart type="count" />
          <div className="flex w-full justify-around gap-16">
            <TransactionChart type="category" />
            <TransactionChart type="merchant" />
          </div>
        </div>
      </section>
    </>
  )
}
