import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Brush,
  Building2,
  CheckCircle2,
  Droplets,
  Grid2x2,
  HelpCircle,
  Loader2,
  Phone,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { HOURS, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";
import { copy } from "@/content";

const WORK_TYPES = [
  { value: "fachada", label: "Fachada", icon: Building2 },
  { value: "pintura", label: "Pintura", icon: Brush },
  { value: "cobertura", label: "Cobertura / Infiltrações", icon: Droplets },
  { value: "limpeza", label: "Limpeza", icon: Sparkles },
  { value: "redes", label: "Redes de proteção", icon: Grid2x2 },
  { value: "outro", label: "Outro", icon: HelpCircle },
] as const;

const BUILDING_TYPES = [
  "Prédio/condomínio",
  "Moradia",
  "Escritório/comércio",
  "Hotel",
  "Industrial",
] as const;

const FLOORS = ["1-3", "4-7", "8-15", "+15"] as const;

const schema = z.object({
  tipoTrabalho: z.string().min(1, "Escolha o tipo de trabalho."),
  tipoEdificio: z.string().min(1, "Escolha o tipo de edifício."),
  pisos: z.string().min(1, "Indique o número aproximado de pisos."),
  localidade: z.string().min(2, "Indique a localidade do edifício."),
  nome: z.string().min(2, "Indique o seu nome."),
  telemovel: z
    .string()
    .min(9, "Indique um número de telemóvel válido (9 dígitos).")
    .regex(/^[0-9+\s]{9,17}$/, "O número só pode conter dígitos, espaços e o sinal +."),
  email: z.union([z.string().email("Introduza um email válido."), z.literal("")]),
  descricao: z.string().min(10, "Descreva brevemente o problema (pelo menos 10 caracteres)."),
  rgpd: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar o tratamento dos dados para continuar." }),
  }),
});

type FormValues = z.infer<typeof schema>;

