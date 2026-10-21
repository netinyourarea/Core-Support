import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/legal-page";
import { ASSISTANCE_PHONE_DISPLAY } from "@/lib/core-support";

export const Route = createFileRoute("/disclaimer")({ component: Disclaimer });

const sections: LegalSection[] = [
  {
    heading: "We are independent",
    paragraphs: [
      "Core Support is an independent shopping assistance service. We are not Temu, and we are not part of, affiliated with, authorised by, sponsored by, or endorsed by Temu or any other retailer, marketplace, carrier, bank, or payment provider.",
      "Retailer and brand names that appear on this website are the property of their respective owners and are mentioned only to describe the kinds of concerns people ask us about.",
    ],
  },
  {
    heading: "Retailers make the decisions",
    paragraphs: [
      "Delivery, return, refund, replacement, cancellation, payment, and account decisions are controlled by the relevant retailer or payment provider. Core Support does not represent or control those systems and cannot approve, issue, speed up, or reverse any of those outcomes.",
    ],
  },
  {
    heading: "General guidance only",
    paragraphs: [
      "What we share is general information to help you understand your options, such as which details to review, which documents to prepare, and which questions may be useful to raise. It is not legal, financial, or consumer-rights advice, and it does not replace the retailer's own official policies. Policies change, so check the retailer's current terms before acting.",
    ],
  },
  {
    heading: "No guaranteed outcomes",
    paragraphs: [
      "A refund, replacement, or other result is never guaranteed. Outcomes depend on the retailer's policies and the circumstances of the order. Any examples or descriptions on this website are illustrative and are not promises of a result.",
    ],
  },
  {
    heading: "No access to your accounts",
    paragraphs: [
      "We cannot see, access, or change your retailer accounts or payment details. Please never share your password, verification codes, or full payment card information with anyone claiming to help, including us. Complete account-specific actions through the retailer's official website or app.",
    ],
  },
  {
    heading: "Tools are for planning only",
    paragraphs: [
      "The Return & Refund Date Planner shows the number of calendar days between two dates you enter. It does not determine whether you are eligible for a return or refund, and it does not know your retailer's deadline rules. The Support Message Builder creates a general draft for you to review and edit. You remain responsible for checking dates and for the content of anything you send.",
    ],
  },
  {
    heading: "Protect yourself from impersonation",
    items: [
      "We will never ask for your passwords, verification codes, or full card details.",
      "We will never ask you to pay a fee to unlock a refund from a retailer.",
      "If someone contacts you claiming to be Core Support and asks for any of the above, do not share anything, and call us on the number shown on this website to check.",
    ],
  },
  {
    heading: "Questions",
    paragraphs: [
      `If anything here is unclear, call Core Support at ${ASSISTANCE_PHONE_DISPLAY}. See also our Terms of Service and Privacy Policy.`,
    ],
  },
];

function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      description="Core Support is independent of retailers such as Temu and offers general guidance only. Read what we can and cannot do."
      updated="October 21, 2026"
      intro="Please read this page so you know exactly who Core Support is, what our guidance covers, and where responsibility lies for retailer decisions."
      sections={sections}
    />
  );
}
