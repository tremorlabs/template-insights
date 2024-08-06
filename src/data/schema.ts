export type Transaction = {
  purchased: string;
  status: string;
  merchant: string;
  category: string;
  amount: number;
  lastEdited: string;
};

export type AggregatedReportData = {
  date: string
  amount: number
  status: "approved" | "blocked"
};

export type DailyTransaction = {
  date: string
  count: number
  level: number
}
