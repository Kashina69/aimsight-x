type RoleConfig = {
  label: string;
  pill: string;
  headline: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  style: "participant" | "enterprise";
};


const ROLE_CONFIG: Record<AuthRole, RoleConfig> = {
  participant: {
    label: "Participant mode",
    pill: "Participant mode",
    headline: "Built for\npeople\nlike you.",
    description:
      "Join thousands of participants building skills, exploring opportunities, and leveling up every day.",
    stats: [
      { value: "48K+", label: "Active users" },
      { value: "2.4K", label: "Events monthly" },
      { value: "99%", label: "Satisfaction rate" },
    ],
    style: "participant",
  },
  enterprise: {
    label: "Enterprise mode",
    pill: "Enterprise mode",
    headline: "Scale your\nbusiness\nfaster.",
    description:
      "Powerful tools for companies to host, manage, and grow programs at scale with full analytics.",
    stats: [
      { value: "120+", label: "Teams onboarded" },
      { value: "88%", label: "Retention rate" },
      { value: "24/7", label: "Support coverage" },
    ],
    style: "enterprise",
  },
  admin: {
    label: "Admin mode",
    pill: "Admin mode",
    headline: "Restricted\nadmin\naccess.",
    description:
      "Admin access is reserved for system operators and trusted staff only.",
    stats: [
      { value: "0", label: "Guest access" },
      { value: "3", label: "Security layers" },
      { value: "24/7", label: "Monitoring" },
    ],
    style: "enterprise",
  },
};


export default ROLE_CONFIG