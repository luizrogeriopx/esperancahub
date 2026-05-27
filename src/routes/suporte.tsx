import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/suporte")({
  component: SuportePage,
  head: () => ({
    meta: [
      { title: "Suporte — Esperança Hub" },
      {
        name: "description",
        content:
          "Entre em contato com os líderes da Hope Creative para suporte em comunicação e mídia.",
      },
    ],
  }),
});

const lideres = [
  {
    nome: "João Gabriel",
    telefone: "62982952728",
    numeroFormatado: "(62) 98295-2728",
    funcao: "Líder Hope Creative",
  },
  {
    nome: "Filipe Augusto",
    telefone: "62986046808",
    numeroFormatado: "(62) 98604-6808",
    funcao: "Líder Hope Creative",
  },
  {
    nome: "Luiz Rogério",
    telefone: "62996897483",
    numeroFormatado: "(62) 99689-7483",
    funcao: "DESIGN/DESENVOLVEDOR",
  },
];

function SuportePage() {
  return (
    <main className="min-h-[calc(100vh-65px)] overflow-x-hidden bg-background px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-foreground">
            <span
              className="block text-3xl sm:text-5xl"
              style={{ fontFamily: '"Nexa Heavy", sans-serif', letterSpacing: "0.02em" }}
            >
              SUPORTE
            </span>
            <span
              className="mt-2 block text-lg sm:text-2xl uppercase tracking-[0.25em] text-foreground/70"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              Líderes da Hope Creative
            </span>
          </h1>
          <p
            className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Ministério Multimídia — Entre em contato com nossos líderes pelo WhatsApp para qualquer necessidade de comunicação e mídia.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lideres.map((lider) => (
            <div
              key={lider.telefone}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 1 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2
                className="text-lg font-semibold text-card-foreground"
                style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
              >
                {lider.nome}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {lider.funcao}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {lider.numeroFormatado}
              </p>
              <a
                href={`https://wa.me/${lider.telefone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.004 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chamar no WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
