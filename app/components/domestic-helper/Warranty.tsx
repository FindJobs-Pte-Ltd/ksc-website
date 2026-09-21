import Image from "next/image";
import Link from "next/link";

export default function Warranty() {
  return (
    <section className="bg-surface pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 lg:flex-row lg:items-start lg:gap-20">
        {/* title */}
        <div className="flex flex-1 flex-col gap-6 font-fraunces font-semibold">
          <h2 className="max-w-lg text-3xl leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Extend Your Domestic Helper Warranty From
          </h2>
          <p className="text-2xl text-muted-dark sm:text-3xl">
            6 Months To 12 Months
          </p>
        </div>

        {/* offer */}
        <div className="flex flex-col gap-6 bg-dark p-6 lg:shrink-0">
          <Image
            src="/domestic-helper-warranty.png"
            alt="ReplacePlus extended warranty"
            width={250}
            height={250}
            className="mx-auto"
          />

          <div className="flex flex-col gap-6 border-y border-primary/30 py-6">
            <p className="font-fraunces text-2xl font-semibold text-white sm:text-3xl">
              Get Your Warranty Extend Today
            </p>
            <p className="text-center font-fraunces text-4xl leading-tight font-semibold tracking-tight text-primary sm:text-5xl">
              $300 Only
            </p>
          </div>

          <div className="leading-relaxed text-white">
            <p>All existing replacement terms applies.</p>
            <p>Available for all nationalities</p>
          </div>

          <Link
            href="/contact"
            className="flex w-fit items-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
          >
            Enquire Now
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
