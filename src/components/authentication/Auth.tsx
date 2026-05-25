import { A } from "@solidjs/router";
import { createSignal, Show } from "solid-js";

type AuthRole = "participant" | "enterprise" | "admin";
type AuthTab = "login" | "signup";

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

export function AuthSelection() {
  const shellClass =
    "relative min-h-screen overflow-x-hidden bg-[#f7f5f0] text-[#1a1a1a] [font-family:'Space_Grotesk',sans-serif]" +
    " before:content-[''] before:fixed before:inset-0 before:pointer-events-none before:z-0" +
    " before:[background-image:linear-gradient(rgba(26,26,26,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.04)_1px,transparent_1px)]" +
    " before:[background-size:36px_36px]";

  return (
    <div class={shellClass}>
      <div class="relative z-10 min-h-screen px-5 py-10 md:px-10">
        <div class="hidden md:flex absolute left-9 top-7 items-center gap-2.5">
          <div class="relative flex h-9 w-9 items-center justify-center border-2 border-[#1a1a1a] bg-[#1a1a1a]">
            <div class="absolute h-4 w-4 rotate-45 border-2 border-[#c8b89a]" />
            <div class="absolute h-1.5 w-1.5 rotate-45 bg-[#c8b89a]" />
          </div>
          <span class="text-[24px] tracking-[4px] text-[#1a1a1a] [font-family:'Bebas_Neue',sans-serif]">
            Aimsight
          </span>
        </div>
        <div class="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col items-center justify-center text-center">
          <div class="mb-14">
            <div class="mb-3 text-[11px] uppercase tracking-[4px] text-[#1a1a1a] opacity-40 [font-family:'DM_Mono',monospace]">
              // welcome — choose your role
            </div>
            <h1 class="text-[clamp(48px,7vw,82px)] leading-[0.92] tracking-[2px] text-[#1a1a1a] [font-family:'Bebas_Neue',sans-serif]">
              WHO ARE<br />
              YOU <span class="text-transparent [-webkit-text-stroke:2px_#1a1a1a]">TODAY?</span>
            </h1>
            <p class="mx-auto mt-4 max-w-[360px] text-[14px] leading-[1.6] text-[#1a1a1a] opacity-45">
              Select your account type to continue. Each role unlocks a tailored
              experience.
            </p>
          </div>

          <div class="flex flex-wrap justify-center gap-7">
            <A
              class="w-[300px] border-2 border-[#1a1a1a] bg-[#f7f5f0] shadow-[6px_6px_0_#1a1a1a] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[9px_9px_0_#1a1a1a] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_#1a1a1a]"
              href="/participant/signin"
            >
              <div class="relative border-b-2 border-[#1a1a1a] bg-[#c8b89a] px-7 pb-5 pt-7">
                <div class="absolute right-3.5 top-3.5 border-[1.5px] border-[#1a1a1a] bg-[rgba(247,245,240,0.5)] px-2 py-[3px] text-[9px] tracking-[2px] text-[#1a1a1a] opacity-70 [font-family:'DM_Mono',monospace]">
                  FREE TIER
                </div>
                <div class="mb-4 flex h-[60px] w-[60px] items-center justify-center border-2 border-[#1a1a1a] bg-[#1a1a1a]">
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <circle
                      cx="16"
                      cy="10"
                      r="5"
                      stroke="#c8b89a"
                      stroke-width="2"
                    />
                    <path
                      d="M5 28c0-6.075 4.925-11 11-11s11 4.925 11 11"
                      stroke="#c8b89a"
                      stroke-width="2"
                      stroke-linecap="square"
                    />
                  </svg>
                </div>
                <h2 class="text-[34px] leading-none tracking-[2px] text-[#1a1a1a] [font-family:'Bebas_Neue',sans-serif]">
                  PARTICIPANT
                </h2>
                <div class="mt-1 text-[12px] tracking-[1px] text-[#1a1a1a] opacity-60 [font-family:'DM_Mono',monospace]">
                  Individual · Explorer · Creator
                </div>
              </div>
              <div class="px-7 pb-7 pt-5">
                <ul class="mb-6 flex flex-col gap-2 text-left text-[13px] font-medium text-[#1a1a1a] opacity-75">
                  <li class="flex items-center gap-2.5">
                    <span class="h-[6px] w-[6px] border-[1.5px] border-[#1a1a1a] bg-[#c8b89a]" />
                    Access all public events
                  </li>
                  <li class="flex items-center gap-2.5">
                    <span class="h-[6px] w-[6px] border-[1.5px] border-[#1a1a1a] bg-[#c8b89a]" />
                    Personal dashboard & portfolio
                  </li>
                  <li class="flex items-center gap-2.5">
                    <span class="h-[6px] w-[6px] border-[1.5px] border-[#1a1a1a] bg-[#c8b89a]" />
                    Connect with 10K+ community
                  </li>
                  <li class="flex items-center gap-2.5">
                    <span class="h-[6px] w-[6px] border-[1.5px] border-[#1a1a1a] bg-[#c8b89a]" />
                    Track learning progress
                  </li>
                </ul>
                <span class="block w-full border-2 border-[#1a1a1a] bg-[#1a1a1a] px-3 py-3 text-center text-[13px] font-bold uppercase tracking-[1.5px] text-[#f7f5f0] [font-family:'Space_Grotesk',sans-serif]">
                  Join as Participant →
                </span>
              </div>
            </A>

            <A
              class="w-[300px] border-2 border-[#1a1a1a] bg-[#f7f5f0] shadow-[6px_6px_0_#1a1a1a] transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[9px_9px_0_#1a1a1a] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_#1a1a1a]"
              href="/enterprise/signin"
            >
              <div class="relative border-b-2 border-[#1a1a1a] bg-[#8fa3a8] px-7 pb-5 pt-7">
                <div class="absolute right-3.5 top-3.5 border-[1.5px] border-[#1a1a1a] bg-[rgba(247,245,240,0.5)] px-2 py-[3px] text-[9px] tracking-[2px] text-[#1a1a1a] opacity-70 [font-family:'DM_Mono',monospace]">
                  PRO TIER
                </div>
                <div class="mb-4 flex h-[60px] w-[60px] items-center justify-center border-2 border-[#1a1a1a] bg-[#1a1a1a]">
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <rect
                      x="4"
                      y="14"
                      width="24"
                      height="14"
                      stroke="#8fa3a8"
                      stroke-width="2"
                    />
                    <path
                      d="M11 14v-3a5 5 0 0110 0v3"
                      stroke="#8fa3a8"
                      stroke-width="2"
                    />
                    <rect
                      x="13"
                      y="19"
                      width="6"
                      height="4"
                      fill="#8fa3a8"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <h2 class="text-[34px] leading-none tracking-[2px] text-[#1a1a1a] [font-family:'Bebas_Neue',sans-serif]">
                  ENTERPRISE
                </h2>
                <div class="mt-1 text-[12px] tracking-[1px] text-[#1a1a1a] opacity-60 [font-family:'DM_Mono',monospace]">
                  Company · Agency · Scale
                </div>
              </div>
              <div class="px-7 pb-7 pt-5">
                <ul class="mb-6 flex flex-col gap-2 text-left text-[13px] font-medium text-[#1a1a1a] opacity-75">
                  <li class="flex items-center gap-2.5">
                    <span class="h-[6px] w-[6px] border-[1.5px] border-[#1a1a1a] bg-[#8fa3a8]" />
                    Host unlimited events & programs
                  </li>
                  <li class="flex items-center gap-2.5">
                    <span class="h-[6px] w-[6px] border-[1.5px] border-[#1a1a1a] bg-[#8fa3a8]" />
                    Advanced analytics & reporting
                  </li>
                  <li class="flex items-center gap-2.5">
                    <span class="h-[6px] w-[6px] border-[1.5px] border-[#1a1a1a] bg-[#8fa3a8]" />
                    Team management & SSO
                  </li>
                  <li class="flex items-center gap-2.5">
                    <span class="h-[6px] w-[6px] border-[1.5px] border-[#1a1a1a] bg-[#8fa3a8]" />
                    Dedicated account support
                  </li>
                </ul>
                <span class="block w-full border-2 border-[#1a1a1a] bg-[#1a1a1a] px-3 py-3 text-center text-[13px] font-bold uppercase tracking-[1.5px] text-[#f7f5f0] [font-family:'Space_Grotesk',sans-serif]">
                  Join as Enterprise →
                </span>
              </div>
            </A>
          </div>
        </div>
      </div>
    </div>
  );
}
type AuthRolePageProps = {
  role: AuthRole;
  initialTab?: AuthTab;
};

