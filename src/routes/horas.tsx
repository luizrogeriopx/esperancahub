import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/horas")({
  component: Horas,
  head: () => ({
    meta: [
      { title: "Horas — Esperança Hub" },
      {
        name: "description",
        content: "Guia prático da forma correta de abreviar horas em materiais de divulgação.",
      },
    ],
  }),
});

function Horas() {
  return (
    <main className="min-h-[calc(100vh-65px)] bg-background px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        {/* Título */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl leading-tight text-foreground"
          style={{ fontFamily: '"Nexa Heavy", sans-serif', letterSpacing: "0.02em" }}
        >
          GUIA DE HORAS
        </h1>
        <p
          className="mt-4 max-w-2xl text-base sm:text-lg text-foreground/70"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          Forma correta de abreviar horas em banners, panfletos, igrejas, eventos, redes sociais e anúncios.
        </p>

        {/* Introdução */}
        <section className="mt-12 border-t border-border pt-10">
          <p
            className="text-sm leading-relaxed text-foreground/80"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Em materiais de divulgação é muito comum encontrar horários escritos de forma incorreta. Este guia mostra a maneira certa e a maneira errada de escrever horas.
          </p>
        </section>

        {/* Horas Exatas */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
          >
            Horas Exatas
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ExemploCard certo="8h" errado="8hs" />
            <ExemploCard certo="9h" errado="9H" />
            <ExemploCard certo="14h" errado="14hrs" />
            <ExemploCard certo="20h" errado="20:00hrs" />
          </div>
        </section>

        {/* Horas e Minutos */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
          >
            Horas e Minutos
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ExemploCard certo="19h30" errado="19:30h" />
            <ExemploCard certo="8h15" errado="8:15hs" />
            <ExemploCard certo="21h45" errado="21hrs45" />
            <ExemploCard certo="13h05" errado="13:05hrs" />
          </div>
        </section>

        {/* Regras */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
          >
            Regras Importantes
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <RegraCard
              numero="01"
              titulo="“h” é sempre minúsculo"
              descricao="A letra que representa hora deve ficar em minúsculo."
              certo="18h"
              errado="18H"
            />
            <RegraCard
              numero="02"
              titulo="Não use plural"
              descricao="A abreviação “h” não vai para o plural."
              certo="3h"
              errado="3hs"
            />
            <RegraCard
              numero="03"
              titulo="Não use “hrs”"
              descricao="Embora muito popular, “hrs” não é o padrão correto em materiais formais."
              certo="22h"
              errado="22hrs"
            />
            <RegraCard
              numero="04"
              titulo="Não use dois-pontos junto com “h”"
              descricao="Escolha apenas um padrão: 19h30 ou 19:30. Nunca 19:30h."
              certo="19h30"
              errado="19:30h"
            />
          </div>
        </section>

        {/* Aplicação em Artes */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
          >
            Como Fica em Artes
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <ContextoCard
              titulo="Eventos"
              exemplos={["Culto às 19h30", "Conferência — 8h às 17h", "Início: 20h"]}
            />
            <ContextoCard
              titulo="Redes Sociais"
              exemplos={["Live hoje às 21h", "Aula gratuita às 14h30"]}
            />
            <ContextoCard
              titulo="Panfletos"
              exemplos={["Domingo | 18h", "Sábado às 19h30"]}
            />
          </div>
        </section>

        {/* Erros Mais Comuns */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
          >
            Erros Mais Comuns
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ErroCard errado="7hs" certo="7h" />
            <ErroCard errado="18HRS" certo="18h" />
            <ErroCard errado="19:00h" certo="19h" />
            <ErroCard errado="20hrs" certo="20h" />
            <ErroCard errado="8:30hs" certo="8h30" />
            <ErroCard errado="14 Horas" certo="14h" />
          </div>
        </section>

        {/* Padrão Profissional */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
          >
            Padrão Mais Profissional
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <p
                className="text-sm uppercase tracking-[0.15em] text-foreground/60"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                Formato recomendado
              </p>
              <p className="text-lg text-foreground">19h</p>
              <p className="text-lg text-foreground">19h30</p>
              <p className="text-lg text-foreground">Das 8h às 18h</p>
            </div>
            <div className="flex flex-col gap-3">
              <p
                className="text-sm uppercase tracking-[0.15em] text-foreground/60"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                Utilizado por
              </p>
              <ul className="flex flex-col gap-1 text-base text-foreground/80">
                <li>Jornais</li>
                <li>Universidades</li>
                <li>Instituições oficiais</li>
                <li>Igrejas</li>
                <li>Empresas</li>
                <li>Campanhas publicitárias</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resumo Rápido */}
        <section className="mt-12 border-t border-border pt-10 pb-16">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
          >
            Resumo Rápido
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ResumoCard situacao="Hora exata" forma="10h" />
            <ResumoCard situacao="Hora com minutos" forma="10h30" />
            <ResumoCard situacao="Intervalo" forma="8h às 17h" />
            <ResumoCard situacao="Evento" forma="Hoje às 19h30" />
            <ResumoCard situacao="Live" forma="21h" />
            <ResumoCard situacao="Culto" forma="18h30" />
          </div>

          <div className="mt-10 rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 p-6">
            <p
              className="text-sm uppercase tracking-[0.15em] text-foreground/60"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              Regra de Ouro
            </p>
            <p
              className="mt-2 text-xl text-foreground"
              style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
            >
              Use apenas “h” minúsculo, sem plural e sem “hrs”.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function ExemploCard({ certo, errado }: { certo: string; errado: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 px-5 py-4">
      <div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-emerald-600 font-semibold">Certo</p>
        <p className="mt-1 text-xl text-foreground" style={{ fontFamily: '"Nexa Heavy", sans-serif' }}>{certo}</p>
      </div>
      <div className="text-right">
        <p className="text-[10px] uppercase tracking-[0.15em] text-red-500 font-semibold">Errado</p>
        <p className="mt-1 text-xl text-red-500" style={{ fontFamily: '"Nexa Book", sans-serif' }}>{errado}</p>
      </div>
    </div>
  );
}

function RegraCard({
  numero,
  titulo,
  descricao,
  certo,
  errado,
}: {
  numero: string;
  titulo: string;
  descricao: string;
  certo: string;
  errado: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 p-6">
      <p
        className="text-[10px] uppercase tracking-[0.15em] text-foreground/50"
        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
      >
        Regra {numero}
      </p>
      <h3
        className="mt-2 text-lg text-foreground"
        style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
      >
        {titulo}
      </h3>
      <p
        className="mt-2 text-sm text-foreground/70 leading-relaxed"
        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
      >
        {descricao}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <span className="inline-flex items-center rounded bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
          {certo}
        </span>
        <span className="inline-flex items-center rounded bg-red-100 dark:bg-red-900/30 px-2 py-1 text-sm font-semibold text-red-600 dark:text-red-400">
          {errado}
        </span>
      </div>
    </div>
  );
}

function ContextoCard({ titulo, exemplos }: { titulo: string; exemplos: string[] }) {
  return (
    <div className="rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 p-6">
      <p
        className="text-xs uppercase tracking-[0.15em] text-foreground/50"
        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
      >
        {titulo}
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {exemplos.map((ex) => (
          <div key={ex} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-base text-foreground" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>{ex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ErroCard({ errado, certo }: { errado: string; certo: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 px-5 py-4">
      <span className="text-lg text-red-500" style={{ fontFamily: '"Nexa Book", sans-serif' }}>{errado}</span>
      <span className="text-foreground/30">→</span>
      <span className="text-lg text-emerald-600 font-semibold" style={{ fontFamily: '"Nexa Heavy", sans-serif' }}>{certo}</span>
    </div>
  );
}

function ResumoCard({ situacao, forma }: { situacao: string; forma: string }) {
  return (
    <div className="rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 p-5">
      <p
        className="text-[10px] uppercase tracking-[0.15em] text-foreground/50"
        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
      >
        {situacao}
      </p>
      <p
        className="mt-2 text-2xl text-foreground"
        style={{ fontFamily: '"Nexa Heavy", sans-serif' }}
      >
        {forma}
      </p>
    </div>
  );
}
