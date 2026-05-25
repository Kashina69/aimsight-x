import { A } from "@solidjs/router";
import type { JSX } from "solid-js";

const actionClass =
  "font-display px-5 h-12 bg-surface border-2 border-ink shadow-neo active:shadow-neo-none active:translate-x-1 active:translate-y-1 transition-all duration-75 inline-flex items-center justify-center";
const inputClass =
  "w-full border-2 border-ink bg-bg px-3 py-2 font-body text-sm text-ink focus:outline-none";
const labelClass = "font-body text-xs text-ink";

type AuthLayoutProps = {
  title: string;
  subtitle?: string;
  children: JSX.Element;
};

export function AuthLayout(props: AuthLayoutProps) {
  return (
    <main class="min-h-screen bg-bg text-ink px-6 py-10 font-body">
      <div class="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header class="border-2 border-ink bg-surface p-6 shadow-neo">
          <h1 class="font-display text-3xl text-ink-dark">{props.title}</h1>
          {props.subtitle ? (
            <p class="mt-2 font-body text-sm text-ink">{props.subtitle}</p>
          ) : null}
        </header>
        {props.children}
      </div>
    </main>
  );
}

type AuthCardProps = {
  title: string;
  children: JSX.Element;
  footer?: JSX.Element;
};

export function AuthCard(props: AuthCardProps) {
  return (
    <section class="border-2 border-ink bg-bg p-6 shadow-neo">
      <h2 class="font-display text-xl text-ink-dark">{props.title}</h2>
      <div class="mt-4 flex flex-col gap-4">{props.children}</div>
      {props.footer ? <div class="mt-4">{props.footer}</div> : null}
    </section>
  );
}

type AuthChoiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function AuthChoiceCard(props: AuthChoiceCardProps) {
  return (
    <A
      href={props.href}
      class="border-2 border-ink bg-bg p-5 shadow-neo transition-all duration-75 active:shadow-neo-none active:translate-x-1 active:translate-y-1"
    >
      <div class="flex flex-col gap-2">
        <h3 class="font-display text-lg text-ink-dark">{props.title}</h3>
        <p class="font-body text-sm text-ink leading-relaxed">{props.description}</p>
        <span class={actionClass}>Continue</span>
      </div>
    </A>
  );
}

export function AuthSelection() {
  return (
    <AuthLayout
      title="Choose your path"
      subtitle="Select how you want to continue."
    >
      <div class="grid gap-4 md:grid-cols-2">
        <AuthChoiceCard
          title="Enterprise"
          description="For agencies and teams managing projects."
          href="/enterprise/signin"
        />
        <AuthChoiceCard
          title="Participant"
          description="For shoppers and study participants."
          href="/participant/signin"
        />
      </div>
      <section class="border-2 border-ink bg-surface p-4 shadow-neo">
        <div class="flex flex-col gap-2">
          <h3 class="font-display text-base text-ink-dark">Admin access</h3>
          <p class="font-body text-sm text-ink">
            Admins sign in with a dedicated portal.
          </p>
          <A class={actionClass} href="/admin/signin">
            Admin sign in
          </A>
        </div>
      </section>
    </AuthLayout>
  );
}

type AuthFieldProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  autoComplete?: string;
};

function AuthField(props: AuthFieldProps) {
  return (
    <label class="flex flex-col gap-2" for={props.id}>
      <span class={labelClass}>{props.label}</span>
      <input
        id={props.id}
        name={props.id}
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        autocomplete={props.autoComplete}
        class={inputClass}
      />
    </label>
  );
}

type AuthFormProps = {
  variant: "signin" | "signup";
  submitLabel?: string;
  onSubmit?: JSX.EventHandlerUnion<HTMLFormElement, Event>;
};

export function AuthForm(props: AuthFormProps) {
  const isSignup = () => props.variant === "signup";
  const submitLabel =
    props.submitLabel ?? (isSignup() ? "Sign up" : "Sign in");

  return (
    <form class="flex flex-col gap-4" onSubmit={props.onSubmit}>
      {isSignup() ? (
        <AuthField
          id="name"
          label="Full name"
          placeholder="Your name"
          autoComplete="name"
        />
      ) : null}
      <AuthField
        id="email"
        label="Email"
        type="email"
        placeholder="you@company.com"
        autoComplete="email"
      />
      <AuthField
        id="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        autoComplete={isSignup() ? "new-password" : "current-password"}
      />
      <button type="submit" class={actionClass}>
        {submitLabel}
      </button>
    </form>
  );
}

export function AuthActions(props: { children: JSX.Element }) {
  return <div class="flex flex-wrap gap-3">{props.children}</div>;
}

export function AuthButton(props: { href: string; children: JSX.Element }) {
  return (
    <A class={actionClass} href={props.href}>
      {props.children}
    </A>
  );
}

export function AuthMutedText(props: { children: JSX.Element }) {
  return <p class="font-body text-sm text-ink">{props.children}</p>;
}

export default AuthSelection;
