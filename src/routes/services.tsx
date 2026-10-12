import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SiteLayout } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { extras, rates, services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — PC Outfitters" },
      {
        name: "description",
        content:
          "Computer repair, on-site service, data recovery, clones, and hardware evaluation in Windsor, Ontario. Clear bench rates.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">Services</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-medium tracking-[-0.03em] text-fg sm:text-5xl">
            All makes. All models. No reformat-first.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            PCs, Macs, notebooks, and netbooks. We dust the chassis, keep your data,
            and only replace what is actually broken.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/repair-bench.jpg"
            alt="Open motherboard and tools on the repair bench"
            className="max-h-[420px] w-full object-cover img-frame"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <article
                id={s.slug}
                className="scroll-mt-24 rounded-2xl bg-surface p-6 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-xl font-medium text-fg">{s.title}</h2>
                  <span className="font-mono text-sm text-muted">{s.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-fg">Also on the menu</h2>
            <div className="mt-6 grid gap-4">
              {extras.map((e) => (
                <article
                  key={e.title}
                  className="rounded-xl bg-elevated p-5 shadow-[0_0_0_1px_rgb(255_255_255_/_0.07)]"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-medium text-fg">{e.title}</h3>
                    <span className="font-mono text-xs text-subtle">{e.note}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{e.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/laptop-repair.jpg"
                alt="Laptop hardware repair in progress"
                className="h-full max-h-[520px] w-full object-cover img-frame"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-fg">Current bench rates</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Posted as on the shop floor. Call if the job is unusual — we would rather quote than surprise you.
          </p>
        </Reveal>
        <div className="mt-8 divide-y divide-border rounded-2xl bg-surface shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]">
          {rates.map((r) => (
            <div key={r.label} className="flex items-center justify-between gap-4 px-5 py-4">
              <span className="text-sm text-muted">{r.label}</span>
              <span className="font-mono text-sm text-fg">{r.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/contact">
              Book this work
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/builds">See custom builds</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
