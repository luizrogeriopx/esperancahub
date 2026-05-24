import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fontes")({
  component: Fontes,
  head: () => ({
    meta: [
      { title: "Fontes — Esperança Hub" },
      {
        name: "description",
        content: "Baixe as fontes oficiais da Igreja Esperança.",
      },
    ],
  }),
});

const fontes = [
  {
    nome: "Nexa Heavy",
    descricao: "Peso forte — usada nas palavras de destaque.",
    arquivo: "/fonts/Nexa-Heavy.ttf",
    nomeArquivo: "Nexa-Heavy.ttf",
    fontFamily: '"Nexa Heavy", sans-serif',
  },
  {
    nome: "Nexa Book",
    descricao: "Peso leve — usada em textos secundários.",
    arquivo: "/fonts/Nexa-Trial-Book.otf",
    nomeArquivo: "Nexa-Trial-Book.otf",
    fontFamily: '"Nexa Book", sans-serif',
  },
];

function Fontes() {
  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col items-start bg-background px-6 py-16">
      <div className="w-full max-w-5xl">
        <p className="text-base sm:text-lg uppercase tracking-[0.2em] text-neutral-500">
          Baixe individualmente as fontes oficiais da{" "}
          <span className="text-black">IGREJA</span>{" "}
          <span className="text-black">ESPERANÇA</span>
        </p>

        <div className="mt-16 flex flex-col gap-16">
          {/* Nexa Heavy */}
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p
                className="text-5xl sm:text-7xl md:text-8xl text-foreground"
                style={{ fontFamily: '"Nexa Heavy", sans-serif', letterSpacing: "0.02em" }}
              >
                NEXA HEAVY
              </p>
              <p className="text-sm text-foreground/60">Peso forte — usada nas palavras de destaque</p>
              <p className="text-xs text-foreground/40">Nexa-Heavy.ttf</p>
            </div>
            <a
              href="/fonts/Nexa-Heavy.ttf"
              download="Nexa-Heavy.ttf"
              className="inline-flex w-fit items-center justify-center rounded-md bg-black px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Baixar
            </a>
          </section>

          {/* Nexa Book */}
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p
                className="text-4xl sm:text-6xl md:text-7xl text-foreground"
                style={{ fontFamily: '"Nexa Book", sans-serif', letterSpacing: "0.35em" }}
              >
                NEXA BOOK
              </p>
              <p className="text-sm text-foreground/60">Peso leve — usada em textos secundários</p>
              <p className="text-xs text-foreground/40">Nexa-Trial-Book.otf</p>
            </div>
            <a
              href="/fonts/Nexa-Trial-Book.otf"
              download="Nexa-Trial-Book.otf"
              className="inline-flex w-fit items-center justify-center rounded-md bg-black px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Baixar
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
