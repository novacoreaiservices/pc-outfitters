import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SiteLayout } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { brands, builds, parts } from "@/lib/site";

export const Route = createFileRoute("/builds")({
  component: BuildsPage,
  head: () => ({
    meta: [
      { title: "Custom Builds — PC Outfitters" },
      {
        name: "description",
        content:
          "Custom gaming PCs, office machines, and workstations built in Windsor. Two-year parts and labour. Trade-ins welcome.",
      },
    ],
  }),
});

function BuildsPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 sm:pt-28">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">Custom builds</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-medium tracking-[-0.03em] text-fg sm:text-5xl">
            Spec it to the work. Then burn it in.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Gaming rigs, quiet office boxes, SolidWorks workstations, and servers.
            New systems from PCO include a two-year parts and labour warranty.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-4 pb-20 sm:px-6">
        {builds.map((b, i) => (
          <Reveal key={b.slug}>
            <article className="grid items-center gap-8 overflow-hidden rounded-2xl bg-surface shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)] lg:grid-cols-2">
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <img src={b.image} alt={b.title} className="aspect-[3/2] w-full object-cover img-frame" />
              </div>
              <div className="p-6 sm:p-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{b.kicker}</p>
                <h2 className="mt-2 text-3xl font-medium tracking-[-0.03em] text-fg">{b.title}</h2>
                <p className="mt-3 text-muted">{b.body}</p>
                <ul className="mt-6 space-y-2">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-fg">
                      <Check className="mt-0.5 size-4 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8">
                  <Link to="/contact">Talk through a spec</Link>
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-fg">Parts, next day</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Order 9–5 Monday to Friday. Hardware you buy here is installed and burned in free.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {parts.map((p) => (
              <div
                key={p}
                className="rounded-lg bg-elevated px-3 py-4 text-center text-sm text-fg shadow-[0_0_0_1px_rgb(255_255_255_/_0.06)]"
              >
                {p}
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-subtle">
            {brands.join("  ·  ")}
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
