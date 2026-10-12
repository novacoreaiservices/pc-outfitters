import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Volume2,
  VolumeX,
  Wrench,
} from "lucide-react";
import { Film } from "@/components/site/film";
import { Reveal } from "@/components/site/reveal";
import { SiteLayout } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { brands, builds, services, site, stats, testimonials, values } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <BrandRail />
      <Stats />
      <ServicesPreview />
      <Why />
      <Interlude />
      <BuildsPreview />
      <Voice />
      <VisitCta />
    </SiteLayout>
  );
}

function Hero() {
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative min-h-dvh overflow-hidden">
      <div className="absolute inset-0">
        <Film
          src="/images/hero.mp4"
          poster="/images/hero.jpg"
          label="Custom-built PC glowing on the shop bench"
          muted={muted}
        />
      </div>
      <div className="hero-vignette" />
      <div className="hero-grain" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-4 pb-16 pt-28 pointer-events-none sm:px-6 lg:pb-20">
        <div className="hero-copy pointer-events-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-fg/70">
            Windsor–Essex · Since {site.founded}
          </p>
          <h1 className="mt-4 text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-fg sm:text-6xl lg:text-[5.25rem]">
            Outfit your next computer.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-fg/75 sm:text-lg">
            Custom builds, honest repairs, and next-day parts — from a shop that still
            answers the phone. We service every make and model, Macs included.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Book a drop-off
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={site.phoneHref}>
                <Phone />
                {site.phone}
              </a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-fg/55">
            In-house service from $75 · Two-year warranty on new systems
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between gap-4">
          <div className="scroll-cue hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-fg/50 sm:flex">
            <ArrowDown className="size-3.5" />
            The bench
          </div>
          <button
            type="button"
            className="pointer-events-auto ml-auto inline-flex h-11 items-center gap-2 rounded-md bg-bg/70 px-3 text-xs font-medium uppercase tracking-[0.16em] text-fg shadow-[0_0_0_1px_rgb(255_255_255_/_0.12)] backdrop-blur-md transition-transform duration-150 active:scale-[0.96]"
            onClick={() => setMuted((m) => !m)}
            aria-pressed={!muted}
          >
            {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            {muted ? "Sound" : "Mute"}
          </button>
        </div>
      </div>
    </section>
  );
}

function BrandRail() {
  const loop = [...brands, ...brands];
  return (
    <section className="border-y border-border bg-surface/60 py-5" aria-label="Brands we carry">
      <div className="overflow-hidden">
        <div className="marquee-track gap-10 px-6">
          {loop.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="shrink-0 font-mono text-xs uppercase tracking-[0.22em] text-subtle"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface px-5 py-7 sm:px-6">
            <p className="font-mono text-2xl font-medium tabular-nums tracking-tight text-fg sm:text-3xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">The work</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-lg text-3xl font-medium tracking-[-0.03em] text-fg sm:text-4xl">
            Repair, recover, rebuild.
          </h2>
          <Button asChild variant="ghost">
            <Link to="/services">
              All services
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((s, i) => (
          <Reveal key={s.slug} delay={i * 60}>
            <Link
              to="/services"
              hash={s.slug}
              className="group flex h-full flex-col rounded-2xl bg-surface p-5 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)] transition-[box-shadow,transform] duration-200 hover:shadow-[0_0_0_1px_rgb(255_255_255_/_0.16)] hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-medium text-fg">{s.title}</h3>
                <span className="shrink-0 font-mono text-sm text-muted">{s.price}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-fg">
                Details
                <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">Why this shop</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-fg sm:text-4xl">
            Speed. Quality. Fun. Business.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            The original shop copy still holds. We do not wipe a drive to hide a problem,
            and we will tell you when a repair is not worth doing.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <ShieldCheck className="mt-0.5 size-4 text-primary" />
              Two-year parts and labour on new systems
            </li>
            <li className="flex gap-3">
              <Clock3 className="mt-0.5 size-4 text-primary" />
              Most orders next business day
            </li>
            <li className="flex gap-3">
              <Wrench className="mt-0.5 size-4 text-primary" />
              Install and burn-in free on parts bought here
            </li>
          </ul>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {values.map((v, i) => (
            <Reveal key={v.key} delay={i * 70}>
              <article className="h-full rounded-xl bg-elevated p-5 shadow-[0_0_0_1px_rgb(255_255_255_/_0.07)]">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{v.key}</p>
                <h3 className="mt-2 text-lg font-medium text-fg">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Interlude() {
  const [muted, setMuted] = useState(true);

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">On the bench</p>
          <h2 className="mt-3 max-w-lg text-3xl font-medium tracking-[-0.03em] text-fg sm:text-4xl">
            The machine, as it sits.
          </h2>
        </Reveal>
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-surface shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]">
          <div className="relative aspect-[21/9]">
            <Film
              src="/images/bench-film.mp4"
              poster="/images/bench-film.jpg"
              label="Custom PC on the shop bench, slow push-in"
              muted={muted}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg/80">
              We keep the data
            </p>
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-bg/70 px-3 text-xs font-medium uppercase tracking-[0.16em] text-fg shadow-[0_0_0_1px_rgb(255_255_255_/_0.12)] backdrop-blur-md transition-transform duration-150 active:scale-[0.96]"
              onClick={() => setMuted((m) => !m)}
              aria-pressed={!muted}
            >
              {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              {muted ? "Sound" : "Mute"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildsPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">Machines</p>
        <h2 className="mt-3 max-w-lg text-3xl font-medium tracking-[-0.03em] text-fg sm:text-4xl">
          Built for the job you actually have.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {builds.map((b, i) => (
          <Reveal key={b.slug} delay={i * 80}>
            <Link
              to="/builds"
              className="group block overflow-hidden rounded-2xl bg-surface shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] img-frame"
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{b.kicker}</p>
                <h3 className="mt-1 text-xl font-medium text-fg">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Voice() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">From the bench notes</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-fg sm:text-4xl">
            They will not upsell you.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <blockquote className="flex h-full flex-col rounded-2xl bg-elevated p-6 shadow-[0_0_0_1px_rgb(255_255_255_/_0.07)]">
                <p className="flex-1 text-[15px] leading-relaxed text-fg/90">“{t.quote}”</p>
                <footer className="mt-6 text-sm text-muted">
                  <span className="text-fg">{t.name}</span>
                  <span className="mx-2 text-subtle">·</span>
                  {t.place}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Film
          src="/images/shop.mp4"
          poster="/images/shop-floor.jpg"
          label="Inside the PC Outfitters shop"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/25" />
      <div className="relative mx-auto flex min-h-[28rem] max-w-6xl items-center px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">Drop in</p>
          <h2 className="mt-3 max-w-md text-4xl font-medium tracking-[-0.03em] text-fg sm:text-5xl">
            Behind Devonshire Mall.
          </h2>
          <p className="mt-4 flex max-w-md items-start gap-2 text-muted">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {site.address.line1}, {site.address.city}, {site.address.region} {site.address.postal}
          </p>
          <p className="mt-2 max-w-md text-sm text-subtle">{site.address.note}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/contact">Get a quote</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={site.mapLink} target="_blank" rel="noreferrer">
                Open map
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
