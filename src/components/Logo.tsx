import { cn } from "@/lib/utils";

/**
 * Lockup tipográfico da marca.
 *
 * Quando o ficheiro da logo real estiver disponível, basta:
 *   import logoSrc from "@/assets/logo-gomes-vertical.svg";
 * e substituir o bloco <span aria-hidden> por:
 *   <img src={logoSrc} alt="Gomes Vertical — Alpinismo Industrial" width={220} height={64} />
 * mantendo o wrapper e o texto acessível abaixo.
 */
export function Logo({
  variant = "dark",
  className,
  size = "md",
}: {
  /** "dark" = usado sobre fundos escuros; "light" = sobre fundos claros */
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const scale = {
    sm: { word: "text-lg", tag: "text-[8px] px-1.5 py-[1px]" },
    md: { word: "text-2xl", tag: "text-[9px] px-2 py-[2px]" },
    lg: { word: "text-4xl sm:text-5xl", tag: "text-[11px] px-2.5 py-0.5" },
  }[size];

  return (
    <span className={cn("inline-flex flex-col items-start leading-none", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "font-display font-black uppercase italic tracking-tight",
          scale.word,
        )}
      >
        <span className="text-primary">GOMES</span>
        <span className={variant === "dark" ? "text-on-dark" : "text-charcoal"}>
          VERTICAL
        </span>
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "mt-1 bg-primary font-sans font-semibold uppercase text-primary-foreground",
          "tracking-[0.28em]",
          scale.tag,
        )}
      >
        Alpinismo Industrial
      </span>
      <span className="sr-only">Gomes Vertical — Alpinismo Industrial</span>
    </span>
  );
}
