import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { CopyButton } from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Support Our Work",
  description: `Contribute to ${site.name}. Direct bank transfer and UPI details to fund youth-led health camps, education kits, and rural outreach in Tamil Nadu.`,
  alternates: { canonical: "/donate" },
};

const impactTiers = [
  {
    amount: "₹500",
    title: "Student Learning Kit",
    description: "Notebooks, stationery, and learning materials for government school children.",
  },
  {
    amount: "₹1,500",
    title: "Health & Wellness Screening",
    description: "Essential medical checkups, eye tests, and hygiene kits for an underserved rural family.",
  },
  {
    amount: "₹3,000",
    title: "Green Community Drive",
    description: "Procuring native saplings, tree guards, and maintenance for village afforestation.",
  },
  {
    amount: "₹5,000",
    title: "Youth Leadership Camp",
    description: "Training materials, field gear, and logistics for young community organisers.",
  },
];

export default function DonatePage() {
  const whatsappUrl = `https://wa.me/91${site.phone.replace(/[^0-9]/g, "").slice(-10)}?text=${encodeURIComponent(
    `Hello Towards the Change Foundation, I have made a contribution and would like to share the confirmation details.`,
  )}`;

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-wide text-coral sm:text-sm">
          Support Our Mission
        </p>
        <h1 className="mt-2.5 font-display text-2xl font-semibold text-brand-dark sm:mt-3 sm:text-5xl">
          Help us show up where the need is greatest
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-foreground/75 sm:mt-4 sm:text-lg">
          Every single contribution directly funds medical camps, child protection workshops,
          sapling drives, and youth training across rural Tamil Nadu.
        </p>
      </section>

      {/* Main Payment Details Grid */}
      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Bank Transfer Card */}
          <div className="rounded-3xl border border-brand/15 bg-white p-5 shadow-sm sm:p-8 lg:col-span-7">
            <div className="flex items-center justify-between border-b border-black/5 pb-4">
              <div>
                <span className="inline-block rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
                  Direct Bank Transfer (NEFT / RTGS / IMPS)
                </span>
                <h2 className="mt-2 font-display text-xl font-semibold text-brand-dark sm:text-2xl">
                  Bank Account Details
                </h2>
              </div>
            </div>

            <dl className="mt-5 space-y-3 text-sm sm:mt-6 sm:space-y-4">
              <div className="flex flex-col justify-between gap-1 rounded-xl bg-sand/40 p-3 sm:flex-row sm:items-center sm:p-3.5">
                <dt className="text-xs text-foreground/60 sm:text-sm">Account Name</dt>
                <dd className="font-medium text-brand-dark">{site.bank.accountName}</dd>
              </div>

              <div className="flex flex-col justify-between gap-1.5 rounded-xl bg-sand/40 p-3 sm:flex-row sm:items-center sm:p-3.5">
                <dt className="text-xs text-foreground/60 sm:text-sm">Account Number</dt>
                <dd className="flex items-center justify-between gap-2 font-mono text-sm font-semibold text-brand-dark sm:justify-end sm:text-base">
                  <span>{site.bank.accountNumber}</span>
                  <CopyButton text={site.bank.accountNumber} label="Copy A/C" />
                </dd>
              </div>

              <div className="flex flex-col justify-between gap-1.5 rounded-xl bg-sand/40 p-3 sm:flex-row sm:items-center sm:p-3.5">
                <dt className="text-xs text-foreground/60 sm:text-sm">IFSC Code</dt>
                <dd className="flex items-center justify-between gap-2 font-mono text-sm font-semibold text-brand-dark sm:justify-end sm:text-base">
                  <span>{site.bank.ifsc}</span>
                  <CopyButton text={site.bank.ifsc} label="Copy IFSC" />
                </dd>
              </div>

              <div className="flex flex-col justify-between gap-1 rounded-xl bg-sand/40 p-3 sm:flex-row sm:items-center sm:p-3.5">
                <dt className="text-xs text-foreground/60 sm:text-sm">Bank Name</dt>
                <dd className="font-medium text-brand-dark">{site.bank.bankName}</dd>
              </div>

              <div className="flex flex-col justify-between gap-1 rounded-xl bg-sand/40 p-3 sm:flex-row sm:items-center sm:p-3.5">
                <dt className="text-xs text-foreground/60 sm:text-sm">Branch</dt>
                <dd className="font-medium text-brand-dark">{site.bank.branch}</dd>
              </div>
            </dl>
          </div>

          {/* UPI & Confirmation Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-black/5 bg-sand p-5 sm:p-8 lg:col-span-5">
            <div>
              <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-coral">
                Instant UPI & Support
              </span>
              <h2 className="mt-2 font-display text-xl font-semibold text-brand-dark sm:text-2xl">
                UPI / Phone Transfer
              </h2>
              <p className="mt-2.5 text-xs leading-relaxed text-foreground/75 sm:mt-3 sm:text-sm">
                You can transfer using any UPI app (Google Pay, PhonePe, Paytm) to the foundation mobile number:
              </p>

              <div className="mt-4 rounded-2xl border border-brand/20 bg-white p-3.5 sm:mt-5 sm:p-4">
                <p className="text-[11px] uppercase tracking-wide text-foreground/60 sm:text-xs">Foundation Mobile</p>
                <div className="mt-1 flex items-center justify-between">
                  <a
                    href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                    className="font-mono text-base font-bold text-brand hover:underline sm:text-lg"
                  >
                    {site.phone}
                  </a>
                  <CopyButton text={site.phone.replace(/[^+\d]/g, "")} label="Copy" />
                </div>
              </div>

              <div className="mt-6 space-y-3 rounded-2xl border border-black/5 bg-white/70 p-4 text-xs text-foreground/70">
                <p className="font-semibold text-brand-dark">Acknowledgment & Receipts</p>
                <p>
                  After making a transfer, please share your payment screenshot or transaction reference via WhatsApp or email so we can acknowledge your gift.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              >
                <span>Share Receipt on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand"
              >
                Need assistance? Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Tiers */}
      <section className="bg-sand/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold text-brand-dark">
              How your support creates change
            </h2>
            <p className="mt-3 text-sm text-foreground/70 sm:text-base">
              We keep administrative overhead minimal. Almost every rupee is put to work directly in field camps and community drives.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactTiers.map((tier) => (
              <div
                key={tier.amount}
                className="flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <span className="font-display text-3xl font-bold text-brand">
                    {tier.amount}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-brand-dark">
                    {tier.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/70 sm:text-sm">
                    {tier.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="font-display text-2xl font-semibold text-brand-dark sm:text-3xl">
          Recognised for Ground-Level Impact
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base">
          In 2026, founder {site.founder} received the Tamil Nadu Chief Minister&apos;s Youth Award for community empowerment.
          We work in close coordination with district administration, panchayats, and local institutions to ensure maximum accountability.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/programs"
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Explore our programs
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-brand/30 bg-white px-6 py-2.5 text-sm font-semibold text-brand-dark transition hover:border-brand"
          >
            Read our story
          </Link>
        </div>
      </section>
    </>
  );
}
