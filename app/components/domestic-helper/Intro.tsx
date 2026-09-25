import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex flex-col items-center gap-10 pt-12 pb-6 md:flex-row md:items-center md:gap-16 md:py-0">
      {/* left side */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-6 px-6 md:gap-8 md:pl-12 lg:gap-10 lg:pl-20">
        {/* kicker text */}
        <p className="text-xs font-medium tracking-[2.16px] text-primary uppercase">
          Domestic helpers
        </p>

        {/* main title */}
        <h1 className="max-w-2xl font-fraunces text-4xl leading-tight font-semibold tracking-tight text-dark sm:text-5xl lg:text-6xl xl:text-7xl xl:leading-none">
          Hire your maid with us today!
        </h1>

        {/* subtitle */}
        <p className="max-w-md leading-relaxed font-bold text-primary">
          * Lowest Agency Fee Guaranteed *
        </p>

        {/* button link */}
        <Link
          href="/contact"
          className="flex w-fit items-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
        >
          Find Your Helper
          <span aria-hidden>→</span>
        </Link>
      </div>

      {/* right side */}
      <div className="relative mx-auto aspect-3/2 w-full max-w-lg bg-line md:mx-0 md:w-1/2 md:max-w-none">
        <Image
          src="/domestic-helper-team.png"
          alt="KSC domestic helper team"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
