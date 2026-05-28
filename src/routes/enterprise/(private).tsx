import type { RouteSectionProps } from "@solidjs/router";
import DashboardLayout from "~/components/layouts/DashboardLayout";

export default function EnterprisePrivateLayout(props: RouteSectionProps) {
  return <DashboardLayout rootPath="/enterprise">{props.children}</DashboardLayout>;
}
