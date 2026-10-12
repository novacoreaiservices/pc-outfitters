import { useState, type FormEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { quoteTypes, site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
};

const empty: Fields = { name: "", email: "", phone: "", type: quoteTypes[0], message: "" };

export function QuoteForm({ className }: { className?: string }) {
  const [fields, setFields] = useState<Fields>(empty);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError("Name, email, and a short note are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      setError("Enter a valid email so we can write back.");
      return;
    }
    setError(null);
    const subject = encodeURIComponent(`PCO quote — ${fields.type}`);
    const body = encodeURIComponent(
      [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone || "—"}`,
        `Need: ${fields.type}`,
        "",
        fields.message,
      ].join("\n"),
    );
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    try {
      localStorage.setItem("pco-quote", JSON.stringify({ ...fields, at: Date.now() }));
    } catch {
      /* ignore quota */
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className={cn(
          "rounded-2xl bg-elevated p-6 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)] sm:p-8",
          className,
        )}
      >
        <div className="flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <Check className="size-5" />
        </div>
        <h3 className="mt-4 text-xl font-medium text-fg">Draft ready</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Your mail app should open with the details filled in. If it does not, write us at{" "}
          <a className="text-fg underline decoration-border underline-offset-4" href={site.emailHref}>
            {site.email}
          </a>{" "}
          or call{" "}
          <a className="text-fg underline decoration-border underline-offset-4" href={site.phoneHref}>
            {site.phone}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setSent(false);
            setFields(empty);
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-2xl bg-surface p-5 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)] sm:p-7",
        className,
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor="q-name">
          <Input
            id="q-name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
            required
          />
        </Field>
        <Field label="Email" htmlFor="q-email">
          <Input
            id="q-email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
            required
          />
        </Field>
        <Field label="Phone" htmlFor="q-phone">
          <Input
            id="q-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => setFields((f) => ({ ...f, phone: e.target.value }))}
          />
        </Field>
        <Field label="What do you need?" htmlFor="q-type">
          <select
            id="q-type"
            name="type"
            value={fields.type}
            onChange={(e) => setFields((f) => ({ ...f, type: e.target.value }))}
            className="flex h-11 w-full rounded-md bg-elevated px-3 text-sm text-fg shadow-[0_0_0_1px_rgb(255_255_255_/_0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            {quoteTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Notes" htmlFor="q-message" className="sm:col-span-2">
          <Textarea
            id="q-message"
            name="message"
            rows={5}
            placeholder="Machine, symptoms, games you play, or the job this PC has to do."
            value={fields.message}
            onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
            required
          />
        </Field>
      </div>
      {error ? <p className="mt-3 text-sm text-primary">{error}</p> : null}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-subtle">Opens your email to {site.email}. Nothing is stored on a server.</p>
        <Button type="submit" className="sm:min-w-40">
          Send quote request
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
