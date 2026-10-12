import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { SiteLayout } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { site, values } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — PC Outfitters" },
      {
        name: "description",
        content:
          "PC Outfitters has outfitted Windsor–Essex for computing since 1997. Honest advice, careful hardware, bilingual in geek and English.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 sm:pt-28">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">About</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-medium tracking-[-0.03em] text-fg sm:text-5xl">
            A full-service shop that still acts like a shop.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Since {site.founded}, PC Outfitters has been the Windsor–Essex counter for
            people who want a machine that fits the job — not a box that fits a quota.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/shop-floor.jpg"
            alt="Inside the PC Outfitters shop"
            className="max-h-[440px] w-full object-cover img-frame"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <h2 className="text-2xl font-medium tracking-[-0.02em] text-fg">The outfitter idea</h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              Let a skilled team outfit you for your computing needs. That line has been on
              the shop site for years because it is still the job: listen to how you work
              (or play), then spec, repair, or replace accordingly.
            </p>
            <p>
              Great care is taken with hardware. Machines are dusted when needed. We look
              for the issue underneath the issue. Data stays on the drive whenever it can —
              we do not reformat as a shortcut. Parts are chosen so the machine has years
              of problem-free operation, not a tidy invoice.
            </p>
            <p>
              Helpful tips are part of the day. We like to think of ourselves as bilingual:
              fluent in geek, and in everyday English.
            </p>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={80}>
          <aside className="rounded-2xl bg-surface p-6 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Shop card</p>
            <dl className="mt-4 space-y-3 text-sm">
              <Row k="Opened" v={`Windsor, ${site.founded}`} />
              <Row k="Counter" v={site.address.line1} />
              <Row k="Warranty" v="2 years parts & labour on new systems" />
              <Row k="Trade-ins" v="Accepted on gaming and desktop builds" />
              <Row k="Languages" v="Geek and English" />
            </dl>
            <img
              src="/images/legacy-logo.png"
              alt="Original PC Outfitters wordmark"
              className="mt-6 h-10 w-auto opacity-80"
            />
          </aside>
        </Reveal>
      </section>

      <section className="mt-10 border-y border-border bg-surface/50">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:grid-cols-2 sm:px-6">
          {values.map((v, i) => (
            <Reveal key={v.key} delay={i * 60}>
              <article className="h-full rounded-2xl bg-elevated p-6 shadow-[0_0_0_1px_rgb(255_255_255_/_0.07)]">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{v.key}</p>
                <h3 className="mt-2 text-xl font-medium text-fg">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-fg">Come see why friends already send people here.</h2>
          <p className="mt-3 max-w-xl text-muted">
            Drop off at the counter, call ahead, or send a note. Same-day parts orders
            weekdays 9–5.
          </p>
          <Button asChild className="mt-6">
            <Link to="/contact">Visit or write</Link>
          </Button>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
      <dt className="text-subtle">{k}</dt>
      <dd className="text-right text-fg">{v}</dd>
    </div>
  );
}
