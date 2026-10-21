import { useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CircleHelp,
  Clock3,
  CreditCard,
  FileText,
  PackageOpen,
  PackageX,
  Phone,
  RotateCcw,
  ShieldCheck,
  Truck,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CallLink } from "@/components/site-layout";
import { usePageMeta } from "@/lib/use-page-meta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroPhoto from "@/assets/core-support-hero.jpg";
import guidancePhoto from "@/assets/core-support-guidance.jpg";
import {
  ASSISTANCE_PHONE_DISPLAY,
  ASSISTANCE_PHONE_HREF,
  countDaysBetween,
} from "@/lib/core-support";

export const Route = createFileRoute("/")({ component: Index });

const issues = [
  {
    number: "01",
    title: "Order Not Received",
    description: "What to check when a package has not arrived.",
    icon: PackageOpen,
  },
  {
    number: "02",
    title: "Delivery & Tracking",
    description: "Next steps when tracking is unclear or delayed.",
    icon: Truck,
  },
  {
    number: "03",
    title: "Returns & Refunds",
    description: "Prepare for a return or refund request.",
    icon: RotateCcw,
  },
  {
    number: "04",
    title: "Payment Questions",
    description: "Organize information about a billing concern.",
    icon: CreditCard,
  },
  {
    number: "05",
    title: "Damaged or Incorrect Item",
    description: "Details and evidence that may help with a product issue.",
    icon: PackageX,
  },
  {
    number: "06",
    title: "Account Access Guidance",
    description: "Find the right next step if you cannot access an account.",
    icon: UserRound,
  },
];

const steps = [
  {
    number: "01",
    title: "Explain the issue",
    description:
      "Tell us what happened with your order so you can focus on the details that matter.",
  },
  {
    number: "02",
    title: "Understand your options",
    description:
      "Get general guidance on information to review, documents to prepare, and questions to ask.",
  },
  {
    number: "03",
    title: "Take your next step",
    description:
      "Use the guidance to approach the relevant retailer or its official support channel when account-specific action is required.",
  },
];

const questions = [
  {
    question: "Is Core Support an official retailer support service?",
    answer:
      "No. Core Support is an independent shopping assistance service and is not affiliated with or endorsed by Temu or any other retailer.",
  },
  {
    question: "Can Core Support issue my refund?",
    answer:
      "No. Refund approval and processing are controlled by the relevant retailer or payment provider. Core Support can offer general guidance on preparing for the next step.",
  },
  {
    question: "Can you access my shopping account?",
    answer:
      "No. Never share your password, verification codes, or account credentials. Account-specific actions should be completed through the retailer’s official website or support channel.",
  },
  {
    question: "Can you help with a missing delivery?",
    answer:
      "Core Support can help you identify relevant information to review, such as tracking details and delivery dates, and understand which questions may be useful to raise with the retailer.",
  },
  {
    question: "What if I received a damaged or incorrect product?",
    answer:
      "Keep the relevant order details and, where appropriate, photographs of the item and packaging. Check the retailer’s official policy for its reporting and return process.",
  },
  {
    question: "Is a refund guaranteed?",
    answer: "No. Outcomes depend on the retailer’s policies and the circumstances of the order.",
  },
  {
    question: "How do I get started?",
    answer: `Call Core Support at ${ASSISTANCE_PHONE_DISPLAY} to begin discussing your shopping concern.`,
  },
];

