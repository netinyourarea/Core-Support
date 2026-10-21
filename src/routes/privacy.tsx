import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/legal-page";
import { ASSISTANCE_PHONE_DISPLAY } from "@/lib/core-support";

export const Route = createFileRoute("/privacy")({ component: Privacy });

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "Core Support is an independent shopping assistance service. We offer general guidance to people dealing with online shopping concerns such as missing orders, delivery delays, returns, refunds, payment questions, and damaged or incorrect items. We are not a retailer, and we are not affiliated with or endorsed by Temu or any other retailer.",
      "This Privacy Policy explains what information we handle when you visit this website or call us, why we handle it, and the choices you have.",
    ],
  },
  {
    heading: "Information we collect",
    paragraphs: [
      "We keep data collection to a minimum. This website has no accounts, sign-up forms, or checkout.",
    ],
    items: [
      "Information you share when you call us, such as your name, the phone number you call from, and a description of your shopping concern, including order details you choose to give us.",
      "Basic technical information that your browser sends to any website or hosting provider, such as IP address, browser type, device type, and the pages requested. This is used to deliver and secure the site.",
      "Content you type into the on-page tools (the Return & Refund Date Planner and the Support Message Builder). This stays in your browser and is not sent to us.",
    ],
  },
  {
    heading: "Information we ask you not to share",
    paragraphs: [
      "Please never give us your passwords, one-time verification codes, full payment card numbers, security codes, or other account credentials, whether on a call or in the message builder. We do not need them to offer guidance, and we will never ask for them.",
    ],
  },
  {
    heading: "How we use information",
    paragraphs: [
      "We do not sell your personal information, and we do not use it for advertising profiles. We use it:",
    ],
    items: [
      "To understand your concern and give you general guidance on what to review and prepare.",
      "To respond to your call and to follow up where you have asked us to.",
      "To keep the website secure, working, and free of abuse.",
      "To meet legal obligations and to protect our rights when necessary.",
    ],
  },
  {
    heading: "On-page tools",
    paragraphs: [
      "The Return & Refund Date Planner and the Support Message Builder run entirely in your browser. What you type is not transmitted to our servers. The message builder copies text to your clipboard only when you select Copy Message. Closing or refreshing the page clears what you entered.",
    ],
  },
  {
    heading: "Cookies and third-party services",
    paragraphs: [
      "This website does not use advertising or analytics cookies. To display the site's typefaces, your browser loads fonts from Google Fonts, which means your IP address and browser details are received by Google as part of that request. Google handles that data under its own privacy policy.",
      "If we add analytics or other tools in future, we will update this policy and, where the law requires, ask for your consent first.",
    ],
  },
  {
    heading: "Sharing information",
    paragraphs: ["We share personal information only in limited circumstances:"],
    items: [
      "With service providers that help us run the website and our phone service, who may process information only on our instructions.",
      "Where required by law, regulation, court order, or a valid request from a public authority.",
      "To protect the rights, safety, or property of Core Support, our users, or others.",
    ],
  },
  {
    heading: "Retention",
    paragraphs: [
      "We keep information only as long as it is needed for the purposes described above or as the law requires, and then delete or anonymise it.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "We use reasonable technical and organisational measures to protect the information we handle. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your choices and rights",
    paragraphs: [
      `Depending on where you live, you may have the right to ask what personal information we hold about you, to have it corrected or deleted, to object to or restrict certain uses, and to withdraw consent you have given. To make a request, call us at ${ASSISTANCE_PHONE_DISPLAY}. We may need to confirm your identity before acting on a request.`,
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "This website and our service are intended for adults. We do not knowingly collect personal information from children. If you believe a child has given us personal information, please contact us so we can delete it.",
    ],
  },
  {
    heading: "Third-party sites",
    paragraphs: [
      "We may refer you to a retailer's official website or support channel. We do not control those sites and are not responsible for their content or privacy practices. Please review their policies before sharing information.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. The date at the top shows when it was last revised. Continued use of the website after a change means you accept the updated policy.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      `Questions about this policy or about how we handle your information? Call Core Support at ${ASSISTANCE_PHONE_DISPLAY}.`,
    ],
  },
];

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Core Support handles information when you visit this website or call us, and the choices you have."
      updated="October 21, 2026"
      intro="Your privacy matters to us. This policy explains in plain language what Core Support collects, how it is used, and what control you have."
      sections={sections}
    />
  );
}
