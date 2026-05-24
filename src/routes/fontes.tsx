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
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-foreground">Fontes</h1>
        <p className="mt-2 text-sm text-foreground/70">
          Baixe individualmente as fontes oficiais da Igreja Esperança.
        </p>

        <div className="mt-10 flex flex-col gap-6">
          {fontes.map((f) => (
            <div
              key={f.nomeArquivo}
              className="flex flex-col gap-4 rounded-lg border border-border p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p
                  className="text-3xl text-foreground"
                  style={{ fontFamily: f.fontFamily }}
                >
                  {f.nome}
                </p>
                <p className="mt-1 text-xs text-foreground/60">{f.descricao}</p>
                <p className="mt-1 text-xs text-foreground/40">{f.nomeArquivo}</p>
              </div>
              <a
                href={f.arquivo}
                download={f.nomeArquivo}
                className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Baixar
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
