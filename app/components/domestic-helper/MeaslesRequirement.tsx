import Image from "next/image";

export default function MeaslesRequirement() {
  return (
    <section className="py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:items-start lg:gap-20">
        {/* text content */}
        <div className="flex flex-1 flex-col gap-10">
          <p className="text-xs font-bold tracking-[2.16px] text-primary uppercase">
            MOM Requirement
          </p>

          {/* title */}
          <div className="flex flex-col gap-3">
            <h2 className="max-w-lg font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Mandatory Measles Immunity Requirement
            </h2>
            <p className="text-sm leading-relaxed font-bold text-primary">
              (Effective 1 September 2025)
            </p>
          </div>

          {/* note */}
          <p className="max-w-3xl border border-line bg-[#f7f9f9] p-6 leading-relaxed text-muted-dark">
            From 1 September 2025, employers must ensure that their migrant
            domestic workers (MDWs) have immunity against measles if their
            household has a child below seven years old who is not fully
            vaccinated against measles. This measure was taken by MOM to
            enhance our public health resilience and protect unvaccinated young
            children who are at higher risk of serious health complications from
            measles infections.
          </p>
        </div>

        {/* image */}
        <div className="relative mx-auto aspect-square w-full max-w-115 flex-1">
          <Image
            src="/domestic-helper-measles.png"
            alt="Measles vaccination being administered"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
