import { Transaction } from "./schema"

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
]

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
]

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
]

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
  {
    purchased: "Jul 1, 2024 at 2:15PM",
    status: "Pending",
    merchant: "Aldi",
    category: "Groceries",
    amount: 35.75,
    lastEdited: "01/07/2024 14:30",
  },
  {
    purchased: "Jun 30, 2024 at 11:45AM",
    status: "approved",
    merchant: "H&M",
    category: "Clothing",
    amount: 89.9,
    lastEdited: "30/06/2024 12:00",
  },
  {
    purchased: "Jun 29, 2024 at 3:30PM",
    status: "in audit",
    merchant: "Apple Store",
    category: "Electronics",
    amount: 1299.0,
    lastEdited: "29/06/2024 16:00",
  },
  {
    purchased: "Jun 28, 2024 at 9:20AM",
    status: "Pending",
    merchant: "Starbucks",
    category: "Coffee shop",
    amount: 7.5,
    lastEdited: "28/06/2024 09:30",
  },
  {
    purchased: "Jun 27, 2024 at 7:00PM",
    status: "approved",
    merchant: "Cinema Rex",
    category: "Entertainment",
    amount: 18.5,
    lastEdited: "27/06/2024 19:15",
  },
  {
    purchased: "Jun 26, 2024 at 1:10PM",
    status: "Pending",
    merchant: "Burger King",
    category: "Restaurant",
    amount: 15.9,
    lastEdited: "26/06/2024 13:20",
  },
  {
    purchased: "Jun 25, 2024 at 10:00AM",
    status: "approved",
    merchant: "Spotify",
    category: "Software (recurring)",
    amount: 9.99,
    lastEdited: "25/06/2024 10:05",
  },
  {
    purchased: "Jun 24, 2024 at 4:45PM",
    status: "action required",
    merchant: "Amazon",
    category: "Online shopping",
    amount: 67.5,
    lastEdited: "24/06/2024 17:00",
  },
  {
    purchased: "Jun 23, 2024 at 11:30AM",
    status: "approved",
    merchant: "Zara",
    category: "Clothing",
    amount: 120.75,
    lastEdited: "23/06/2024 12:00",
  },
  {
    purchased: "Jun 22, 2024 at 8:15PM",
    status: "Pending",
    merchant: "McDonald's",
    category: "Restaurant",
    amount: 12.5,
    lastEdited: "22/06/2024 20:30",
  },
  {
    purchased: "Jun 21, 2024 at 2:00PM",
    status: "approved",
    merchant: "Ikea",
    category: "Furniture",
    amount: 245.0,
    lastEdited: "21/06/2024 14:30",
  },
  {
    purchased: "Jun 20, 2024 at 9:30AM",
    status: "in audit",
    merchant: "Shell",
    category: "Gas",
    amount: 75.2,
    lastEdited: "20/06/2024 09:45",
  },
  {
    purchased: "Jun 19, 2024 at 6:45PM",
    status: "approved",
    merchant: "Netflix",
    category: "Software (recurring)",
    amount: 15.99,
    lastEdited: "19/06/2024 18:50",
  },
  {
    purchased: "Jun 18, 2024 at 12:20PM",
    status: "Pending",
    merchant: "Subway",
    category: "Restaurant",
    amount: 11.5,
    lastEdited: "18/06/2024 12:30",
  },
  {
    purchased: "Jun 17, 2024 at 3:40PM",
    status: "approved",
    merchant: "Adidas",
    category: "Clothing",
    amount: 89.95,
    lastEdited: "17/06/2024 16:00",
  },
  {
    purchased: "Jun 16, 2024 at 10:10AM",
    status: "action required",
    merchant: "Uber Eats",
    category: "Food delivery",
    amount: 28.75,
    lastEdited: "16/06/2024 10:20",
  },
  {
    purchased: "Jun 15, 2024 at 5:30PM",
    status: "approved",
    merchant: "Apple Music",
    category: "Software (recurring)",
    amount: 9.99,
    lastEdited: "15/06/2024 17:35",
  },
  {
    purchased: "Jun 14, 2024 at 1:15PM",
    status: "Pending",
    merchant: "Lidl",
    category: "Groceries",
    amount: 42.3,
    lastEdited: "14/06/2024 13:30",
  },
  {
    purchased: "Jun 13, 2024 at 7:50AM",
    status: "approved",
    merchant: "Starbucks",
    category: "Coffee shop",
    amount: 6.75,
    lastEdited: "13/06/2024 08:00",
  },
  {
    purchased: "Jun 12, 2024 at 4:00PM",
    status: "in audit",
    merchant: "Media Markt",
    category: "Electronics",
    amount: 499.99,
    lastEdited: "12/06/2024 16:15",
  },
]

export const categories = Array.from(
  new Set(transactions.map((transaction) => transaction.category)),
)