function Index() {
  usePageMeta(
    "Core Support | Clear Guidance for Online Shopping Problems",
    "Independent help understanding missing orders, delivery delays, returns, refunds, payment questions, and product issues. Call Core Support for guidance.",
  );
  const [startDate, setStartDate] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("Order not received");
  const [situation, setSituation] = useState("");
  const [copied, setCopied] = useState(false);

  const dayCount = useMemo(
    () => countDaysBetween(startDate, deadlineDate),
    [startDate, deadlineDate],
  );
  const generatedMessage = useMemo(() => {
    const details = situation.trim() || "[Briefly describe what happened]";
    return `Hello,\n\nI’m contacting you about my order and would appreciate your guidance.\n\nIssue: ${selectedIssue}\nDetails: ${details}\n\nCould you please let me know what information or next steps are needed?\n\nThank you.`;
  }, [selectedIssue, situation]);

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-pine text-background">
        <div
          className="pointer-events-none absolute -right-40 -top-48 size-[34rem] rounded-full border border-coral/15"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[620px] lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-16">
          <div className="relative z-10 min-w-0 max-w-2xl">
            <p className="mb-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-cream">
              <span className="size-2 rounded-full bg-coral" /> Independent Shopping Assistance
            </p>
            <h1 className="font-display text-[2.8rem] font-extrabold leading-[1.08] sm:text-6xl lg:text-[4.35rem]">
              Online shopping problems? Let’s find your next step.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-background/75 sm:text-lg sm:leading-8">
              Waiting on an order, confused about a refund, or dealing with a delivery problem? Core
              Support helps you understand your options and prepare for the next step.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <CallLink className="h-auto min-h-14 w-full max-w-[390px] justify-between whitespace-normal rounded-full bg-coral px-6 py-3 text-left text-base font-bold text-pine shadow-lg shadow-pine/20 hover:bg-cream sm:w-auto sm:min-w-[360px]">
                <span className="flex items-center gap-3">
                  <Phone aria-hidden="true" className="size-5" />
                  Call for Shopping Assistance
                </span>
                <span className="text-sm font-semibold">{ASSISTANCE_PHONE_DISPLAY}</span>
              </CallLink>
              <Link
                to="/"
                hash="issues"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
              >
                Explore Common Shopping Issues{" "}
                <ArrowDownRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-3 border-t border-background/15 pt-5 text-xs text-background/60">
              <ShieldCheck aria-hidden="true" className="size-4 text-cream" /> Independent guidance.
              Retailer decisions stay with the retailer.
            </div>
          </div>
          <div className="relative min-w-0 lg:pl-4">
            <div
              className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[2rem] border border-coral/35"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-pine-ink">
              <img
                src={heroPhoto}
                alt="A woman checks her phone beside a delivered parcel at home"
                width={1600}
                height={1200}
                fetchPriority="high"
                className="aspect-[1.24/1] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine/90 via-pine/30 to-transparent px-5 pb-5 pt-14 sm:px-7 sm:pb-7">
                <p className="font-display text-lg font-bold text-background">
                  A clearer way forward.
                </p>
                <p className="mt-1 text-sm text-background/75">
                  Start with the details that matter.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-border/60 bg-background px-4 py-3 text-pine shadow-lg sm:flex">
              <span className="grid size-9 place-items-center rounded-full bg-sage text-pine-ink">
                <Check aria-hidden="true" className="size-5" />
              </span>
              <span className="text-sm font-bold">Guidance for your next step</span>
            </div>
          </div>
        </div>
        <div
          className="h-1 w-full bg-gradient-to-r from-coral via-cream to-coral"
          aria-hidden="true"
        />
      </section>

      <section id="issues" className="scroll-mt-20 bg-sage px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-pine-ink">
                A place to start
              </p>
              <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
                What’s happening with your order?
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:pb-1">
              Choose the concern that sounds closest. We’ll help you think through what to review
              next.
            </p>
          </div>
          <div className="grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
            {issues.map(({ number, title, description, icon: Icon }) => (
              <article
                key={number}
                className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 border-t border-pine-ink/20 py-5 sm:gap-5 sm:py-6"
              >
                <span className="pt-1 font-mono text-xs text-pine-ink/70">{number}</span>
                <div className="min-w-0">
                  <div className="mb-3 flex items-center gap-2.5">
                    <Icon
                      aria-hidden="true"
                      className="size-[18px] shrink-0 text-pine-ink"
                      strokeWidth={1.8}
                    />
                    <h3 className="font-display text-base font-bold leading-5">{title}</h3>
                  </div>
                  <p className="max-w-xs text-sm leading-6 text-muted-foreground">{description}</p>
                  <a
                    href={ASSISTANCE_PHONE_HREF}
                    className="mt-3 inline-flex min-h-8 items-center gap-1 text-xs font-bold text-pine-ink underline decoration-pine-ink/30 underline-offset-4 hover:decoration-pine-ink"
                  >
                    Call for Guidance <ArrowRight aria-hidden="true" className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 bg-background px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-pine-ink">
              Simple by design
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              A little clarity can change what comes next.
            </h2>
          </div>
          <div className="relative mt-12 grid gap-9 md:grid-cols-3 md:gap-8">
            <div
              className="absolute left-[8%] right-[8%] top-6 hidden border-t border-dashed border-pine-ink/40 md:block"
              aria-hidden="true"
            />
            {steps.map((step) => (
              <article key={step.number} className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-pine-ink/30 bg-background font-mono text-sm font-semibold text-pine-ink">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-border md:hidden" />
                  <span className="hidden text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground md:block">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-11 border-t border-border pt-7">
            <CallLink className="h-auto min-h-12 whitespace-normal rounded-full bg-pine px-6 py-3 text-center text-background hover:bg-pine-ink">
              <Phone aria-hidden="true" /> Speak With Our Assistance Team —{" "}
              {ASSISTANCE_PHONE_DISPLAY}
            </CallLink>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="call-panel-title"
        className="bg-background px-5 pb-16 sm:px-8 sm:pb-24"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-coral via-[#f6c291] to-cream px-6 py-10 text-pine sm:rounded-[2rem] sm:px-12 sm:py-14 lg:px-16">
          <div
            className="pointer-events-none absolute -right-10 -top-32 size-80 rounded-full border border-pine/10"
            aria-hidden="true"
          />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-pine-ink">
                Here when you need a starting point
              </p>
              <h2
                id="call-panel-title"
                className="font-display text-3xl font-extrabold leading-tight sm:text-5xl"
              >
                Not sure where to start? Make a call.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-pine-ink sm:text-base">
                Get started by explaining your shopping concern. Core Support can help you
                understand what information to gather and which next steps may be relevant.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <p className="font-display text-2xl font-extrabold sm:text-3xl">
                {ASSISTANCE_PHONE_DISPLAY}
              </p>
              <CallLink
                size="lg"
                className="h-12 rounded-full bg-pine px-6 text-background hover:bg-pine-ink"
              >
                <Phone aria-hidden="true" /> Call Core Support Now
              </CallLink>
            </div>
          </div>
          <p className="relative mt-8 border-t border-pine/15 pt-5 text-xs leading-5 text-pine-ink">
            Core Support is an independent assistance service. Retailer-specific actions may need to
            be completed through the retailer’s official support channels.
          </p>
        </div>
      </section>

      <section id="tools" className="scroll-mt-20 bg-cream/45 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-pine-ink">
              A couple of useful starting points
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Small tools. A clearer next step.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-sage text-pine-ink">
                  <Clock3 aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">Return & Refund Date Planner</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Count the calendar days between two dates.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold" htmlFor="planner-start">
                  Order or return date
                  <input
                    id="planner-start"
                    type="date"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                    className="h-11 min-w-0 rounded-md border border-input bg-background px-3 font-normal text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold" htmlFor="planner-deadline">
                  Retailer’s stated deadline
                  <input
                    id="planner-deadline"
                    type="date"
                    value={deadlineDate}
                    onChange={(event) => setDeadlineDate(event.target.value)}
                    className="h-11 min-w-0 rounded-md border border-input bg-background px-3 font-normal text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </label>
              </div>
              {dayCount !== null ? (
                <div aria-live="polite" className="mt-5 rounded-lg bg-sage px-4 py-3 text-sm">
                  <p className="font-bold">
                    {dayCount} {dayCount === 1 ? "day" : "days"} between the dates you entered.
                  </p>
                  <p className="mt-1 leading-5 text-muted-foreground">
                    Verify the applicable deadline against the retailer’s current policy.
                  </p>
                </div>
              ) : (
                <p className="mt-5 rounded-lg bg-sage px-4 py-3 text-sm leading-5 text-muted-foreground">
                  Enter both dates to see the number of calendar days between them.
                </p>
              )}
            </article>

            <article className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-7">
              <div className="mb-6 flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-sage text-pine-ink">
                  <FileText aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">Support Message Builder</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Draft a polite note for the retailer.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <label className="grid gap-2 text-sm font-semibold" htmlFor="message-issue">
                  What is the issue?
                  <select
                    id="message-issue"
                    value={selectedIssue}
                    onChange={(event) => setSelectedIssue(event.target.value)}
                    className="h-11 w-full rounded-md border border-input bg-background px-3 font-normal text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {issues.map((issue) => (
                      <option key={issue.number}>{issue.title}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold" htmlFor="message-details">
                  Briefly describe what happened
                  <textarea
                    id="message-details"
                    rows={2}
                    value={situation}
                    onChange={(event) => setSituation(event.target.value)}
                    placeholder="Add a few details about your concern"
                    className="min-h-20 w-full resize-y rounded-md border border-input bg-background px-3 py-2.5 text-sm font-normal text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </label>
                <div
                  className="rounded-lg bg-sage px-4 py-3 text-sm leading-6 text-muted-foreground"
                  aria-live="polite"
                >
                  {generatedMessage.split("\n").map((line, index) => (
                    <span key={`${index}-${line}`}>
                      {line || " "}
                      <br />
                    </span>
                  ))}
                </div>
                <Button
                  type="button"
                  onClick={copyMessage}
                  className="h-11 w-full rounded-full bg-pine text-background hover:bg-pine-ink sm:w-fit sm:px-6"
                >
                  {copied ? <Check aria-hidden="true" /> : <FileText aria-hidden="true" />}
                  {copied ? "Copied" : "Copy Message"}
                </Button>
              </div>
            </article>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-lg font-bold">
              Need Help Understanding Your Next Step?
            </p>
            <CallLink
              variant="outline"
              className="h-11 w-fit rounded-full border-pine/25 bg-transparent px-5 text-pine hover:bg-sage"
            >
              <Phone aria-hidden="true" /> Call {ASSISTANCE_PHONE_DISPLAY}
            </CallLink>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1fr] lg:gap-16">
          <div className="relative min-w-0">
            <div
              className="absolute -bottom-4 -left-4 right-10 top-8 rounded-[1.5rem] bg-sage"
              aria-hidden="true"
            />
            <img
              src={guidancePhoto}
              alt="A woman reviews a delivery parcel and organizes order details at home"
              width={1408}
              height={1200}
              loading="lazy"
              className="relative aspect-[1.08/1] w-full rounded-[1.25rem] object-cover object-center"
            />
            <div className="absolute -right-2 bottom-5 grid size-14 place-items-center rounded-full bg-cream text-pine-ink sm:-right-4 sm:bottom-8 sm:size-16">
              <CircleHelp aria-hidden="true" className="size-7" />
            </div>
          </div>
          <div className="lg:pl-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-pine-ink">
              Why Core Support?
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Clearer guidance when online shopping gets complicated.
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {[
                "Straightforward explanations.",
                "Help organizing relevant order information.",
                "Guidance on preparing questions for retailer support.",
                "Simple tools for planning the next step.",
              ].map((benefit, index) => (
                <li
                  key={benefit}
                  className="flex items-start gap-4 py-4 text-sm font-semibold leading-6 sm:text-base"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sage font-mono text-[11px] text-pine-ink">
                    0{index + 1}
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">
              Core Support offers general assistance. Retailers and payment providers make
              account-specific decisions.
            </p>
          </div>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-20 bg-sage px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-pine-ink">
              The useful details
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              A few things worth knowing.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Clear expectations help you decide what to do next.
            </p>
            <a
              href={ASSISTANCE_PHONE_HREF}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-pine-ink underline decoration-pine-ink/30 underline-offset-4 hover:decoration-pine-ink"
            >
              Still have a question? Give us a call{" "}
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <Accordion type="single" collapsible className="border-t border-pine-ink/20">
            {questions.map((item, index) => (
              <AccordionItem
                value={`faq-${index}`}
                key={item.question}
                className="border-pine-ink/20"
              >
                <AccordionTrigger className="gap-4 py-5 text-left font-display text-base font-bold hover:no-underline sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-5 text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine px-5 py-16 text-background sm:px-8 sm:py-24">
        <div
          className="pointer-events-none absolute -right-20 -top-36 size-[28rem] rounded-full border border-coral/20"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-cream">
              Whenever you’re ready to talk
            </p>
            <h2 className="font-display text-4xl font-extrabold leading-[1.1] sm:text-6xl">
              Your next step starts with a conversation.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-background/75 sm:text-lg">
              Whether you have a delivery question, a return concern, or an order issue, start by
              explaining what happened.
            </p>
          </div>
          <div className="mt-9 flex flex-col items-start gap-5 border-t border-background/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-3xl font-extrabold sm:text-4xl">
              {ASSISTANCE_PHONE_DISPLAY}
            </p>
            <CallLink
              size="lg"
              className="h-auto min-h-14 w-full justify-center whitespace-normal rounded-full bg-coral px-7 py-3 text-center text-pine hover:bg-cream sm:w-auto"
            >
              <Phone aria-hidden="true" /> Call Core Support — {ASSISTANCE_PHONE_DISPLAY}
            </CallLink>
          </div>
        </div>
      </section>
    </>
  );
}
