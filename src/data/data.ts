import { Transaction } from "./schema";

export const departments: { value: string; label: string }[] = [
  {
    value: "all-areas",
    label: "All areas",
  },
  {
    value: "IT",
    label: "IT",
  },
  {
    value: "sales",
    label: "Sales",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
];

export const roles: { value: string; label: string }[] = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "member",
    label: "Member",
  },
  {
    value: "viewer",
    label: "Viewer",
  },
  {
    value: "contributor",
    label: "Contributor",
  },
];

export const statuses: { value: string; label: string; variant: string }[] = [
  {
    value: "Pending",
    label: "Pending",
    variant: "neutral",
  },
  {
    value: "in audit",
    label: "In audit",
    variant: "warning",
  },
  {
    value: "action required",
    label: "Action required",
    variant: "error",
  },
  {
    value: "approved",
    label: "Approved",
    variant: "success",
  },
];

export const transactions: Transaction[] = [
  {
    purchased: "Jul 10, 2024 at 1:28PM",
    status: "Pending",
    merchant: "Migros",
    category: "Groceries",
    amount: 22.35,
    lastEdited: "23/09/2023 13:00",
  },
  {
    purchased: "Jul 10, 2024 at 1:20PM",
    status: "Pending",
    merchant: "Coop",
    category: "Groceries",
    amount: 41.5,
    lastEdited: "22/09/2023 10:45",
  },
  {
    purchased: "Jul 8, 2024 at 1:28PM",
    status: "Pending",
    merchant: "SBB",
    category: "Transportation",
    amount: 41.5,
    lastEdited: "17/05/2021 08:32",
  },
  {
    purchased: "Jul 12, 2024 at 1:32PM",
    status: "action required",
    merchant: "Tchibo (Switzerland) AG",
    category: "Coffee shop",
    amount: 5.65,
    lastEdited: "23/09/2023 13:00",
  },
  {
    purchased: "Jul 7, 2024 at 9:18AM",
    status: "in audit",
    merchant: "Coffee Bachmann",
    category: "Restaurant",
    amount: 5.6,
    lastEdited: "10/11/2022 15:24",
  },
  {
    purchased: "Jul 6, 2024 at 8:17AM",
    status: "Pending",
    merchant: "Vercel",
    category: "Software (recurring)",
    amount: 110,
    lastEdited: "05/06/2023 12:16",
  },
  {
    purchased: "Jul 6, 2024 at 0:05AM",
    status: "action required",
    merchant: "Netlify",
    category: "Software (recurring)",
    amount: 90,
    lastEdited: "23/01/2022 11:11",
  },
  {
    purchased: "Jul 5, 2024 at 10:05AM",
    status: "Pending",
    merchant: "Loops",
    category: "Software (recurring)",
    amount: 20,
    lastEdited: "14/03/2023 14:45",
  },
  {
    purchased: "Jul 5, 2024 at 07:05AM",
    status: "in audit",
    merchant: "Selecta",
    category: "Groceries",
    amount: 3.9,
    lastEdited: "12/02/2023 09:12",
  },
  {
    purchased: "Jul 5, 2024 at 10:04AM",
    status: "approved",
    merchant: "Zug Lawyers",
    category: "Legal",
    amount: 3874.5,
    lastEdited: "19/08/2022 16:03",
  },
  {
    purchased: "Jul 5, 2024 at 08:05AM",
    status: "approved",
    merchant: "Tchibo (Switzerland) AG",
    category: "Coffee shop",
    amount: 5.6,
    lastEdited: "29/11/2021 17:25",
  },
  {
    purchased: "Jul 4, 2024 at 11:05AM",
    status: "approved",
    merchant: "GoDaddy",
    category: "Software (recurring)",
    amount: 120,
    lastEdited: "07/12/2023 07:14",
  },
  {
    purchased: "Jul 3, 2024 at 01:12PM",
    status: "approved",
    merchant: "Swiss airline",
    category: "Travel",
    amount: 951.3,
    lastEdited: "28/04/2023 10:45",
  },
  {
    purchased: "Jul 3, 2024 at 01:02PM",
    status: "Pending",
    merchant: "Blue bottle coffee",
    category: "Coffee shop",
    amount: 8.5,
    lastEdited: "03/10/2022 08:33",
  },
  {
    purchased: "Jul 2, 2024 at 12:22PM",
    status: "Pending",
    merchant: "Starbucks coffee",
    category: "Coffee shop",
    amount: 6.9,
    lastEdited: "22/07/2022 14:16",
  },
  {
    purchased: "Jul 2, 2024 at 10:18AM",
    status: "action required",
    merchant: "Uber",
    category: "Transportation",
    amount: 45.6,
    lastEdited: "18/01/2022 12:45",
  },
  {
    purchased: "Jul 2, 2024 at 08:19AM",
    status: "approved",
    merchant: "Uber",
    category: "Transportation",
    amount: 55.1,
    lastEdited: "05/06/2021 18:33",
  },
  {
    purchased: "Jul 2, 2024 at 09:08AM",
    status: "approved",
    merchant: "SBB",
    category: "Transportation",
    amount: 80.25,
    lastEdited: "11/05/2023 11:00",
  },
  {
    purchased: "Jul 2, 2024 at 11:29AM",
    status: "approved",
    merchant: "Steelcase",
    category: "Furniture",
    amount: 290.3,
    lastEdited: "19/09/2023 17:17",
  },
  {
    purchased: "Jul 2, 2024 at 11:21AM",
    status: "approved",
    merchant: "Digitec Galaxus AG",
    category: "Electronics",
    amount: 699.9,
    lastEdited: "27/03/2023 14:28",
  },
];

export const categories = Array.from(
  new Set(transactions.map((transaction) => transaction.category))
);
