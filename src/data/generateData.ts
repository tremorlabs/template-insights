import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"
import { expense_statuses, payment_statuses, merchants, categories, currencies } from "./schema"

const transactions = Array.from({ length: 1800 }, () => ({
  transaction_id: `tx-${faker.string.nanoid()}`,
  transaction_date: faker.date
    .between({ from: "2024-01-01T00:00:00Z", to: "2024-08-17T00:00:00Z" })
    .toISOString(),
  expense_status: faker.helpers.weightedArrayElement(expense_statuses),
  payment_status: faker.helpers.weightedArrayElement(payment_statuses),
  merchant: faker.helpers.arrayElement(merchants),
  category: faker.helpers.arrayElement(categories),
  amount: parseFloat(faker.finance.amount({min: 0, max: 12000})),
  currency: faker.helpers.weightedArrayElement(currencies),
  lastEdited: faker.date
    .between({ from: "2024-01-01T00:00:00Z", to: "2024-08-17T00:00:00Z" })
    .toISOString(),
}))

const sortedTransactions = transactions.sort((a, b) => 
  new Date(b.transaction_date).getTime() - new Date(a.transaction_date).getTime()
)

const finalArray = `import { Transaction } from "./schema";
export const transactions: Transaction[] = ${JSON.stringify(sortedTransactions, null, 2)};
`

fs.writeFileSync(path.join(__dirname, "transactions.ts"), finalArray)
console.log("Data generated and sorted by date, newest first.")