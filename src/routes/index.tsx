import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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
  const [bairro, setBairro] = useState("");
  const [nome, setNome] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNome(bairro.trim());
  };

  return (
    <main className="flex min-h-screen flex-col items-start bg-background px-6 py-16">
      <div className="flex w-full max-w-5xl flex-col gap-16 text-foreground">
        {/* Versão 1 — Centralizada */}
        <section className="flex flex-col items-start text-left leading-none">
          <span className="mb-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
            Versão 1 — Centralizada
          </span>
          <h2 className="flex flex-col items-center">
            <span
              className="text-4xl sm:text-6xl md:text-7xl"
              style={{ fontFamily: '"Nexa Book", sans-serif', letterSpacing: "0.42em" }}
            >
              IGREJA
            </span>
            <span
              className="mt-1 text-5xl sm:text-7xl md:text-8xl"
              style={{ fontFamily: '"Nexa Heavy", sans-serif', letterSpacing: "0.02em" }}
            >
              ESPERANÇA
            </span>
          </h2>
          {nome && (
            <p className="mt-3 text-base sm:text-lg uppercase tracking-[0.2em] text-foreground/90">
              {nome}
            </p>
          )}
        </section>

        {/* Versão 2 — Alinhada à esquerda */}
        <section className="flex flex-col items-start text-left leading-none">
          <span className="mb-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
            Versão 2 — Alinhada à esquerda
          </span>
          <h2 className="flex flex-col items-start">
            <span
              className="text-4xl sm:text-6xl md:text-7xl"
              style={{ fontFamily: '"Nexa Book", sans-serif', letterSpacing: "0.42em" }}
            >
              IGREJA
            </span>
            <span
              className="mt-1 text-5xl sm:text-7xl md:text-8xl"
              style={{ fontFamily: '"Nexa Heavy", sans-serif', letterSpacing: "0.02em" }}
            >
              ESPERANÇA
            </span>
          </h2>
          {nome && (
            <p className="mt-3 text-base sm:text-lg uppercase tracking-[0.2em] text-foreground/90">
              {nome}
            </p>
          )}
        </section>

        {/* Versão 3 — Mesma linha */}
        <section className="flex flex-col items-start text-left leading-none">
          <span className="mb-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
            Versão 3 — Mesma linha
          </span>
          <h2 className="flex flex-wrap items-baseline gap-x-3 text-4xl sm:text-6xl md:text-7xl">
            <span
              style={{ fontFamily: '"Nexa Book", sans-serif', letterSpacing: "0.12em" }}
            >
              IGREJA
            </span>
            <span
              style={{ fontFamily: '"Nexa Heavy", sans-serif', letterSpacing: "0.02em" }}
            >
              ESPERANÇA
            </span>
          </h2>
          {nome && (
            <p className="mt-3 text-base sm:text-lg uppercase tracking-[0.2em] text-foreground/90">
              {nome}
            </p>
          )}
        </section>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-16 flex w-full max-w-md flex-col gap-3 sm:flex-row"
      >
        <input
          type="text"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          placeholder="Digite o nome do bairro"
          className="flex-1 rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="submit"
          className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Aplicar
        </button>
      </form>
    </main>
  );
}
