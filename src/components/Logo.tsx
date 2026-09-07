import { cn } from "@/lib/utils";
import logoAsset from "@/assets/gomes-vertical-logo.png.asset.json";

export function Logo({
  variant: _variant = "dark",
  className,
  size = "md",
}: {
  /** "dark" = usado sobre fundos escuros; "light" = sobre fundos claros */
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass = {
    sm: "h-10 sm:h-11",
    md: "h-[4.75rem]",
    lg: "h-24 sm:h-28",
  }[size];

  return (
    <img
      src={logoAsset.url}
      alt="Gomes Vertical — Alpinismo Industrial"
      width={1567}
      height={769}
      className={cn("block w-auto max-w-full object-contain", sizeClass, className)}
    />
  );
}
