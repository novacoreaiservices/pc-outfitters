import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Full-service IT for Windsor–Essex since {site.founded}. Custom machines,
            careful repairs, and parts ordered the same day.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">Visit</p>
          <address className="mt-3 not-italic text-sm leading-relaxed text-muted">
            {site.address.line1}
            <br />
            {site.address.city}, {site.address.region} {site.address.postal}
            <br />
            <span className="mt-2 block text-subtle">{site.address.note}</span>
          </address>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">Hours</p>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {site.hours.map((h) => (
              <li key={h.days}>
                <span className="block text-fg">{h.days}</span>
                {h.time}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">Shop</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-muted transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} PC Outfitters Inc. Windsor, Ontario.</p>
          <p>
            <a className="hover:text-muted" href={site.phoneHref}>
              {site.phone}
            </a>
            <span className="mx-2">·</span>
            <a className="hover:text-muted" href={site.emailHref}>
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
