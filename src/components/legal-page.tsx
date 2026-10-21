import { Link } from "@tanstack/react-router";

import { usePageMeta } from "@/lib/use-page-meta";
import { legalLinks } from "@/components/site-layout";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, description, updated, intro, sections }: LegalPageProps) {
  usePageMeta(`${title} | Core Support`, description);

  return (
    <article className="bg-background px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-pine-ink">Legal</p>
        <h1 className="font-display text-4xl font-extrabold leading-tight text-pine sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
        <p className="mt-6 text-base leading-7 text-foreground/85">{intro}</p>

        <nav
          aria-label="On this page"
          className="mt-8 rounded-xl border border-border bg-sage/50 p-5"
        >
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-pine-ink">On this page</p>
          <ol className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
            {sections.map((section, index) => (
              <li key={section.heading}>
                <a
                  href={`#section-${index + 1}`}
                  className="font-medium text-pine underline decoration-pine/25 underline-offset-4 hover:decoration-pine"
                >
                  {index + 1}. {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 space-y-9">
          {sections.map((section, index) => (
            <section key={section.heading} id={`section-${index + 1}`} className="scroll-mt-24">
              <h2 className="font-display text-xl font-bold text-pine sm:text-2xl">
                {index + 1}. {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground marker:text-pine-ink sm:text-base">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-sm">
          {legalLinks.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="font-semibold text-pine underline decoration-pine/25 underline-offset-4 hover:decoration-pine"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/"
            className="font-semibold text-pine underline decoration-pine/25 underline-offset-4 hover:decoration-pine"
          >
            Back to home
          </Link>
        </div>
      </div>
    </article>
  );
}
