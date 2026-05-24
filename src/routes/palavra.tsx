import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/palavra")({
  component: Palavra,
  head: () => ({
    meta: [
      { title: "Palavra — Esperança Hub" },
      {
        name: "description",
        content: "Guia de padronização para identificação do ministrante da Palavra em materiais de divulgação.",
      },
    ],
  }),
});

function Palavra() {
  return (
    <main className="min-h-[calc(100vh-65px)] bg-background px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        {/* Título */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl leading-tight text-foreground"
          style={{ fontFamily: '"Inter", system-ui, sans-serif', fontWeight: 900, letterSpacing: "0.02em" }}
        >
          PALAVRA
        </h1>
        <p
          className="mt-4 max-w-2xl text-base sm:text-lg text-foreground/70"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          Guia de padronização para materiais de divulgação. Como identificar corretamente quem ministra a Palavra.
        </p>

        {/* Introdução */}
        <section className="mt-12 border-t border-border pt-10">
          <p
            className="text-sm leading-relaxed text-foreground/80"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Em convites, banners e artes de culto, é muito comum aparecer abaixo do nome do ministrante palavras como "Preleitor", "Pregador", "Palestrante" e "Ministração". Embora populares, esses termos não são os mais elegantes nem os mais adequados para materiais de divulgação cristã.
          </p>
        </section>

        {/* Termos a evitar */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Inter", system-ui, sans-serif', fontWeight: 900 }}
          >
            Termos que Devem Ser Evitados
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TermoEvitarCard termo="Preletor" motivo="Termo antigo e pouco utilizado atualmente." />
            <TermoEvitarCard termo="Preleitor" motivo="Com i está totalmente errado." />
            <TermoEvitarCard termo="Pregador" motivo="Em artes modernas acaba ficando visualmente pesado e repetitivo." />
            <TermoEvitarCard termo="Palestrante" motivo="Passa uma ideia acadêmica ou empresarial, não espiritual." />
            <TermoEvitarCard termo="Ministração" motivo="Uso isolado em artes não transmite clareza." />
            <TermoEvitarCard termo="Ministração da Palavra" motivo="Fica longo e visualmente poluído." />
          </div>
        </section>

        {/* Por que Palavra */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Inter", system-ui, sans-serif', fontWeight: 900 }}
          >
            Por que "Palavra" é Melhor?
          </h2>
          <div className="mt-6 rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 p-6">
            <p
              className="text-sm leading-relaxed text-foreground/80"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              O destaque do culto não deve ser a pessoa, mas a Palavra de Deus. Quando usamos apenas "Palavra", a arte fica mais limpa, mais elegante, mais reverente, mais profissional, evita títulos desnecessários e mantém o foco na mensagem bíblica.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <BeneficioItem texto="Fica mais limpa" />
              <BeneficioItem texto="Mais elegante" />
              <BeneficioItem texto="Mais reverente" />
              <BeneficioItem texto="Mais profissional" />
              <BeneficioItem texto="Evita títulos desnecessários" />
              <BeneficioItem texto="Mantém o foco na mensagem bíblica" />
            </div>
          </div>
        </section>

        {/* Modelos corretos */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Inter", system-ui, sans-serif', fontWeight: 900 }}
          >
            Como Fazer Corretamente
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <ModeloCard tipo="Modelo Elegante" nome="Pr. Carlos Almeida" funcao="Palavra" />
            <ModeloCard tipo="Modelo Congressos" nome="Pb. Marcos Oliveira" funcao="Palavra" />
            <ModeloCard tipo="Modelo Conferências" nome="Missionária Ana Paula" funcao="Palavra" />
          </div>
        </section>

        {/* Comparação visual */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Inter", system-ui, sans-serif', fontWeight: 900 }}
          >
            Comparação Visual
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <ComparacaoCard
              titulo="Forma Correta"
              cor="emerald"
              linhas={[
                "CONGRESSO DE JOVENS",
                "",
                "Ministério Adoração",
                "Louvor",
                "",
                "Pr. Romeu Ivo",
                "Palavra",
                "",
                "Sábado • 19h30",
              ]}
            />
            <ComparacaoCard
              titulo="Forma Poluída"
              cor="red"
              linhas={[
                "CONGRESSO DE JOVENS",
                "",
                "Preletor: Pr. Samuel Ferreira",
                "Ministração da Palavra",
                "",
                "Louvorzão Impactante",
                "",
                "Sábado às 19:30hrs",
              ]}
            />
          </div>
        </section>

        {/* Erros mais comuns */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Inter", system-ui, sans-serif', fontWeight: 900 }}
          >
            Erros Mais Comuns
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ErroParaCertoCard errado="Pregador" certo="Palavra" />
            <ErroParaCertoCard errado="Preletor" certo="Palavra" />
            <ErroParaCertoCard errado="Palestrante" certo="Palavra" />
            <ErroParaCertoCard errado="Ministração" certo="Palavra" />
            <ErroParaCertoCard errado="Ministrando" certo="Palavra" />
            <ErroParaCertoCard errado="Preleitor" certo="Palavra" />
          </div>
        </section>

        {/* Benefícios visuais */}
        <section className="mt-12 border-t border-border pt-10">
          <h2
            className="text-2xl sm:text-3xl text-foreground"
            style={{ fontFamily: '"Inter", system-ui, sans-serif', fontWeight: 900 }}
          >
            Benefícios Visuais
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <BeneficioItem texto="Deixa a arte mais sofisticada" />
            <BeneficioItem texto="Melhora a leitura" />
            <BeneficioItem texto="Cria identidade visual moderna" />
            <BeneficioItem texto="Valoriza mais o nome do evento" />
            <BeneficioItem texto="Evita excesso de informações" />
          </div>
        </section>

        {/* Dica profissional */}
        <section className="mt-12 border-t border-border pt-10 pb-16">
          <div className="rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 p-6">
            <p
              className="text-sm uppercase tracking-[0.15em] text-foreground/60"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              Dica Profissional
            </p>
            <p
              className="mt-2 text-lg leading-relaxed text-foreground"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              Em artes modernas de igrejas, menos informação gera mais impacto visual. O ideal é manter a identificação simples e direta.
            </p>
          </div>

          <div className="mt-10 rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 p-6">
            <p
              className="text-sm uppercase tracking-[0.15em] text-foreground/60"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              Conclusão
            </p>
            <p
              className="mt-2 text-xl text-foreground"
              style={{ fontFamily: '"Inter", system-ui, sans-serif', fontWeight: 900 }}
            >
              Use apenas <span className="text-emerald-600">PALAVRA</span> abaixo do nome do ministrante.
            </p>
            <p
              className="mt-2 text-sm text-foreground/70"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              Simples, elegante, reverente e visualmente profissional.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function TermoEvitarCard({ termo, motivo }: { termo: string; motivo: string }) {
  return (
    <div className="rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 p-5">
      <div className="flex items-center gap-2">
        <span className="text-red-500 text-lg">❌</span>
        <h3 className="text-lg font-bold text-red-500" style={{ fontFamily: '"Inter", system-ui, sans-serif', fontWeight: 900 }}>{termo}</h3>
      </div>
      <p
        className="mt-2 text-sm text-foreground/70"
        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
      >
        {motivo}
      </p>
    </div>
  );
}

function BeneficioItem({ texto }: { texto: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 px-4 py-3">
      <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
      <p className="text-sm text-foreground/80" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>{texto}</p>
    </div>
  );
}

function ModeloCard({ tipo, nome, funcao }: { tipo: string; nome: string; funcao: string }) {
  return (
    <div className="rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 p-6">
      <p
        className="text-[10px] uppercase tracking-[0.15em] text-foreground/50"
        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
      >
        {tipo}
      </p>
      <div className="mt-4 flex flex-col items-center gap-1 py-6 border-t border-b border-border/50">
        <p className="text-base text-foreground" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>{nome}</p>
        <p className="text-sm text-emerald-600 font-semibold uppercase tracking-[1px]" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>{funcao}</p>
      </div>
    </div>
  );
}

function ComparacaoCard({ titulo, cor, linhas }: { titulo: string; cor: "emerald" | "red"; linhas: string[] }) {
  const corClasses = {
    emerald: "border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10",
    red: "border-red-200 dark:border-red-800/30 bg-red-50/50 dark:bg-red-900/10",
  };

  return (
    <div className={`rounded-lg border ${corClasses[cor]} p-6`}>
      <p className={`text-xs uppercase tracking-[0.15em] font-semibold ${cor === "emerald" ? "text-emerald-600" : "text-red-500"}`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
        {titulo}
      </p>
      <div className="mt-4 flex flex-col items-center gap-0.5 text-center">
        {linhas.map((linha, i) => (
          <p key={i} className={`text-sm ${linha === "" ? "h-2" : cor === "emerald" ? "text-foreground font-medium" : "text-red-400"}`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
            {linha}
          </p>
        ))}
      </div>
    </div>
  );
}

function ErroParaCertoCard({ errado, certo }: { errado: string; certo: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-neutral-50 dark:bg-neutral-900 px-5 py-4">
      <span className="text-lg text-red-500" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>{errado}</span>
      <span className="text-foreground/30">→</span>
      <span className="text-lg text-emerald-600 font-semibold" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>{certo}</span>
    </div>
  );
}
