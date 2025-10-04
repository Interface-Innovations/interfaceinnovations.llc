"use client";
import Link from "next/link";
import Image from "next/image";
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

export function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200/70 dark:border-neutral-800">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-4 transition-all">
          <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 p-2 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 border border-neutral-200/50 dark:border-neutral-700/50">
            <Image 
              src="/icon.png" 
              alt="Interface Innovations Logo" 
              width={36} 
              height={36}
              className="w-9 h-9"
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-light text-xl tracking-wide text-neutral-800 dark:text-neutral-100">Interface</span>
            <span className="font-semibold text-xl tracking-wide text-neutral-900 dark:text-white">Innovations</span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium ml-0.5">LLC</span>
          </div>
        </Link>
        <nav className="flex gap-6 text-sm items-center">
          {isHomePage ? (
            <>
              {mainLinks.map((l) => (
                <a 
                  key={l.href} 
                  href={l.href} 
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </>
          ) : (
            <>
              <Link href="/" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                Home
              </Link>
              {policyLinks.map((l) => (
                <Link 
                  key={l.href} 
                  href={l.href}
                  className={`hover:text-brand-600 dark:hover:text-brand-400 transition-colors ${pathname === l.href ? 'text-brand-600 dark:text-brand-400 font-medium' : ''}`}
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

