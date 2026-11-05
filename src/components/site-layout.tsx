import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import logoMark from "@/assets/core-support-logo.png";
import { ASSISTANCE_PHONE_DISPLAY, ASSISTANCE_PHONE_HREF } from "@/lib/core-support";

export const navItems = [
  ["Shopping Issues", "issues"],
  ["How It Works", "how-it-works"],
  ["Free Tools", "tools"],
  ["FAQs", "faqs"],
] as const;

export const legalLinks = [
  ["Privacy Policy", "/privacy"],
  ["Terms of Service", "/terms"],
  ["Disclaimer", "/disclaimer"],
] as const;

export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      to="/"
      hash="top"
      className={`inline-flex shrink-0 items-center gap-2.5 ${inverse ? "text-background" : "text-pine"}`}
      aria-label="Core Support home"
    >
      <img
        src={logoMark}
        alt=""
        width={1024}
        height={1024}
        className="size-9 rounded-lg shadow-sm"
      />
      <span className="font-display text-[1.25rem] font-extrabold tracking-normal">
        Core Support
      </span>
    </Link>
  );
}

export function CallLink({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button> & { children: ReactNode }) {
  return (
    <Button asChild className={className} {...props}>
      <a href={ASSISTANCE_PHONE_HREF}>{children}</a>
    </Button>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <div className="justify-self-start">
          <Wordmark />
        </div>
        <nav
          aria-label="Main navigation"
          className="hidden items-center justify-center gap-8 lg:flex"
        >
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              to="/"
              hash={href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-pine"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center justify-self-end gap-2">
          <CallLink
            size="sm"
            className="hidden h-10 rounded-full bg-pine px-5 text-background hover:bg-pine-ink sm:inline-flex"
          >
            <Phone aria-hidden="true" />
            <span>{ASSISTANCE_PHONE_DISPLAY}</span>
          </CallLink>
          <CallLink
            size="icon"
            aria-label={`Call ${ASSISTANCE_PHONE_DISPLAY}`}
            className="grid size-10 rounded-full bg-pine text-background sm:hidden"
          >
            <Phone aria-hidden="true" />
          </CallLink>
          <Button
            variant="outline"
            size="icon"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="size-10 rounded-full border-border lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-5 py-3 lg:hidden"
        >
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              to="/"
              hash={href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 items-center justify-between border-b border-border/70 text-sm font-semibold last:border-0"
            >
              {label}
              <ChevronRight aria-hidden="true" className="size-4 text-muted-foreground" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-pine px-5 pb-24 pt-8 text-background sm:px-8 sm:pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-background/15 pb-8 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-md">
            <Wordmark inverse />
            <p className="mt-4 text-sm leading-6 text-background/65">
              Independent guidance for the moments when online shopping doesn’t go to plan.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm sm:gap-x-16">
            <nav aria-label="Footer navigation" className="flex flex-col">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-cream">
                Explore
              </p>
              {navItems.map(([label, href]) => (
                <Link
                  key={href}
                  to="/"
                  hash={href}
                  className="min-h-8 font-medium text-background/75 transition-colors hover:text-cream"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <nav aria-label="Legal" className="flex flex-col">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-cream">Legal</p>
              {legalLinks.map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="min-h-8 font-medium text-background/75 transition-colors hover:text-cream"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <p className="max-w-4xl py-5 text-xs leading-6 text-background/60">
          Core Support is an independent shopping assistance service. It is not Temu or any other
          retailer, and it does not represent or control retailer refund, delivery, payment, or
          account systems.
        </p>
        <div className="flex flex-col gap-2 border-t border-background/15 pt-4 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Core Support. All rights reserved.</p>
          <a
            href={ASSISTANCE_PHONE_HREF}
            className="inline-flex min-h-9 items-center gap-2 font-semibold text-cream"
          >
            <Phone aria-hidden="true" className="size-3.5" />
            {ASSISTANCE_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}

function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <CallLink className="h-12 w-full rounded-full bg-pine text-background hover:bg-pine-ink">
        <Phone aria-hidden="true" /> {ASSISTANCE_PHONE_DISPLAY}
      </CallLink>
    </div>
  );
}

function FloatingCallButton() {
  return (
    <a
      href={ASSISTANCE_PHONE_HREF}
      aria-label={`Call ${ASSISTANCE_PHONE_DISPLAY}`}
      className="fixed bottom-6 right-6 z-50 hidden h-14 items-center gap-2 rounded-full bg-coral px-6 text-base font-bold text-pine shadow-lg shadow-pine/25 transition-colors hover:bg-cream sm:inline-flex"
    >
      <Phone aria-hidden="true" className="size-5" />
      {ASSISTANCE_PHONE_DISPLAY}
    </a>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <MobileCallBar />
      <FloatingCallButton />
    </div>
  );
}
