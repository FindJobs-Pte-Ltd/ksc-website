export default function AboutRecruitment() {
  return (
    <section className="pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:items-start md:justify-between">
        {/* title */}
        <h2 className="max-w-xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
          Recruitment is about more than filling a position.
        </h2>

        {/* description */}
        <div className="flex flex-col gap-4 leading-relaxed text-muted-dark md:max-w-xs">
          <p>
            A good hire has an impact far beyond the job description. It strengthens a
            team, moves a business forward, and creates opportunities for people to
            grow.
          </p>
          <p>
            KSC brings together industry knowledge, recruitment expertise, and a
            personal understanding of both sides of the process to make those
            connections count.
          </p>
        </div>
      </div>
    </section>
  );
}
