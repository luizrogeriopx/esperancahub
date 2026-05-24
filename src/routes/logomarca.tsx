import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";

export const Route = createFileRoute("/logomarca")({
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
  const [cor, setCor] = useState("#000000");
  const [semBairro, setSemBairro] = useState(false);

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const baixar = async (
    node: HTMLDivElement | null,
    filename: string,
  ) => {
    if (!node) return;
    const dataUrl = await toPng(node, {
      pixelRatio: 6,
      backgroundColor: undefined,
      cacheBust: true,
      style: { background: "transparent", backgroundImage: "none" },
    });
    const link = document.createElement("a");
    link.download = `${filename}.png`;
    link.href = dataUrl;
    link.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNome(bairro.trim());
  };

  return (
    <main className="flex min-h-screen flex-col items-start overflow-x-hidden bg-background px-4 py-12 sm:px-6 sm:py-16">
      <div className="flex w-full max-w-5xl flex-col gap-16" style={{ color: cor }}>
        {/* Versão 1 — Centralizada */}
        <section className="flex flex-col items-start text-left leading-none">
          <span className="mb-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
            Versão 1 — Centralizada
          </span>
          <div ref={ref1} className="flex flex-col items-center w-fit p-4 preview-bg">
          <h2 className="flex flex-col items-center">
            <span
              className="text-4xl sm:text-6xl md:text-7xl"
              style={{ fontFamily: '"Nexa Book", sans-serif', letterSpacing: "0.35em" }}
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
          <p className="mt-3 text-base sm:text-lg uppercase tracking-[0.2em]">
            {nome || "DIGITE O NOME DO BAIRRO"}
          </p>
          </div>
          <button
            type="button"
            onClick={() => baixar(ref1.current, `igreja-esperanca-v1${nome ? "-" + nome.toLowerCase().replace(/\s+/g, "-") : ""}`)}
            className="mt-4 rounded-md bg-black px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Baixar PNG (alta resolução, fundo transparente)
          </button>
        </section>

        {/* Versão 2 — Alinhada à esquerda */}
        <section className="flex flex-col items-start text-left leading-none">
          <span className="mb-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
            Versão 2 — Alinhada à esquerda
          </span>
          <div ref={ref2} className="p-4 preview-bg">
          <h2 className="flex flex-col items-start">
            <span
              className="text-4xl sm:text-6xl md:text-7xl"
              style={{ fontFamily: '"Nexa Book", sans-serif', letterSpacing: "0.35em" }}
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
          <p className="mt-3 text-base sm:text-lg uppercase tracking-[0.2em]">
            {nome || "DIGITE O NOME DO BAIRRO"}
          </p>
          </div>
          <button
            type="button"
            onClick={() => baixar(ref2.current, `igreja-esperanca-v2${nome ? "-" + nome.toLowerCase().replace(/\s+/g, "-") : ""}`)}
            className="mt-4 rounded-md bg-black px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Baixar PNG (alta resolução, fundo transparente)
          </button>
        </section>

        {/* Versão 3 — Mesma linha */}
        <section className="flex flex-col items-start text-left leading-none">
          <span className="mb-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
            Versão 3 — Mesma linha
          </span>
          <div ref={ref3} className="flex flex-col items-center w-fit p-4 preview-bg">
          <h2 className="flex flex-wrap items-baseline gap-x-3 text-4xl sm:text-6xl md:text-7xl">
            <span
              style={{ fontFamily: '"Nexa Book", sans-serif', letterSpacing: "0.08em" }}
            >
              IGREJA
            </span>
            <span
              style={{ fontFamily: '"Nexa Heavy", sans-serif', letterSpacing: "0.02em" }}
            >
              ESPERANÇA
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg uppercase tracking-[0.2em]">
            {nome || "DIGITE O NOME DO BAIRRO"}
          </p>
          </div>
          <button
            type="button"
            onClick={() => baixar(ref3.current, `igreja-esperanca-v3${nome ? "-" + nome.toLowerCase().replace(/\s+/g, "-") : ""}`)}
            className="mt-4 rounded-md bg-black px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Baixar PNG (alta resolução, fundo transparente)
          </button>
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

      <div className="mt-6 flex items-center gap-3">
        <label htmlFor="cor" className="text-sm text-foreground">
          Cor:
        </label>
        <input
          id="cor"
          type="color"
          value={cor}
          onInput={(e) => setCor((e.target as HTMLInputElement).value)}
          className="h-10 w-14 cursor-pointer rounded-md border border-input bg-background p-1"
        />
        <input
          type="text"
          value={cor}
          onChange={(e) => {
            let v = e.target.value.trim();
            if (!v.startsWith("#")) v = "#" + v;
            if (/^#[0-9A-Fa-f]{6}$/.test(v)) setCor(v);
            else setCor(v.slice(0, 7));
          }}
          className="w-24 rounded-md border border-input bg-background px-2 py-1.5 text-sm uppercase text-foreground outline-none focus:ring-2 focus:ring-ring"
          maxLength={7}
        />
      </div>
    </main>
  );
}
