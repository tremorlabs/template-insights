"use client"

import React from "react"
import { Divider } from "@/components/Divider"
import TransactionPolicy from "./_components/TransactionPolicy"
import Approvers from "./_components/Approvers"
import AuditRules from "./_components/AuditRules"

export default function Audit() {
  return (
    <div>
      <AuditRules />
      <Divider className="my-10" />
      <Approvers />
      <Divider className="my-10" />
      <TransactionPolicy />
    </div>
  )
}
