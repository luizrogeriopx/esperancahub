import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Esperança Hub — Comunicação e Mídia" },
      {
        name: "description",
        content:
          "Esperança Hub: ferramentas de comunicação e mídia para as igrejas Esperança.",
      },
    ],
  }),
});

function Home() {
  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col items-center justify-center overflow-x-hidden bg-background px-4 text-center sm:px-6">
      <h1 className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 leading-none text-foreground sm:gap-4">
        <span
          className="text-4xl sm:text-8xl md:text-9xl"
          style={{ fontFamily: '"Nexa Heavy", sans-serif', letterSpacing: "0.02em" }}
        >
          ESPERANÇA
        </span>
        <span
          className="text-4xl sm:text-8xl md:text-9xl"
          style={{ fontFamily: '"Nexa Book", sans-serif', letterSpacing: "0.15em" }}
        >
          HUB
        </span>
      </h1>
      <p
        className="mt-6 text-xs sm:text-lg uppercase tracking-[0.25em] sm:tracking-[0.35em] text-foreground/70"
        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
      >
        Comunicação e Mídia
      </p>
    </main>
  );
}
