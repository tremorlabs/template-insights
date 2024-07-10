import { Transaction } from "./schema";

export const statuses: { value: string; label: string; variant: string }[] = [
  {
    value: "submitted",
    label: "Submitted",
    variant: "success",
  },
  {
    value: "pending",
    label: "Pending",
    variant: "warning",
  },
  {
    value: "declined",
    label: "Declined",
    variant: "neutral",
  },
];

// @CHRIS: kick out if not needed

// export const conditions: { value: string; label: string }[] = [
//   {
//     value: "is-equal-to",
//     label: "is equal to",
//   },
//   {
//     value: "is-between",
//     label: "is between",
//   },
//   {
//     value: "is-greater-than",
//     label: "is greater than",
//   },
//   {
//     value: "is-less-than",
//     label: "is less than",
//   },
// ];

export const transactions: Transaction[] = [
  {
    purchased: "John Doe",
    status: "submitted",
    merchant: "Migros",
    category: "US-West 1",
    amount: 22.35,
    lastEdited: "23/09/2023 13:00",
  },
  {
    purchased: "Jane Smith",
    status: "submitted",
    merchant: "Coop",
    category: "US-East 2",
    amount: 41.5,
    lastEdited: "22/09/2023 10:45",
  },
  {
    purchased: "Alejandro Garcia",
    status: "submitted",
    merchant: "SBB",
    category: "EU-West 1",
    amount: 41.5,
    lastEdited: "17/05/2021 08:32",
  },
  {
    purchased: "Wei Zhang",
    status: "pending",
    merchant: "Coffee Bachmann",
    category: "US-West 2",
    amount: 5.6,
    lastEdited: "10/11/2022 15:24",
  },
  {
    purchased: "Maria Rossi",
    status: "submitted",
    merchant: "Vercel",
    category: "US-East 1",
    amount: 110,
    lastEdited: "05/06/2023 12:16",
  },
  {
    purchased: "Nina Müller",
    status: "declined",
    merchant: "Netlify",
    category: "EU-North 1",
    amount: 90,
    lastEdited: "23/01/2022 11:11",
  },
  {
    purchased: "Liam O'Sullivan",
    status: "submitted",
    merchant: "Loops",
    category: "US-West 1",
    amount: 20,
    lastEdited: "14/03/2023 14:45",
  },
  {
    purchased: "Amir Fleischlin",
    status: "pending",
    merchant: "Selecta",
    category: "EU-Central 1",
    amount: 3.9,
    lastEdited: "12/02/2023 09:12",
  },
  {
    purchased: "Yuki Tanaka",
    status: "submitted",
    merchant: "Zug Lawyers",
    category: "US-East 1",
    amount: 3874.5,
    lastEdited: "19/08/2022 16:03",
  },
  {
    purchased: "Fatima Al-Farsi",
    status: "submitted",
    merchant: "Tchibo",
    category: "EU-West 1",
    amount: 5.6,
    lastEdited: "29/11/2021 17:25",
  },
  {
    purchased: "Olga Ivanova",
    status: "submitted",
    merchant: "GoDaddy",
    category: "US-West 2",
    amount: 120,
    lastEdited: "07/12/2023 07:14",
  },
  {
    purchased: "Pierre Dubois",
    status: "submitted",
    merchant: "Swiss Airline",
    category: "EU-Central 1",
    amount: 951.3,
    lastEdited: "28/04/2023 10:45",
  },
  {
    purchased: "Sara Johansson",
    status: "submitted",
    merchant: "Blue Bottle Coffee",
    category: "US-East 2",
    amount: 8.5,
    lastEdited: "03/10/2022 08:33",
  },
  {
    purchased: "Ahmed Hassan",
    status: "submitted",
    merchant: "Starbucks Coffee",
    category: "US-West 1",
    amount: 6.9,
    lastEdited: "22/07/2022 14:16",
  },
  {
    purchased: "Emily Brown",
    status: "declined",
    merchant: "Uber",
    category: "EU-North 1",
    amount: 45.6,
    lastEdited: "18/01/2022 12:45",
  },
  {
    purchased: "Carlos Sanchez",
    status: "submitted",
    merchant: "Uber",
    category: "US-East 1",
    amount: 55.1,
    lastEdited: "05/06/2021 18:33",
  },
  {
    purchased: "Hannah Kim",
    status: "submitted",
    merchant: "SBB",
    category: "EU-West 1",
    amount: 80.25,
    lastEdited: "11/05/2023 11:00",
  },
  {
    purchased: "David Johnson",
    status: "submitted",
    merchant: "Steelcase",
    category: "US-West 2",
    amount: 290.3,
    lastEdited: "19/09/2023 17:17",
  },
  {
    purchased: "Linda Anderson",
    status: "submitted",
    merchant: "Digitec Galaxus AG",
    category: "US-East 2",
    amount: 699.9,
    lastEdited: "27/03/2023 14:28",
  },
];
