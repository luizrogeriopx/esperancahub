import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/perfis")({
  component: PerfisPage,
  head: () => ({
    meta: [
      { title: "Perfis — Esperança Hub" },
      { name: "description", content: "Guia de padronização de @ e nome de perfil no Instagram para a Igreja Esperança." },
    ],
  }),
});

function Check({ ok }: { ok?: boolean }) {
  return (
    <span
      className="mr-1.5 inline-block text-sm font-bold"
      style={{ color: ok ? "#22c55e" : "#ef4444" }}
    >
      {ok ? "✓" : "✗"}
    </span>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold tracking-tight text-card-foreground">{title}</h3>
      <div className="mt-3 overflow-hidden text-sm leading-relaxed text-card-foreground/80 break-words">{children}</div>
    </div>
  );
}

function PerfisPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <div className="mx-auto max-w-5xl">
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">Guia</span>
        <h1
          className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          style={{ fontFamily: "'Nexa Heavy', Inter, system-ui, sans-serif" }}
        >
          Guia de @ e Nomes para Instagram das Igrejas
        </h1>
        <p className="mt-3 max-w-2xl text-base text-foreground/70">
          Como criar um perfil limpo, profissional e fácil de memorizar.
        </p>

        {/* Intro */}
        <section className="mt-10 space-y-4 text-sm leading-relaxed text-foreground/80">
          <p>
            Hoje, o Instagram é uma das principais vitrines da igreja. Por isso, o nome do perfil precisa ser:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>simples</li>
            <li>memorável</li>
            <li>limpo visualmente</li>
            <li>fácil de pesquisar</li>
            <li>fácil de digitar</li>
            <li>forte para identidade da igreja</li>
          </ul>
        </section>

        {/* Principio mais importante */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Nexa Heavy', Inter, system-ui, sans-serif" }}
          >
            O Princípio Mais Importante
          </h2>
          <p className="mt-2 text-sm text-foreground/70">Menos informação = mais força visual</p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            Perfis muito longos geram:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-foreground/80">
            <li>poluição visual</li>
            <li>dificuldade de memorização</li>
            <li>dificuldade de busca</li>
            <li>aparência amadora</li>
            <li>identidade confusa</li>
          </ul>
        </section>

        {/* Padrao recomendado */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Nexa Heavy', Inter, system-ui, sans-serif" }}
          >
            Padrão Recomendado para o @
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            <strong>Estrutura ideal:</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@esperanca + bairro</code>
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Exemplo correto">
              <div className="space-y-1">
                <p><Check ok /> @esperancacentral</p>
                <p><Check ok /> @esperancanorte</p>
                <p><Check ok /> @esperancasul</p>
                <p><Check ok /> @esperancajardim</p>
                <p><Check ok /> @esperancavitoria</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Evite no @ */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Nexa Heavy', Inter, system-ui, sans-serif" }}
          >
            Evite no @
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Pontos e traços">
              <p className="mb-2">Evite: <code className="font-mono text-xs">. _ -</code></p>
              <p className="text-red-500"><Check ok={false} /> @igreja.esperanca.central</p>
              <p className="text-red-500"><Check ok={false} /> @esperanca_oficial</p>
              <p className="text-red-500"><Check ok={false} /> @ad.esperanca</p>
              <p className="text-red-500"><Check ok={false} /> @assembleiadeusesperanca</p>
              <p className="mt-2 text-green-600"><Check ok /> @esperancacentral</p>
            </Card>
            <Card title="'oficial'">
              <p className="mb-2">Perfis com "oficial" geralmente ficam maiores, menos memoráveis e visualmente poluídos.</p>
              <p className="text-red-500"><Check ok={false} /> @esperancacentraloficial</p>
              <p className="mt-2 text-green-600"><Check ok /> @esperancacentral</p>
            </Card>
            <Card title="Nomes gigantes">
              <p className="mb-2">Evite nomes que dificultam busca, reduzem força da marca e prejudicam estética.</p>
              <p className="text-red-500"><Check ok={false} /> @igrejaevangelicaassembleiadedeusministerioesperanca</p>
              <p className="mt-2 text-green-600"><Check ok /> @esperancacentral</p>
            </Card>
          </div>
        </section>

        {/* Nome do perfil */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Nexa Heavy', Inter, system-ui, sans-serif" }}
          >
            Como Deve Ficar o Nome do Perfil
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            O campo Nome é diferente do @. No Nome, o ideal é:
          </p>
          <div className="mt-4 rounded-lg bg-muted p-4">
            <p className="text-sm font-semibold text-foreground">
              IGREJA ESPERANÇA + BAIRRO
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Exemplos corretos">
              <div className="space-y-1">
                <p><Check ok /> IGREJA ESPERANÇA CENTRAL</p>
                <p><Check ok /> IGREJA ESPERANÇA NORTE</p>
                <p><Check ok /> IGREJA ESPERANÇA VITÓRIA</p>
              </div>
            </Card>
            <Card title="Excesso de denominação">
              <p className="mb-2">Evite:</p>
              <p className="text-red-500"><Check ok={false} /> IGREJA ASSEMBLEIA DE DEUS MINISTÉRIO ESPERANÇA</p>
              <p className="text-red-500"><Check ok={false} /> IGREJA EVANGÉLICA ASSEMBLEIA DE DEUS ESPERANÇA</p>
              <p className="text-red-500"><Check ok={false} /> ASSEMBLEIA DE DEUS MINISTÉRIO ESPERANÇA</p>
            </Card>
            <Card title="Por que evitar nomes longos?">
              <p>
                O Instagram funciona por impacto visual, rapidez, memorização e busca simples. Quanto menor e mais direto: mais moderno, mais forte, mais profissional, mais fácil de crescer.
              </p>
            </Card>
          </div>
        </section>

        {/* Padrao mais forte */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Nexa Heavy', Inter, system-ui, sans-serif" }}
          >
            Padrão Mais Forte para Marca
          </h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Elemento</th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Padrão Ideal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card text-foreground/80">
                <tr>
                  <td className="px-4 py-3 font-medium">@</td>
                  <td className="px-4 py-3">@esperancacentral</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Nome</td>
                  <td className="px-4 py-3">IGREJA ESPERANÇA CENTRAL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Beneficios */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Nexa Heavy', Inter, system-ui, sans-serif" }}
          >
            Benefícios desse Padrão
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Mais fácil de memorizar">
              <p>A pessoa lembra rapidamente.</p>
            </Card>
            <Card title="Mais fácil de procurar">
              <p>Nomes curtos aparecem melhor nas buscas.</p>
            </Card>
            <Card title="Mais moderno">
              <p>Perfis limpos transmitem organização.</p>
            </Card>
            <Card title="Melhor identidade visual">
              <p>Fica bonito em artes, banners, vídeos, transmissões, camisetas e telões.</p>
            </Card>
          </div>
        </section>

        {/* Comparativos */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Nexa Heavy', Inter, system-ui, sans-serif" }}
          >
            Exemplos Comparativos
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-950/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-800 dark:text-red-200">
                Perfil Poluído
              </h3>
              <div className="mt-4 space-y-2 text-sm text-red-900 dark:text-red-100">
                <p><strong>@:</strong> assembleiadeusministerioesperancacentraloficial</p>
                <p><strong>Nome:</strong> IGREJA EVANGÉLICA ASSEMBLEIA DE DEUS MINISTÉRIO ESPERANÇA CENTRAL</p>
              </div>
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900/40 dark:bg-green-950/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-800 dark:text-green-200">
                Perfil Profissional
              </h3>
              <div className="mt-4 space-y-2 text-sm text-green-900 dark:text-green-100">
                <p><strong>@:</strong> esperancacentral</p>
                <p><strong>Nome:</strong> IGREJA ESPERANÇA CENTRAL</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusao */}
        <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2
            className="text-xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'Nexa Heavy', Inter, system-ui, sans-serif" }}
          >
            Conclusão
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            No Instagram, simplicidade gera força. O padrão mais recomendado hoje é:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-xs uppercase tracking-wider text-foreground/50">@</p>
              <p className="mt-1 text-sm font-semibold text-foreground">@esperanca + bairro</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="text-xs uppercase tracking-wider text-foreground/50">Nome</p>
              <p className="mt-1 text-sm font-semibold text-foreground">IGREJA ESPERANÇA + BAIRRO</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            Menos poluição. Mais identidade. Mais memorização. Mais profissionalismo.
          </p>
        </section>
      </div>
    </main>
  );
}