export function AuthRolePage(props: AuthRolePageProps) {
  const config = () => ROLE_CONFIG[props.role];
  const [tab, setTab] = createSignal<AuthTab>(props.initialTab ?? "login");
  const [remember, setRemember] = createSignal(false);
  const [acceptedTerms, setAcceptedTerms] = createSignal(false);
  const showSignup = () => props.role !== "admin";
  const activeTabClass = () =>
    config().style === "participant"
      ? "bg-[#c8b89a] opacity-100"
      : "bg-[#8fa3a8] opacity-100";
  const shellClass =
    "relative min-h-screen overflow-x-hidden bg-[#f7f5f0] text-[#1a1a1a] [font-family:'Space_Grotesk',sans-serif]" +
    " before:content-[''] before:fixed before:inset-0 before:pointer-events-none before:z-0" +
    " before:[background-image:linear-gradient(rgba(26,26,26,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.04)_1px,transparent_1px)]" +
    " before:[background-size:36px_36px]";

  return (
    <div class={shellClass}>
      <div class="relative z-10 flex min-h-screen flex-col md:flex-row">
        <div
          class={`hidden w-[380px] flex-shrink-0 border-r-2 border-[#1a1a1a] md:flex ${
            config().style === "participant" ? "bg-[#c8b89a]" : "bg-[#8fa3a8]"
          }`}
        >
          <div class="relative flex flex-1 flex-col px-9 py-11">
            <A
              class="mb-11 inline-flex w-fit items-center gap-2 border-2 border-[#1a1a1a] bg-[#1a1a1a] px-3.5 py-1.5 text-[11px] tracking-[1px] text-[#f7f5f0] shadow-[3px_3px_0_rgba(0,0,0,0.25)] transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_rgba(0,0,0,0.25)] [font-family:'DM_Mono',monospace]"
              href="/"
            >
              ← Back
            </A>

            <div class="mb-9 flex items-center gap-2.5">
              <div class="relative flex h-10 w-10 items-center justify-center border-2 border-[#1a1a1a] bg-[#1a1a1a]">
                <div class="absolute h-[17px] w-[17px] rotate-45 border-2 border-[#f7f5f0]" />
                <div class="absolute h-[7px] w-[7px] rotate-45 bg-[#f7f5f0]" />
              </div>
              <span class="text-[26px] tracking-[4px] text-[#1a1a1a] [font-family:'Bebas_Neue',sans-serif]">
                Aimsight
              </span>
            </div>

            <div class="text-[50px] leading-[0.95] tracking-[1px] text-[#1a1a1a] [font-family:'Bebas_Neue',sans-serif]">
              {config()
                .headline
                .split("\n")
                .map((line, index) => (
                  <span>
                    {index > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
            </div>
            <p class="mt-4 max-w-[260px] text-[13px] leading-[1.65] text-[#1a1a1a] opacity-60 [font-family:'DM_Mono',monospace]">
              {config().description}
            </p>

            <div class="mt-auto flex flex-col gap-2.5 border-t-[1.5px] border-[rgba(26,26,26,0.2)] pt-8">
              {config().stats.map((stat) => (
                <div class="flex items-center gap-3">
                  <div class="min-w-[64px] text-[24px] text-[#1a1a1a] [font-family:'Bebas_Neue',sans-serif]">
                    {stat.value}
                  </div>
                  <div class="text-[10px] uppercase tracking-[2px] text-[#1a1a1a] opacity-50 [font-family:'DM_Mono',monospace]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="pointer-events-none absolute bottom-7 right-[-50px] h-[160px] w-[160px] rotate-[18deg] border-[3px] border-[#1a1a1a] opacity-7" />
        </div>

        <div class="flex flex-1 items-center justify-center bg-[#f7f5f0] px-6 py-10">
          <div class="w-full max-w-[400px]">
            <div
              class={`mb-6 inline-flex items-center gap-2 border-2 border-[#1a1a1a] px-3 py-1.5 text-[10px] uppercase tracking-[2px] text-[#1a1a1a] [font-family:'DM_Mono',monospace] ${
                config().style === "participant" ? "bg-[#c8b89a]" : "bg-[#8fa3a8]"
              }`}
            >
              <div class="h-[6px] w-[6px] rounded-full bg-[#1a1a1a]" />
              <span>{config().pill}</span>
            </div>

            <Show when={showSignup()}>
              <div class="mb-8 flex border-2 border-[#1a1a1a] bg-[#f7f5f0] shadow-[4px_4px_0_#1a1a1a]">
                <button
                  class={`flex-1 border-r-2 border-[#1a1a1a] px-3 py-3 text-[13px] font-bold uppercase tracking-[1.5px] text-[#1a1a1a] transition-all duration-150 [font-family:'Space_Grotesk',sans-serif] ${
                    tab() === "login" ? `opacity-100 ${activeTabClass()}` : "opacity-35"
                  }`}
                  type="button"
                  onClick={() => setTab("login")}
                >
                  Login
                </button>
                <button
                  class={`flex-1 px-3 py-3 text-[13px] font-bold uppercase tracking-[1.5px] text-[#1a1a1a] transition-all duration-150 [font-family:'Space_Grotesk',sans-serif] ${
                    tab() === "signup" ? `opacity-100 ${activeTabClass()}` : "opacity-35"
                  }`}
                  type="button"
                  onClick={() => setTab("signup")}
                >
                  Sign up
                </button>
              </div>
            </Show>

            <Show when={tab() === "login"}>
              <div>
                <div class="text-[40px] leading-none tracking-[1px] text-[#1a1a1a] [font-family:'Bebas_Neue',sans-serif]">
                  WELCOME<br />BACK.
                </div>
                <div class="mb-7 mt-1 text-[11px] uppercase tracking-[2px] text-[#1a1a1a] opacity-40 [font-family:'DM_Mono',monospace]">
                  // enter your credentials
                </div>

                <div class="mb-4">
                  <label class="mb-1.5 block text-[10px] uppercase tracking-[2px] text-[#1a1a1a] opacity-55 [font-family:'DM_Mono',monospace]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="w-full border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3.5 py-2.5 text-[14px] font-medium text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all focus:bg-white focus:shadow-[4px_4px_0_#1a1a1a]"
                    placeholder="you@example.com"
                  />
                </div>
                <div class="mb-4">
                  <label class="mb-1.5 block text-[10px] uppercase tracking-[2px] text-[#1a1a1a] opacity-55 [font-family:'DM_Mono',monospace]">
                    Password
                  </label>
                  <input
                    type="password"
                    class="w-full border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3.5 py-2.5 text-[14px] font-medium text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all focus:bg-white focus:shadow-[4px_4px_0_#1a1a1a]"
                    placeholder="••••••••••"
                  />
                </div>

                <div class="mb-5 flex items-center justify-between">
                  <button
                    type="button"
                    class="flex items-center gap-2 text-[13px] font-semibold text-[#1a1a1a]"
                    onClick={() => setRemember(!remember())}
                  >
                    <div
                      class={`flex h-4 w-4 items-center justify-center border-2 border-[#1a1a1a] bg-[#f7f5f0] ${
                        remember()
                          ? config().style === "participant"
                            ? "bg-[#c8b89a]"
                            : "bg-[#8fa3a8]"
                          : ""
                      }`}
                    >
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path
                          d="M1 3.5L3.5 6L8 1"
                          stroke="#1a1a1a"
                          stroke-width="1.8"
                          stroke-linecap="square"
                        />
                      </svg>
                    </div>
                    Remember me
                  </button>
                  <span class="text-[11px] tracking-[1px] text-[#1a1a1a] opacity-45 underline [font-family:'DM_Mono',monospace]">
                    Forgot password?
                  </span>
                </div>

                <button
                  class="w-full border-2 border-[#1a1a1a] bg-[#1a1a1a] px-4 py-3 text-[14px] font-extrabold uppercase tracking-[2px] text-[#f7f5f0] shadow-[4px_4px_0_#1a1a1a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1a1a1a] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#1a1a1a]"
                  type="button"
                >
                  Login to Aimsight →
                </button>

                <div class="my-5 flex items-center gap-3">
                  <div class="h-[1.5px] flex-1 bg-[#1a1a1a] opacity-12" />
                  <span class="text-[10px] uppercase tracking-[2px] text-[#1a1a1a] opacity-35 [font-family:'DM_Mono',monospace]">
                    OR CONTINUE WITH
                  </span>
                  <div class="h-[1.5px] flex-1 bg-[#1a1a1a] opacity-12" />
                </div>

                <div class="flex gap-2.5">
                  <button
                    class="flex flex-1 items-center justify-center gap-2 border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3 py-2.5 text-[13px] font-semibold text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#e8e4dc] hover:shadow-[5px_5px_0_#1a1a1a]"
                    type="button"
                  >
                    <svg width="16" height="16" viewBox="0 0 18 18">
                      <path
                        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                        fill="#4285F4"
                      />
                      <path
                        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                        fill="#34A853"
                      />
                      <path
                        d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9.007 9.007 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </button>
                  <button
                    class="flex flex-1 items-center justify-center gap-2 border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3 py-2.5 text-[13px] font-semibold text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#e8e4dc] hover:shadow-[5px_5px_0_#1a1a1a]"
                    type="button"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1a1a1a">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>
            </Show>

            <Show when={tab() === "signup" && showSignup()}>
              <div>
                <div class="text-[40px] leading-none tracking-[1px] text-[#1a1a1a] [font-family:'Bebas_Neue',sans-serif]">
                  CREATE<br />ACCOUNT.
                </div>
                <div class="mb-7 mt-1 text-[11px] uppercase tracking-[2px] text-[#1a1a1a] opacity-40 [font-family:'DM_Mono',monospace]">
                  // start your journey
                </div>

                <div class="flex gap-3">
                  <div class="mb-4 flex-1">
                    <label class="mb-1.5 block text-[10px] uppercase tracking-[2px] text-[#1a1a1a] opacity-55 [font-family:'DM_Mono',monospace]">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="w-full border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3.5 py-2.5 text-[14px] font-medium text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all focus:bg-white focus:shadow-[4px_4px_0_#1a1a1a]"
                      placeholder="Alex"
                    />
                  </div>
                  <div class="mb-4 flex-1">
                    <label class="mb-1.5 block text-[10px] uppercase tracking-[2px] text-[#1a1a1a] opacity-55 [font-family:'DM_Mono',monospace]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="w-full border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3.5 py-2.5 text-[14px] font-medium text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all focus:bg-white focus:shadow-[4px_4px_0_#1a1a1a]"
                      placeholder="Kim"
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label class="mb-1.5 block text-[10px] uppercase tracking-[2px] text-[#1a1a1a] opacity-55 [font-family:'DM_Mono',monospace]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="w-full border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3.5 py-2.5 text-[14px] font-medium text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all focus:bg-white focus:shadow-[4px_4px_0_#1a1a1a]"
                    placeholder="you@example.com"
                  />
                </div>

                <Show when={props.role === "enterprise"}>
                  <div class="mb-4">
                    <label class="mb-1.5 block text-[10px] uppercase tracking-[2px] text-[#1a1a1a] opacity-55 [font-family:'DM_Mono',monospace]">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      class="w-full border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3.5 py-2.5 text-[14px] font-medium text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all focus:bg-white focus:shadow-[4px_4px_0_#1a1a1a]"
                      placeholder="ACME Corp."
                    />
                  </div>
                </Show>

                <div class="mb-4">
                  <label class="mb-1.5 block text-[10px] uppercase tracking-[2px] text-[#1a1a1a] opacity-55 [font-family:'DM_Mono',monospace]">
                    Password
                  </label>
                  <input
                    type="password"
                    class="w-full border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3.5 py-2.5 text-[14px] font-medium text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all focus:bg-white focus:shadow-[4px_4px_0_#1a1a1a]"
                    placeholder="Min. 8 characters"
                  />
                </div>
                <div class="mb-5">
                  <label class="mb-1.5 block text-[10px] uppercase tracking-[2px] text-[#1a1a1a] opacity-55 [font-family:'DM_Mono',monospace]">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="w-full border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3.5 py-2.5 text-[14px] font-medium text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all focus:bg-white focus:shadow-[4px_4px_0_#1a1a1a]"
                    placeholder="Repeat password"
                  />
                </div>

                <button
                  type="button"
                  class="mb-5 flex items-center gap-2 text-[13px] font-semibold text-[#1a1a1a]"
                  onClick={() => setAcceptedTerms(!acceptedTerms())}
                >
                  <div
                    class={`flex h-4 w-4 items-center justify-center border-2 border-[#1a1a1a] bg-[#f7f5f0] ${
                      acceptedTerms()
                        ? config().style === "participant"
                          ? "bg-[#c8b89a]"
                          : "bg-[#8fa3a8]"
                        : ""
                    }`}
                  >
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path
                        d="M1 3.5L3.5 6L8 1"
                        stroke="#1a1a1a"
                        stroke-width="1.8"
                        stroke-linecap="square"
                      />
                    </svg>
                  </div>
                  I agree to the <u>Terms & Privacy</u>
                </button>

                <button
                  class="w-full border-2 border-[#1a1a1a] bg-[#1a1a1a] px-4 py-3 text-[14px] font-extrabold uppercase tracking-[2px] text-[#f7f5f0] shadow-[4px_4px_0_#1a1a1a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1a1a1a] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#1a1a1a]"
                  type="button"
                >
                  Create My Account →
                </button>
              </div>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthSelection;