const STEP_FIELDS: Array<Array<keyof FormValues>> = [
  ["tipoTrabalho"],
  ["tipoEdificio", "pisos", "localidade"],
  ["nome", "telemovel", "email", "descricao", "rgpd"],
];

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs font-medium text-[oklch(0.72_0.19_25)]">
      {message}
    </p>
  );
}

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      tipoTrabalho: "",
      tipoEdificio: "",
      pisos: "",
      localidade: "",
      nome: "",
      telemovel: "",
      email: "",
      descricao: "",
    },
  });

  const values = watch();

  const next = async () => {
    const ok = await trigger(STEP_FIELDS[step] as never, { shouldFocus: true });
    if (ok) setStep((s) => Math.min(s + 1, 2));
  };

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
  };

  return (
    <section
      id="orcamento"
      className="relative overflow-hidden bg-charcoal py-16 sm:py-24"
    >
      <div className="concrete-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {copy.formulario.eyebrow}
          </p>
          <h2 className="text-3xl text-on-dark sm:text-4xl lg:text-5xl">
            {copy.formulario.titulo}
          </h2>
          <span className="mt-4 block h-1 w-16 bg-primary" aria-hidden="true" />
          <p className="mt-4 text-on-dark-muted">
            {copy.formulario.subtitulo}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Formulário */}
          <div className="border border-dark-border bg-charcoal-soft p-5 sm:p-8">
            {sent ? (
              <div role="status" className="py-8 text-center">
                <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-2xl text-on-dark">Pedido recebido</h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-on-dark-muted">
                  Recebemos o seu pedido. Se for urgente, ligue já para{" "}
                  <a href={PHONE_HREF} className="font-semibold text-primary underline">
                    {PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Barra de progresso */}
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Passo {step + 1} de 3
                    </p>
                    <p className="text-xs text-on-dark-muted">
                      {["Tipo de trabalho", "Edifício", "Contacto"][step]}
                    </p>
                  </div>
                  <div
                    className="mt-2 h-1.5 w-full bg-dark-border"
                    role="progressbar"
                    aria-valuenow={step + 1}
                    aria-valuemin={1}
                    aria-valuemax={3}
                    aria-label="Progresso do pedido de orçamento"
                  >
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${((step + 1) / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <div aria-live="polite">
                  {/* PASSO 1 */}
                  {step === 0 && (
                    <fieldset>
                      <legend className="font-display text-sm font-bold uppercase tracking-wide text-on-dark">
                        Que tipo de trabalho precisa?
                      </legend>
                      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {WORK_TYPES.map((w) => {
                          const selected = values.tipoTrabalho === w.value;
                          return (
                            <button
                              key={w.value}
                              type="button"
                              aria-pressed={selected}
                              onClick={() =>
                                setValue("tipoTrabalho", w.value, { shouldValidate: true })
                              }
                              className={cn(
                                "flex min-h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border-2 p-3 text-center text-xs font-semibold transition-colors",
                                selected
                                  ? "border-primary bg-primary/15 text-primary"
                                  : "border-dark-border text-on-dark hover:border-on-dark/40",
                              )}
                            >
                              <w.icon className="size-6" aria-hidden="true" />
                              {w.label}
                            </button>
                          );
                        })}
                      </div>
                      <input type="hidden" {...register("tipoTrabalho")} />
                      <FieldError message={errors.tipoTrabalho?.message} />
                    </fieldset>
                  )}

                  {/* PASSO 2 */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <fieldset>
                        <legend className="font-display text-sm font-bold uppercase tracking-wide text-on-dark">
                          Tipo de edifício
                        </legend>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {BUILDING_TYPES.map((b) => {
                            const selected = values.tipoEdificio === b;
                            return (
                              <button
                                key={b}
                                type="button"
                                aria-pressed={selected}
                                onClick={() =>
                                  setValue("tipoEdificio", b, { shouldValidate: true })
                                }
                                className={cn(
                                  "min-h-11 cursor-pointer rounded-sm border-2 px-4 text-xs font-semibold transition-colors",
                                  selected
                                    ? "border-primary bg-primary/15 text-primary"
                                    : "border-dark-border text-on-dark hover:border-on-dark/40",
                                )}
                              >
                                {b}
                              </button>
                            );
                          })}
                        </div>
                        <input type="hidden" {...register("tipoEdificio")} />
                        <FieldError message={errors.tipoEdificio?.message} />
                      </fieldset>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="pisos" className="text-on-dark">
                            Número aproximado de pisos
                          </Label>
                          <select
                            id="pisos"
                            {...register("pisos")}
                            aria-invalid={!!errors.pisos}
                            className="mt-2 h-11 w-full rounded-sm border border-dark-border bg-charcoal px-3 text-sm text-on-dark"
                          >
                            <option value="">Selecione…</option>
                            {FLOORS.map((f) => (
                              <option key={f} value={f}>
                                {f} pisos
                              </option>
                            ))}
                          </select>
                          <FieldError message={errors.pisos?.message} />
                        </div>
                        <div>
                          <Label htmlFor="localidade" className="text-on-dark">
                            Localidade
                          </Label>
                          <Input
                            id="localidade"
                            {...register("localidade")}
                            aria-invalid={!!errors.localidade}
                            placeholder="Ex.: Almada"
                            className="mt-2 h-11 rounded-sm border-dark-border bg-charcoal text-on-dark placeholder:text-on-dark-muted"
                          />
                          <FieldError message={errors.localidade?.message} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PASSO 3 */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="nome" className="text-on-dark">
                            Nome
                          </Label>
                          <Input
                            id="nome"
                            {...register("nome")}
                            autoComplete="name"
                            aria-invalid={!!errors.nome}
                            className="mt-2 h-11 rounded-sm border-dark-border bg-charcoal text-on-dark"
                          />
                          <FieldError message={errors.nome?.message} />
                        </div>
                        <div>
                          <Label htmlFor="telemovel" className="text-on-dark">
                            Telemóvel
                          </Label>
                          <Input
                            id="telemovel"
                            inputMode="tel"
                            autoComplete="tel"
                            {...register("telemovel")}
                            aria-invalid={!!errors.telemovel}
                            className="mt-2 h-11 rounded-sm border-dark-border bg-charcoal text-on-dark"
                          />
                          <FieldError message={errors.telemovel?.message} />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-on-dark">
                          Email <span className="text-on-dark-muted">(opcional)</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          autoComplete="email"
                          {...register("email")}
                          aria-invalid={!!errors.email}
                          className="mt-2 h-11 rounded-sm border-dark-border bg-charcoal text-on-dark"
                        />
                        <FieldError message={errors.email?.message} />
                      </div>

                      <div>
                        <Label htmlFor="descricao" className="text-on-dark">
                          Descrição breve do problema
                        </Label>
                        <Textarea
                          id="descricao"
                          rows={4}
                          {...register("descricao")}
                          aria-invalid={!!errors.descricao}
                          placeholder="Ex.: infiltração no último andar, fachada norte com reboco a soltar-se…"
                          className="mt-2 rounded-sm border-dark-border bg-charcoal text-on-dark placeholder:text-on-dark-muted"
                        />
                        <FieldError message={errors.descricao?.message} />
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="rgpd"
                          checked={values.rgpd === true}
                          onCheckedChange={(c) =>
                            setValue("rgpd", (c === true) as true, { shouldValidate: true })
                          }
                          aria-invalid={!!errors.rgpd}
                          className="mt-0.5 border-dark-border data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                        />
                        <div>
                          <Label htmlFor="rgpd" className="text-xs leading-relaxed text-on-dark-muted">
                            Autorizo o tratamento dos meus dados para resposta a este pedido de
                            orçamento, nos termos da{" "}
                            <Link
                              to="/politica-de-privacidade"
                              className="text-primary underline"
                            >
                              Política de Privacidade
                            </Link>
                            .
                          </Label>
                          <FieldError message={errors.rgpd?.message} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {step > 0 && (
                    <Button
                      type="button"
                      variant="onDark"
                      size="xl"
                      onClick={() => setStep((s) => s - 1)}
                    >
                      <ArrowLeft aria-hidden="true" />
                      Voltar
                    </Button>
                  )}
                  {step < 2 ? (
                    <Button type="button" variant="amber" size="xl" onClick={next}>
                      Continuar
                      <ArrowRight aria-hidden="true" />
                    </Button>
                  ) : (
                    <Button type="submit" variant="amber" size="xl" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" aria-hidden="true" />
                          A enviar…
                        </>
                      ) : (
                        "Enviar pedido de orçamento"
                      )}
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Contacto direto */}
          <aside className="border-l-4 border-primary bg-charcoal-soft p-6">
            <h3 className="text-xl text-on-dark">Prefere falar diretamente?</h3>
            <p className="mt-2 text-sm text-on-dark-muted">
              Ligue — atendemos nós, não é call center.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 flex items-center gap-3 font-display text-2xl font-black text-primary transition-colors hover:text-primary-light sm:text-3xl"
            >
              <Phone className="size-6 shrink-0" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <Button variant="amber" size="xl" asChild className="mt-6 w-full">
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                Enviar mensagem no WhatsApp
              </a>
            </Button>
            <dl className="mt-6 border-t border-dark-border pt-4 text-sm">
              <dt className="font-display text-xs font-bold uppercase tracking-widest text-on-dark-muted">
                Horário
              </dt>
              <dd className="mt-1 text-on-dark">{HOURS}</dd>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
