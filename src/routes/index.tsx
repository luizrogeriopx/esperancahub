import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Esperança Hub — Materiais e marketing para a Igreja Esperança" },
      {
        name: "description",
        content:
          "Plataforma Esperança Hub: materiais, apoio e dicas de marketing para as igrejas Esperança.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center leading-none tracking-tight text-foreground">
        <h1 className="flex flex-col items-center">
          <span
            className="text-5xl sm:text-7xl md:text-8xl"
            style={{ fontFamily: '"Nexa Book", sans-serif', letterSpacing: "0.18em" }}
          >
            IGREJA
          </span>
          <span
            className="mt-2 text-6xl sm:text-8xl md:text-9xl"
            style={{ fontFamily: '"Nexa Heavy", sans-serif', letterSpacing: "0.02em" }}
          >
            ESPERANÇA
          </span>
        </h1>
        <p className="mt-10 text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Esperança Hub
        </p>
      </div>
    </main>
  );
}
