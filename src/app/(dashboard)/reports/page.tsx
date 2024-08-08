import Header from "./_components/Header"
import { TransactionAmount } from "./_components/TransactionAmount"
import { TransactionCount } from "./_components/TransactionCount"
import { TransactionsByCategory } from "./_components/TransactionsByCategory"
import { TransactionsByMerchant } from "./_components/TransactionsByMerchant"

export default function TaskPage() {
  return (
    <>
      <Header />
      <section className="mt-8">
        <div className="space-y-12">
          <TransactionAmount />
          <TransactionCount />
          <div className="flex w-full justify-around gap-16">
            <TransactionsByMerchant />
            <TransactionsByCategory />
          </div>
        </div>
      </section>
    </>
  )
}
