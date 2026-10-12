import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Film({
  src,
  poster,
  label,
  className,
  muted = true,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  muted?: boolean;
}) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduce) {
    return (
      <img src={poster} alt={label} className={cn("size-full object-cover", className)} />
    );
  }

  return (
    <video
      className={cn("size-full object-cover", className)}
      autoPlay
      muted={muted}
      loop
      playsInline
      poster={poster}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
