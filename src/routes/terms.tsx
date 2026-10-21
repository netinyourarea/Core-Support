import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/legal-page";
import { ASSISTANCE_PHONE_DISPLAY } from "@/lib/core-support";

export const Route = createFileRoute("/terms")({ component: Terms });

const sections: LegalSection[] = [
  {
    heading: "Acceptance of these terms",
    paragraphs: [
      "By using the Core Support website or calling our assistance line, you agree to these Terms of Service. If you do not agree, please do not use the website or service.",
    ],
  },
  {
    heading: "What Core Support provides",
    paragraphs: [
      "Core Support is an independent shopping assistance service. We provide general information and guidance to help you understand your options for online shopping concerns, including missing or delayed orders, returns and refunds, payment questions, damaged or incorrect items, and account access. The website also offers simple planning tools, such as a date planner and a message builder.",
    ],
  },
  {
    heading: "What Core Support does not do",
    items: [
      "We are not a retailer, marketplace, bank, or payment provider, and we are not affiliated with or endorsed by Temu or any other retailer.",
      "We cannot approve, issue, or process refunds, replacements, cancellations, or delivery outcomes. Those decisions belong to the relevant retailer or payment provider.",
      "We cannot access, change, or recover your retailer accounts, and we will never ask for your passwords or verification codes.",
      "We do not provide legal, financial, or professional advice.",
      "We do not guarantee any particular outcome.",
    ],
  },
  {
    heading: "No guarantee of results",
    paragraphs: [
      "Outcomes depend on the retailer's policies, the circumstances of your order, and decisions made by parties outside our control. Information and guidance we provide are general in nature and offered in good faith, but may not fit your situation or reflect the retailer's latest policy. Always check the retailer's current official terms.",
    ],
  },
  {
    heading: "Your responsibilities",
    items: [
      "Give accurate information when you contact us.",
      "Do not share passwords, verification codes, full card numbers, or other credentials with us.",
      "Complete account-specific actions through the retailer's official website or support channel.",
      "Keep track of retailer deadlines. Our planning tools are a convenience, and you are responsible for confirming the applicable deadline.",
      "Use the website lawfully and do not interfere with its operation or attempt to gain unauthorised access.",
    ],
  },
  {
    heading: "Planning tools",
    paragraphs: [
      "The Return & Refund Date Planner counts calendar days between two dates you enter and does not account for business days, time zones, or retailer-specific rules. The Support Message Builder produces a general draft that you should review and edit before sending. Both tools are provided as-is for convenience.",
    ],
  },
  {
    heading: "Fees",
    paragraphs: [
      "The website and its tools are free to use. If a charge ever applies to a service, we will tell you clearly before you agree to it. Standard call charges from your phone provider may apply.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The Core Support name, logo, text, graphics, and website design are owned by or licensed to Core Support and are protected by applicable laws. You may view and use the website for personal, non-commercial purposes. You may not copy, modify, distribute, or create derivative works from it without our written permission.",
      "Retailer names and marks mentioned on this site belong to their respective owners and are used only to identify those businesses.",
    ],
  },
  {
    heading: "Third-party links and services",
    paragraphs: [
      "We may refer to third-party websites or support channels. We do not control them and are not responsible for their content, policies, or actions. Your dealings with any third party are solely between you and that party.",
    ],
  },
  {
    heading: "Disclaimer of warranties",
    paragraphs: [
      "To the fullest extent permitted by law, the website and our services are provided “as is” and “as available”, without warranties of any kind, whether express or implied, including warranties of accuracy, fitness for a particular purpose, and non-infringement. We do not warrant that the website will be uninterrupted or error-free.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, Core Support and its owners, staff, and partners are not liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of money, data, or opportunity, arising from your use of the website or reliance on guidance we provide, including any refund or other outcome a retailer or payment provider grants or declines. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    heading: "Indemnity",
    paragraphs: [
      "You agree to be responsible for any claim arising from your misuse of the website or your breach of these terms, to the extent permitted by law.",
    ],
  },
  {
    heading: "Changes to the website and these terms",
    paragraphs: [
      "We may change or discontinue any part of the website, and we may update these terms from time to time. The date at the top shows when they were last revised. Continued use after a change means you accept the updated terms.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws that apply in the jurisdiction where Core Support operates, without regard to conflict-of-law rules. Any dispute will be handled by the courts of that jurisdiction unless the law of your country of residence gives you other mandatory rights.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [`Questions about these terms? Call Core Support at ${ASSISTANCE_PHONE_DISPLAY}.`],
  },
];

function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms that apply when you use the Core Support website and independent shopping assistance service."
      updated="October 21, 2026"
      intro="These terms explain what you can expect from Core Support, what we can and cannot do, and what we ask of you when you use our website and assistance line."
      sections={sections}
    />
  );
}
