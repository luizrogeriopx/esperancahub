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

function validarCPF(cpf: string): boolean {
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function normalizarChavePix(chave: string): string {
  const limpa = chave.trim();
  
  // E-mail
  if (limpa.includes("@")) {
    return limpa.toLowerCase();
  }
  
  // Chave aleatória (UUID)
  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(limpa);
  if (isUuid) {
    return limpa.toLowerCase();
  }
  
  const apenasNumeros = limpa.replace(/\D/g, "");
  
  // Se começar com + de telefone
  if (limpa.startsWith("+")) {
    return `+${apenasNumeros}`;
  }
  
  // Se já tiver DDI 55
  if (apenasNumeros.startsWith("55") && (apenasNumeros.length === 12 || apenasNumeros.length === 13)) {
    return `+${apenasNumeros}`;
  }
  
  // CPF (11 dígitos válidos) ou telefone (11 dígitos sem +55)
  if (apenasNumeros.length === 11) {
    if (validarCPF(apenasNumeros)) {
      return apenasNumeros;
    }
    return `+55${apenasNumeros}`;
  }
  
  // Telefone fixo/celular sem DDI (10 dígitos)
  if (apenasNumeros.length === 10) {
    return `+55${apenasNumeros}`;
  }
  
  // CNPJ
  if (apenasNumeros.length === 14) {
    return apenasNumeros;
  }
  
  return limpa;
}

function limparTexto(s: string) {
  return removerAcentos(s).replace(/[^a-zA-Z0-9 ]/g, "");
}

function limparNomeCidade(s: string) {
  return limparTexto(s).toUpperCase();
}

function buildPixPayload(opts: {
  chave: string;
  nome: string;
  cidade: string;
  valor?: string;
  txid?: string;
  descricao?: string;
}) {
  const chave = normalizarChavePix(opts.chave);
  const nome = limparNomeCidade(opts.nome).slice(0, 25) || "NOME";
  const cidade = limparNomeCidade(opts.cidade).slice(0, 15) || "CIDADE";
  const txid = (opts.txid?.trim() || "***").slice(0, 25);

  // Merchant Account Info (id 26)
  const gui = tlv("00", "BR.GOV.BCB.PIX");
  const key = tlv("01", chave);
  const desc = opts.descricao?.trim() ? tlv("02", limparTexto(opts.descricao).slice(0, 50)) : "";
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
  const [gerado, setGerado] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const payload = useMemo(() => {
    if (!chave.trim() || !nome.trim() || !cidade.trim()) return "";
    return buildPixPayload({ chave, nome, cidade, valor, descricao, txid });
  }, [chave, nome, cidade, valor, descricao, txid]);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (!payload || !gerado) {
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
  }, [payload, gerado]);

  const gerar = () => {
    if (!chave.trim() || !nome.trim() || !cidade.trim()) return;
    setGerado(true);
  };

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

            <button
              type="button"
              onClick={gerar}
              disabled={!chave.trim() || !nome.trim() || !cidade.trim()}
              className="mt-2 rounded-md bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Gerar QR Code
            </button>
          </div>

          {/* Preview */}
          <div className="flex flex-col items-center">
            {gerado ? (
              <>
                <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <canvas ref={canvasRef} width={320} height={320} />
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
              </>
            ) : (
              <div className="flex h-full min-h-[320px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 px-6 text-center">
                <p className="text-sm text-foreground/60">
                  Preencha os dados ao lado e clique em <strong>Gerar QR Code</strong> para visualizar o resultado.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Aviso legal e regras do Pix */}
        <section className="mt-16 w-full rounded-xl border border-red-200 bg-red-50 px-6 py-8 dark:border-red-900/40 dark:bg-red-950/20">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-lg font-semibold text-red-800 dark:text-red-200">
                Regras do Pix em Igrejas
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-red-900/80 dark:text-red-100/80">
                As regras do Pix em igrejas exigem que os repasses sejam feitos para uma conta
                bancária vinculada ao CNPJ da instituição, e não para contas de líderes ou
                pastores. Essa separação garante a transparência contábil e assegura a imunidade
                tributária prevista pela legislação.
              </p>

              <div className="mt-4 space-y-3 text-sm text-red-900/80 dark:text-red-100/80">
                <div className="rounded-lg bg-white/60 px-4 py-3 dark:bg-red-950/30">
                  <strong className="text-red-800 dark:text-red-200">Conta Jurídica Exclusiva:</strong>{" "}
                  O CNPJ é obrigatório. As chaves Pix (seja CNPJ, celular ou aleatória) devem
                  estar cadastradas na conta bancária aberta em nome da própria igreja. Misturar
                  dízimos e ofertas com a conta pessoal do pastor pode acarretar pesadas multas e
                  tributação.
                </div>
                <div className="rounded-lg bg-white/60 px-4 py-3 dark:bg-red-950/30">
                  <strong className="text-red-800 dark:text-red-200">Previsão Estatutária:</strong>{" "}
                  O estatuto social da igreja precisa estar atualizado e prever de forma clara as
                  normas para recebimento e administração de recursos por meios digitais.
                </div>
                <div className="rounded-lg bg-white/60 px-4 py-3 dark:bg-red-950/30">
                  <strong className="text-red-800 dark:text-red-200">Rastreabilidade e Comprovação:</strong>{" "}
                  Todas as transações são monitoradas pelos sistemas da Receita Federal e Bancos.
                  Todos os comprovantes de entradas (dízimos e ofertas) e saídas devem ser guardados
                  e enviados mensalmente à assessoria contábil da igreja.
                </div>
                <div className="rounded-lg bg-white/60 px-4 py-3 dark:bg-red-950/30">
                  <strong className="text-red-800 dark:text-red-200">Escrituração Fiscal:</strong>{" "}
                  Mesmo sendo instituições sem fins lucrativos e gozando de imunidade de impostos
                  sobre o templo, as igrejas são obrigadas a registrar todas as movimentações nas
                  declarações fiscais, como a ECF (Escrituração Contábil Fiscal).
                </div>
              </div>

              <p className="mt-4 text-sm font-medium text-red-900 dark:text-red-100">
                Para garantir total conformidade com a legislação e evitar riscos de autuação ou
                problemas fiscais, a IGREJA ESPERANÇA SEDE está abrindo contas em conformidade
                para as congregações, pastores dirigentes procurem a Secretária da Igreja para
                Solicitar.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 md:min-w-[240px]">
              <span className="text-xs uppercase tracking-wider text-red-700 dark:text-red-300">
                Falar com a Secretaria
              </span>
              <a
                href="https://wa.me/5562999854022"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.939L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Secretaria
              </a>
              <span className="text-xs text-red-700 dark:text-red-300">62 99985-4022</span>
            </div>
          </div>
        </section>
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