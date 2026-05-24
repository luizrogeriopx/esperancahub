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
    <main className="flex min-h-[calc(100vh-65px)] flex-col items-start overflow-x-hidden bg-background px-4 py-12 sm:px-6 sm:py-16">
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
                className="text-3xl sm:text-7xl md:text-8xl text-foreground break-words"
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
                className="text-2xl sm:text-6xl md:text-7xl text-foreground break-words"
                style={{ fontFamily: '"Nexa Book", sans-serif', letterSpacing: "0.2em" }}
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

        <section className="mt-20 flex flex-col gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Como instalar as fontes
            </h2>
            <p className="mt-2 text-sm text-foreground/60">
              Passo a passo para usar as fontes no computador e no app Canva pelo celular.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Windows */}
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">💻 Windows</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-foreground/80">
                <li>Baixe os arquivos das fontes (.ttf / .otf) acima.</li>
                <li>Abra a pasta onde o arquivo foi salvo (geralmente "Downloads").</li>
                <li>Clique com o botão direito sobre o arquivo da fonte.</li>
                <li>
                  Selecione <strong>Instalar</strong> (ou{" "}
                  <strong>Instalar para todos os usuários</strong>).
                </li>
                <li>
                  Pronto! A fonte já aparece no Word, PowerPoint, Photoshop, Canva (desktop) etc.
                </li>
              </ol>
            </div>

            {/* macOS */}
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">🖥️ macOS</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-foreground/80">
                <li>Baixe os arquivos das fontes (.ttf / .otf) acima.</li>
                <li>Dê dois cliques no arquivo da fonte baixada.</li>
                <li>
                  Vai abrir o <strong>Catálogo de Fontes</strong> com uma prévia da fonte.
                </li>
                <li>
                  Clique em <strong>Instalar Fonte</strong>.
                </li>
                <li>Pronto! A fonte estará disponível em todos os aplicativos.</li>
              </ol>
            </div>

            {/* Canva celular */}
            <div className="rounded-xl border bg-card p-6 md:col-span-2">
              <h3 className="text-lg font-semibold text-foreground">
                📱 Canva no celular (Android e iPhone)
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                Para subir fontes personalizadas no Canva pelo celular é necessário ter o{" "}
                <strong>Canva Pro</strong>. O upload é feito pela conta — depois aparece
                automaticamente no app.
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-foreground/80">
                <li>Baixe os arquivos das fontes (.ttf / .otf) aqui no celular.</li>
                <li>
                  Abra o navegador (Chrome ou Safari) e acesse{" "}
                  <a
                    href="https://www.canva.com/brand/fonts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    canva.com/brand/fonts
                  </a>
                  .
                </li>
                <li>Faça login com a mesma conta que você usa no app Canva.</li>
                <li>
                  Toque em <strong>Enviar uma fonte</strong> e selecione os arquivos baixados
                  (Nexa-Heavy.ttf e Nexa-Trial-Book.otf).
                </li>
                <li>Confirme que você tem permissão de uso e finalize o envio.</li>
                <li>
                  Abra o app Canva, edite qualquer design, toque em <strong>Texto</strong> e depois
                  em <strong>Fonte</strong>. As fontes Nexa aparecerão na lista da sua marca.
                </li>
              </ol>
              <p className="mt-4 text-xs text-foreground/50">
                Dica: se não tiver Canva Pro, instale as fontes no computador e crie modelos com elas
                — ao abrir o mesmo design no app do celular, a fonte é mantida.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
