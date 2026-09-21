import Link from "next/link";

const benefits = [
  {
    title: "Lower Upfront Cost For Employers",
    descriptions: ["Always ready to assist you and your helper"],
  },
  {
    title: "Helpers Are More Motivated",
    descriptions: [
      "They take a micro loan in their home country to pay for training & documentation - not from the employer.",
      "When helpers carry the responsibility themselves, they are more driven to perform and complete the contract.",
    ],
  },
  {
    title: "Higher Commitment = Better Retention",
    descriptions: [
      "With a personal loan to repay, helpers are more likely to stay for the full 2 years, reducing the chance of early returns or replacement.",
    ],
  },
];

export default function ZeroLoan() {
  return (
    <section className="bg-surface pt-16 pb-8 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-20 px-4">
        {/* intro */}
        <div className="flex flex-col gap-6">
          <h2 className="font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Zero-Loan Philippine Helpers
          </h2>
          <p className="max-w-3xl leading-relaxed text-muted-dark">
            We strictly follow POEA rules and regulations. That&apos;s why all
            our Philippine helpers are zero-loan helpers, ensuring they start
            work debt-free and in full compliance with the law.
          </p>
          <Link
            href="/contact"
            className="flex w-fit items-center gap-3 py-1 text-sm font-bold text-[#009ea4] transition-colors duration-200 hover:text-dark"
          >
            Read More
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* why this model works better */}
        <div className="flex flex-col gap-6">
          <h3 className="font-fraunces text-3xl font-semibold text-dark">
            Why This Model Works Better
          </h3>

          <div className="grid md:grid-cols-3 md:divide-x md:border-t md:border-line md:pt-10">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col gap-5 border-t border-line py-8 last:pb-0 md:border-t-0 md:px-10 md:py-0 md:first:pl-0 md:last:pr-0"
              >
                <h4 className="font-fraunces text-xl leading-tight font-semibold text-dark">
                  {benefit.title}
                </h4>
                {benefit.descriptions.map((description) => (
                  <p
                    key={description}
                    className="text-sm leading-relaxed text-muted-dark"
                  >
                    {description}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
