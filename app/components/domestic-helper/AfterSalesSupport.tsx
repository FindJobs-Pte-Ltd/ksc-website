import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Dedicated Support Team Online",
    description: "Our support team is always available to guide you and your helper.",
  },
  {
    title: "Warm and Reassuring",
    description:
      "Experience peace of mind with 6 scheduled check-ins over 6 months. Continuous support ensures a smooth and loving caregiving journey.",
  },
];

export default function AfterSalesSupport() {
  return (
    <section className="bg-dark py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-20 px-4">
        {/* header content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* title */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold tracking-[2.16px] text-primary uppercase">
              After-Sales Support
            </p>
            <h2 className="font-fraunces text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Hire your helper with ease of mind
            </h2>
          </div>

          {/* features */}
          <div className="flex flex-col gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-10">
                <span className="flex size-13 shrink-0 items-center justify-center bg-white">
                  <Image src="/icon-check.svg" alt="" width={24} height={24} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-fraunces text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="font-fraunces text-sm text-primary italic">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* guarantee + refund */}
        <div className="grid gap-10 border-t border-line-dark lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-line-dark">
          {/* money back guarantee */}
          <div className="flex flex-col items-center gap-10 pt-16 text-center lg:justify-self-end lg:px-22 lg:py-16">
            {/* badge */}
            <div>
              <div className="flex items-center gap-3 bg-[#1e7675] px-4 py-3 text-white sm:px-10">
                <p className="font-fraunces text-5xl leading-none font-semibold sm:text-7xl">
                  100%
                </p>
                <p className="max-w-48 font-fraunces text-2xl leading-tight font-semibold sm:text-3xl">
                  Money Back Guarantee
                </p>
              </div>

              <div className="bg-surface py-3">
                <p className="font-bold text-muted-dark">
                  For Fresh &amp; Experienced Helper Package
                </p>
              </div>
            </div>

            <p className="leading-relaxed text-white">
              Your satisfaction with our service is our top priority, if
              your first hire doesn&apos;t work out, we&apos;ve got you
              covered.
            </p>
          </div>

          {/* refund */}
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:px-22 lg:py-16 lg:text-left">
            <div className="flex flex-col gap-3">
              <h3 className="font-fraunces text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
                Receive FULL Refund
              </h3>
              <p className="font-fraunces text-xl font-semibold text-white">
                of Your Agency Fees*
              </p>
            </div>

            <div className="flex flex-col gap-1 text-muted">
              <p>We return your money with absolutely no hassle.</p>
              <p>*Terms and conditions apply.</p>
            </div>

            <Link
              href="/contact"
              className="flex w-fit items-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
            >
              Contact Support
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
