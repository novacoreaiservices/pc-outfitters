import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/site/quote-form";
import { Reveal } from "@/components/site/reveal";
import { SiteLayout } from "@/components/site/layout";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — PC Outfitters" },
      {
        name: "description",
        content:
          "Visit PC Outfitters at 3181 Marentette Ave Unit 2, Windsor. Call (519) 969-0166 or email pcoquote@gmail.com.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 sm:pt-28">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">Contact</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-medium tracking-[-0.03em] text-fg sm:text-5xl">
            Bring the machine. Or just the question.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Counter hours below. If it is a holiday, call first. We would rather you not
            drive for a locked door.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <ul className="space-y-4">
              <Info
                icon={<Phone className="size-4" />}
                label="Phone"
                value={site.phone}
                href={site.phoneHref}
              />
              <Info
                icon={<Mail className="size-4" />}
                label="Email"
                value={site.email}
                href={site.emailHref}
              />
              <Info
                icon={<MapPin className="size-4" />}
                label="Shop"
                value={`${site.address.line1}, ${site.address.city}, ${site.address.region} ${site.address.postal}`}
                href={site.mapLink}
              />
              <li className="flex gap-3 rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]">
                <span className="mt-0.5 text-muted">
                  <Clock3 className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">Hours</p>
                  <ul className="mt-2 space-y-1 text-sm text-fg">
                    {site.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-6">
                        <span className="text-muted">{h.days}</span>
                        <span className="font-mono">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-subtle">{site.hoursNote}</p>
                  <p className="mt-3 text-xs text-subtle">Fax {site.fax}</p>
                </div>
              </li>
            </ul>
            <p className="mt-5 text-sm text-subtle">{site.address.note}</p>
          </Reveal>
          <div className="mt-6 overflow-hidden rounded-2xl bg-surface shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]">
            <div className="relative h-52">
              <img
                src="/images/shop-floor.jpg"
                alt=""
                className="absolute inset-0 size-full object-cover img-frame"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-sm font-medium text-fg">
                  {site.address.line1}
                </p>
                <p className="text-xs text-muted">
                  {site.address.city}, {site.address.region} {site.address.postal}
                </p>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex h-11 items-center rounded-md bg-fg px-4 text-sm font-medium text-bg transition-transform duration-150 active:scale-[0.96]"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="mb-4 text-xl font-medium text-fg">Request a quote</h2>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="flex gap-3 rounded-xl bg-surface p-4 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)] transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_rgb(255_255_255_/_0.16)]"
      >
        <span className="mt-0.5 text-muted">{icon}</span>
        <span>
          <span className="block text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            {label}
          </span>
          <span className="mt-1 block text-sm text-fg">{value}</span>
        </span>
      </a>
    </li>
  );
}
