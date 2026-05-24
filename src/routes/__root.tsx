import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Hub de Apoio a Mídia e Comunicação" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Hub de Apoio a Mídia e Comunicação" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Hub de Apoio a Mídia e Comunicação" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/DHiOjp8ndWUzFfJtfqCiJhEeQ343/social-images/social-1779635857979-igreja-esperanca-v1-hub-de-apoio.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/DHiOjp8ndWUzFfJtfqCiJhEeQ343/social-images/social-1779635857979-igreja-esperanca-v1-hub-de-apoio.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen overflow-x-hidden bg-background">
        <header className="flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link to="/" className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
            Esperança Hub
          </Link>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.2em] text-foreground/70 sm:gap-6">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground font-semibold" }}>
              Início
            </Link>
            <Link to="/logomarca" activeProps={{ className: "text-foreground font-semibold" }}>
              Logomarca
            </Link>
            <Link to="/fontes" activeProps={{ className: "text-foreground font-semibold" }}>
              Fontes
            </Link>
            <Link to="/horas" activeProps={{ className: "text-foreground font-semibold" }}>
              Horas
            </Link>
            <Link to="/palavra" activeProps={{ className: "text-foreground font-semibold" }}>
              Palavra
            </Link>
            <Link to="/perfis" activeProps={{ className: "text-foreground font-semibold" }}>
              Perfis
            </Link>
            <Link to="/qr-pix" activeProps={{ className: "text-foreground font-semibold" }}>
              QR Pix
            </Link>
          </nav>
        </header>
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
