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