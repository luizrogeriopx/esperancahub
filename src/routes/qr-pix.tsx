import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import QRCode from "qrcode";

export const Route = createFileRoute("/qr-pix")({
  component: QrPixPage,
  head: () => ({
    meta: [
      { title: "QR Pix — Esperança Hub" },
      { name: "description", content: "Gerador de QR Code Pix (copia e cola) para a Igreja Esperança." },
    ],
  }),
});

// EMV BR Code (Pix estático) — construtor de payload
function tlv(id: string, value: string) {
  const len = value.length.toString().padStart(2, "0");
  return `${id}${len}${value}`;
}

function crc16(payload: string) {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function removerAcentos(s: string) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function buildPixPayload(opts: {
  chave: string;
  nome: string;
  cidade: string;
  valor?: string;
  txid?: string;
  descricao?: string;
}) {
  const chave = opts.chave.trim();
  const nome = removerAcentos(opts.nome.trim()).slice(0, 25) || "NOME";
  const cidade = removerAcentos(opts.cidade.trim()).slice(0, 15) || "CIDADE";
  const txid = (opts.txid?.trim() || "***").slice(0, 25);

  // Merchant Account Info (id 26)
  const gui = tlv("00", "BR.GOV.BCB.PIX");
  const key = tlv("01", chave);
  const desc = opts.descricao?.trim() ? tlv("02", removerAcentos(opts.descricao.trim()).slice(0, 50)) : "";
  const mai = tlv("26", gui + key + desc);

  let payload =
    tlv("00", "01") + // Payload Format Indicator
    mai +
    tlv("52", "0000") + // Merchant Category Code
    tlv("53", "986") + // Currency BRL
    (opts.valor && Number(opts.valor) > 0
      ? tlv("54", Number(opts.valor).toFixed(2))
      : "") +
    tlv("58", "BR") +
    tlv("59", nome) +
    tlv("60", cidade) +
    tlv("62", tlv("05", txid));

  payload += "6304";
  const crc = crc16(payload);
  return payload + crc;
}

function QrPixPage() {
  const [chave, setChave] = useState("");
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [txid, setTxid] = useState("");
  const [copiado, setCopiado] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const payload = useMemo(() => {
    if (!chave.trim() || !nome.trim() || !cidade.trim()) return "";
    return buildPixPayload({ chave, nome, cidade, valor, descricao, txid });
  }, [chave, nome, cidade, valor, descricao, txid]);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (!payload) {
      const ctx = canvasRef.current.getContext("2d");
      ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      return;
    }
    QRCode.toCanvas(canvasRef.current, payload, {
      width: 320,
      margin: 2,
      color: { dark: "#000000", light: "#ffffff" },
      errorCorrectionLevel: "M",
    });
  }, [payload]);

  const copiar = async () => {
    if (!payload) return;
    await navigator.clipboard.writeText(payload);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const baixar = () => {
    if (!canvasRef.current || !payload) return;
    const link = document.createElement("a");
    link.download = "qr-pix.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <main
      className="flex min-h-screen flex-col items-start bg-background px-6 py-16"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <div className="w-full max-w-5xl">
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">
          Ferramenta
        </span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground">
          Gerador de QR Code Pix
        </h1>
        <p className="mt-3 max-w-2xl text-base text-foreground/70">
          Preencha os dados abaixo para gerar o QR Code e o código Pix copia e cola.
          Padrão oficial EMV BR Code do Banco Central.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Form */}
          <div className="flex flex-col gap-4">
            <Field label="Chave Pix *" hint="CPF/CNPJ, e-mail, telefone (+5511…) ou chave aleatória">
              <input
                type="text"
                value={chave}
                onChange={(e) => setChave(e.target.value)}
                placeholder="ex: igreja@esperanca.com.br"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </Field>

            <Field label="Nome do recebedor *" hint="Máx. 25 caracteres, sem acentos">
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="ex: Igreja Esperanca"
                maxLength={25}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </Field>

            <Field label="Cidade *" hint="Máx. 15 caracteres, sem acentos">
              <input
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="ex: SAO PAULO"
                maxLength={15}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </Field>

            <Field label="Valor (opcional)" hint="Deixe em branco para valor livre">
              <input
                type="number"
                step="0.01"
                min="0"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="ex: 50.00"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </Field>

            <Field label="Descrição (opcional)" hint="Máx. 50 caracteres, sem acentos">
              <input
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="ex: Oferta Culto"
                maxLength={50}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </Field>

            <Field label="Identificador / TXID (opcional)" hint="Máx. 25 caracteres. Padrão: ***">
              <input
                type="text"
                value={txid}
                onChange={(e) => setTxid(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))}
                placeholder="***"
                maxLength={25}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </Field>
          </div>

          {/* Preview */}
          <div className="flex flex-col items-center">
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <canvas ref={canvasRef} width={320} height={320} />
              {!payload && (
                <p className="mt-3 text-center text-xs text-neutral-500">
                  Preencha chave, nome e cidade para gerar o QR Code
                </p>
              )}
            </div>

            <div className="mt-6 flex w-full max-w-sm flex-col gap-3">
              <button
                type="button"
                onClick={baixar}
                disabled={!payload}
                className="rounded-md bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Baixar PNG
              </button>
              <button
                type="button"
                onClick={copiar}
                disabled={!payload}
                className="rounded-md border border-input bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copiado ? "Copiado!" : "Copiar código Pix"}
              </button>
            </div>

            {payload && (
              <div className="mt-6 w-full">
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                  Pix copia e cola
                </span>
                <textarea
                  readOnly
                  value={payload}
                  rows={4}
                  className="mt-2 w-full resize-none rounded-md border border-input bg-muted px-3 py-2 font-mono text-xs text-foreground"
                  onFocus={(e) => e.currentTarget.select()}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
      {hint && <span className="text-xs text-foreground/50">{hint}</span>}
    </label>
  );
}