import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-baseline gap-1.5 font-sans tracking-tight",
        className,
      )}
      aria-label="PC Outfitters home"
    >
      <span className="text-xl font-semibold text-primary sm:text-[1.35rem]">PC</span>
      <span className="text-xl font-medium text-fg sm:text-[1.35rem]">Outfitters</span>
    </Link>
  );
}
