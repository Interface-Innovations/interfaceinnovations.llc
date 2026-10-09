"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const policyLinks = [
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
];

// The wordmark already links home, so the explicit Home link is dropped on narrow screens.
const homeLinkClass = "hidden sm:inline";

const navLinkClass =
  "text-xs font-medium uppercase tracking-[0.12em] sm:tracking-[0.18em] text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors";

export function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-50/85 dark:bg-neutral-950/85 border-b border-neutral-200 dark:border-neutral-800">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Interface Innovations LLC, home" className="flex items-baseline gap-2 whitespace-nowrap">
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white">
            Interface Innovations
          </span>
          <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500">
            LLC
          </span>
        </Link>
        <nav className="flex gap-4 sm:gap-8 items-center">
          {isHomePage ? (
            <>
              {mainLinks.map((l) => (
                <a key={l.href} href={l.href} className={`${navLinkClass} ${l.label === "Home" ? homeLinkClass : ""}`}>
                  {l.label}
                </a>
              ))}
            </>
          ) : (
            <>
              <Link href="/" className={`${navLinkClass} ${homeLinkClass}`}>
                Home
              </Link>
              {policyLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className={`${navLinkClass} ${pathname === l.href ? "text-neutral-950 dark:text-white" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
