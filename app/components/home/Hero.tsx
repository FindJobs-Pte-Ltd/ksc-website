import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-10 pt-12 pb-6 md:flex-row md:items-center md:gap-16 md:py-0">
      {/* left side */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-6 px-6 md:gap-8 md:pl-12 lg:gap-10 lg:pl-20">
        {/* kicker text */}
        <p className="text-xs font-medium tracking-[2.16px] text-primary uppercase">
          KSC Consultants
        </p>

        {/* main title */}
        <h1 className="max-w-2xl font-fraunces text-4xl leading-tight font-semibold tracking-tight text-dark sm:text-5xl lg:text-6xl xl:text-7xl xl:leading-none">
          The right people can change everything.
        </h1>

        {/* subtitle */}
        <p className="max-w-md leading-relaxed text-muted-dark">
          KSC connects businesses with people who can make a difference—and helps
          professionals find opportunities worth making their next move for.
        </p>

        {/* button links */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/employer"
            className="flex items-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
          >
            For Employers
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/job-seekers"
            className="flex items-center gap-2 border border-primary bg-white px-4 py-3 text-sm font-bold text-primary transition-colors duration-200 hover:bg-primary/10"
          >
            For Job Seekers
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-line" />
          <span className="text-xs tracking-[1.2px] text-muted-dark uppercase">Scroll</span>
        </div>
      </div>

      {/* right side */}
      <div className="relative mx-auto aspect-705/813 w-full max-w-sm bg-line md:mx-0 md:w-1/2 md:max-w-none xl:h-[min(calc(100vh-98px),813px)] xl:w-auto xl:shrink-0">
        <Image
          src="/hero-portrait.jpg"
          alt="KSC team"
          fill
          className="object-cover object-[50%_46%]"
          priority
        />
      </div>
    </section>
  );
}
