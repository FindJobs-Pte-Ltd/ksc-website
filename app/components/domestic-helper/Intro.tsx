import Image from "next/image";
import Link from "next/link";

const countries = ["Myanmar", "Indonesia", "Philippines"];

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
          Let&apos;s Find Personalised Senior Care for Your Family
        </h1>

        {/* subtitle */}
        <p className="max-w-md leading-relaxed text-muted-dark">
          We provide well-trained, trustworthy and caring domestic helpers to
          support your family&apos;s daily needs. With our personalised
          matching and preparation process, you can be confident in the care
          your loved ones receive.
        </p>

        {/* countries */}
        <div className="flex divide-x divide-line">
          {countries.map((country) => (
            <span
              key={country}
              className="px-2 font-fraunces text-sm font-semibold text-muted-dark first:pl-0 sm:px-4 sm:text-xl"
            >
              {country}
            </span>
          ))}
        </div>

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
      <div className="relative mx-auto aspect-705/813 w-full max-w-sm bg-line md:mx-0 md:w-1/2 md:max-w-none xl:h-[min(calc(100vh-98px),813px)] xl:w-auto xl:shrink-0">
        <Image
          src="/domestic-helper-hero.jpg"
          alt="Domestic helper at work"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
