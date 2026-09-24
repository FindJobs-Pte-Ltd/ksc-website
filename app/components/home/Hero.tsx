import Image from "next/image";

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
        <div className="flex max-w-2xl flex-col gap-3 font-fraunces font-semibold">
          <h1 className="text-3xl leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl xl:text-6xl">
            Singapore manpower solution agency
          </h1>
          <p className="text-lg leading-tight text-primary sm:text-xl">
            (MOM Comprehensive License 11C2878) established in 2011.
          </p>
        </div>

        {/* subtitle */}
        <p className="max-w-lg leading-relaxed text-muted-dark">
          We are the top agency covering the placement for MDW (Migrant
          Domestic Workers), Blue Collar workers (Local &amp; Foreign) &amp;
          White Collar Professionals (PMETs).
        </p>

        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-line" />
          <span className="text-xs tracking-[1.2px] text-muted-dark uppercase">Scroll</span>
        </div>
      </div>

      {/* right side */}
      <div className="relative mx-auto aspect-705/813 w-full max-w-sm bg-line md:mx-0 md:w-1/2 md:max-w-none xl:h-[min(calc(100vh-98px),813px)] xl:w-auto xl:shrink-0">
        <Image
          src="/team-group.jpg"
          alt="KSC team"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
