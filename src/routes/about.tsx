export default function About() {
  return (
    <main class="min-h-screen bg-bg text-ink px-6 py-10 font-body">
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header class="border-2 border-ink bg-surface p-6 shadow-neo">
          <h1 class="font-display text-4xl text-ink-dark">About Aimsight</h1>
          <p class="mt-3 text-base text-ink leading-relaxed text-justify">
            We help teams turn raw feedback into clear, decision-ready insight.
            Our work blends research rigor with a human narrative.
          </p>
        </header>

        <section class="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div class="flex flex-col gap-6">
            <article class="border-2 border-ink bg-bg p-6 shadow-neo">
              <h2 class="font-display text-2xl text-ink-dark">What we believe</h2>
              <p class="mt-3 text-base text-ink leading-relaxed text-justify">
                Insight should be direct, visual, and grounded in real stories. We
                build systems that keep researchers close to people, not just
                dashboards.
              </p>
            </article>
            <article class="border-2 border-ink bg-bg p-6 shadow-neo">
              <h2 class="font-display text-2xl text-ink-dark">How we work</h2>
              <p class="mt-3 text-base text-ink leading-relaxed text-justify">
                From discovery to delivery, we keep a tight loop of listening,
                synthesis, and action. Every artifact is built to be shared
                quickly and confidently.
              </p>
            </article>
          </div>

          <aside class="flex flex-col gap-6">
            <div class="border-2 border-ink bg-bg p-6 shadow-neo">
              <h3 class="font-display text-lg text-ink-dark">What we do</h3>
              <ul class="mt-4 flex flex-col gap-3 text-sm text-ink">
                <li>Research operations</li>
                <li>Participant care</li>
                <li>Enterprise dashboards</li>
                <li>Insight storytelling</li>
              </ul>
            </div>
            <div class="border-2 border-ink bg-bg p-6 shadow-neo">
              <h3 class="font-display text-lg text-ink-dark">Contact</h3>
              <p class="mt-3 text-sm text-ink">
                hello@aimsight.co
              </p>
              <p class="text-sm text-ink">Remote-first, global team.</p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
