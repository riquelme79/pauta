// src/app/page.tsx
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Dices, Eye, Tv, Users } from "lucide-react";
import { Hanken_Grotesk } from "next/font/google";

const sans = Hanken_Grotesk({ subsets: ["latin"], display: "swap" });

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600";

const tools = [
  {
    href: "/filtro",
    icon: Tv,
    title: "O que tem pra hoje?",
    description:
      "Descubra instantaneamente quais filmes da sua Watchlist estão nos streamings que você assina.",
    isNew: false,
  },
  {
    href: "/consenso",
    icon: Users,
    title: "Match de Watchlist",
    description:
      "Conecte até 4 perfis e deixe nosso algoritmo encontrar o filme inédito ideal para o grupo.",
    isNew: false,
  },
  {
    href: "/roleta",
    icon: Dices,
    title: "Roleta de Decisão",
    description:
      "Tem apenas 90 minutos e quer um suspense? Filtre sua Watchlist por tempo disponível e humor.",
    isNew: true,
  },
  {
    href: "/pontos-cegos",
    icon: Eye,
    title: "Pontos Cegos",
    description:
      "Cruzamos os filmes que você já viu com listas de consenso crítico para revelar os clássicos que faltam na sua bagagem.",
    isNew: true,
  },
];

export default function Home() {
  return (
    <div
      className={`${sans.className} min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-zinc-100 selection:text-zinc-950`}
    >
      {/* Navbar */}
      <header className="border-b border-zinc-800/50">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
          <Link
            href="/"
            className={`text-xl font-semibold tracking-tight ${focus}`}
          >
            Pauta<span className="text-orange-600">.</span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/filtro"
              className={`hidden rounded-sm px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100 sm:inline-block ${focus}`}
            >
              Filtro
            </Link>
            <Link
              href="/consenso"
              className={`hidden rounded-sm px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100 sm:inline-block ${focus}`}
            >
              Consenso
            </Link>
            {/* Único botão preenchido em laranja da página */}
            <Link
              href="#ferramentas"
              className={`ml-1 rounded-sm bg-orange-600 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-orange-500 ${focus}`}
            >
              Começar
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-8 md:pb-40 md:pt-40">
          <h1 className="max-w-[18ch] text-balance text-[clamp(2.25rem,7.2vw,6rem)] font-semibold leading-[0.98] tracking-tighter text-zinc-100">
            A pauta definitiva para a sua noite de cinema.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 md:mt-12 md:text-xl">
            Cruzamos dados. Encontramos o filme perfeito. Você só precisa
            apertar o play. Uma ferramenta inovadora para mentes exaustas do
            catálogo.
          </p>

          <div className="mt-10">
            <Link
              href="#ferramentas"
              className={`group inline-flex h-12 items-center gap-2 rounded-sm bg-zinc-100 px-6 text-[15px] font-medium text-zinc-950 transition-colors hover:bg-white ${focus}`}
            >
              Escolher uma ferramenta
              <ArrowRight
                aria-hidden="true"
                strokeWidth={2}
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>

        {/* Ferramentas */}
        <section
          id="ferramentas"
          className="mx-auto max-w-6xl scroll-mt-8 px-4 pb-32 sm:px-8 md:pb-44"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Ferramentas
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {tools.map(({ href, icon: Icon, title, description, isNew }) => (
              <Link
                key={href}
                href={href}
                className={`group flex min-h-[300px] flex-col justify-between rounded-md border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-600 sm:p-8 ${focus}`}
              >
                <div className="flex items-start justify-between">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-6 w-6 text-zinc-400 transition-colors group-hover:text-orange-600"
                  />
                  <div className="flex items-center gap-4">
                    {isNew && (
                      <span className="text-sm font-medium text-orange-600">
                        Novo
                      </span>
                    )}
                    <ArrowUpRight
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-zinc-100"
                    />
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-zinc-400">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-zinc-100">
              © {new Date().getFullYear()} Pauta. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Projeto independente, sem afiliação ao Letterboxd.
            </p>
          </div>

          <ul className="flex items-center gap-6 text-sm text-zinc-400">
            {[
              { label: "Instagram", href: "#" },
              { label: "X", href: "#" },
              { label: "Letterboxd", href: "#" },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`rounded-sm transition-colors hover:text-zinc-100 ${focus}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}