export default function Approach() {
  return (
    <section className="bg-dark py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:justify-between md:gap-20">
        {/* left content */}
        <h2 className="font-fraunces text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          We listen before we match.
        </h2>

        {/* right content */}
        <div className="flex max-w-lg flex-col gap-10 md:gap-15">
          <p className="leading-relaxed text-muted">
            We take the time to understand what matters on both sides of the
            recruitment process.
          </p>

          <div>
            <div className="flex flex-col gap-2 border-b border-line-dark py-6">
              <p className="text-xs font-medium tracking-[2.16px] text-primary uppercase">
                For Businesses
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Understanding the role, the team, and the wider business need. Not
                just what the job description says, but what success in the role
                actually looks like.
              </p>
            </div>
            <div className="flex flex-col gap-2 border-b border-line-dark py-6">
              <p className="text-xs font-medium tracking-[2.16px] text-primary uppercase">
                For Candidates
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Understanding experience, ambitions, and what they&apos;re looking for
                next—not just skills on paper, but longer-term career direction.
              </p>
            </div>
            <p className="py-6 font-fraunces text-xl font-semibold text-white">
              That understanding shapes every connection we make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
