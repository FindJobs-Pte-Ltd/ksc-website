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
        <div className="max-w-2xl font-fraunces font-semibold">
          <h1 className="text-xl leading-tight tracking-tight text-dark sm:text-2xl lg:text-3xl xl:text-4xl">
            KSC is a Singapore manpower solution agency (MOM Comprehensive
            License 11C2878) established in 2011.
          </h1>
        </div>

        {/* subtitle */}
        <p className="max-w-lg leading-relaxed text-muted-dark">
          We are the top agency covering the placement for MDW (Migrant
          Domestic Workers), Blue Collar workers (Local &amp; Foreign) &amp;
          White Collar Professionals (PMETs).
        </p>
      </div>

      {/* right side */}
      <div className="relative mx-auto aspect-6/5 w-full max-w-lg md:mx-0 md:w-1/2 md:max-w-4xl">
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
