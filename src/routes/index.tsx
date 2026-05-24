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
        {nome && (
          <p
            className="mt-4 text-lg sm:text-xl md:text-2xl uppercase tracking-[0.2em] text-foreground/90"
          >
            {nome}
          </p>
        )}
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
