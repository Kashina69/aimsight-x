"use client";

import DashboardLayout from "~/components/layouts/DashboardLayout";

export default function EnterpriseLayout({
  children,
}) {
  return <DashboardLayout rootPath="/enterprise">{children}</DashboardLayout>;
}
