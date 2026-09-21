import Image from "next/image";

export default function UnlimitedReplacement() {
  return (
    <section className="pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:items-start lg:gap-20">
        {/* text content */}
        <div className="flex flex-1 flex-col gap-10">
          {/* kicker */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold tracking-[2.16px] text-primary uppercase">
              Placement fee
            </p>
            <div className="flex flex-wrap gap-x-6 text-sm leading-relaxed font-bold text-muted-dark">
              <p>Upon Arrival Of Helper</p>
              <p>Base On Selected Biodata</p>
            </div>
          </div>

          {/* title */}
          <div className="flex flex-col gap-3 font-fraunces font-semibold">
            <h2 className="text-3xl leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Unlimited Replacement
            </h2>
            <p className="text-xl leading-tight text-primary">
              For Fresh &amp; Experienced Helpers Package Within First 6 Months
            </p>
          </div>

          <p className="leading-relaxed text-muted-dark">
            All fees applies for replacement except the service fee in{" "}
            <span className="font-bold">all helper packages.</span>
          </p>

          {/* note */}
          <p className="w-fit border border-line bg-[#f7f9f9] p-6 text-sm leading-relaxed text-muted-dark">
            <span className="font-bold">Note: </span>
            Only 1 Replacement will be provided within the first 6 months for
            Transfer Helper package.
          </p>
        </div>

        {/* image */}
        <div className="relative mx-auto aspect-square w-full max-w-115 flex-1">
          <Image
            src="/domestic-helper-unlimited-replacement.png"
            alt="Helper assisting an elderly woman with her medication"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
