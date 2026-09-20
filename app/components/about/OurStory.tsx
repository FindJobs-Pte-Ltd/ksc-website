export default function OurStory() {
  return (
    <section className="pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto grid items-end gap-x-10 gap-y-8 px-4 md:grid-cols-2">
        {/* left content */}
        <div className="flex flex-col gap-6">
          <p className="hidden font-fraunces text-primary/12 text-9xl leading-none md:block">
            2011
          </p>
          <p className="font-fraunces text-3xl font-semibold text-primary md:text-dark">Est. 2011</p>
        </div>

        {/* right content */}
        <div className="flex flex-col gap-6">
          {/* title */}
          <h2 className="font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:max-w-154 lg:text-5xl">
            Built on experience. Driven by relationships.
          </h2>

          <div className="flex flex-col gap-8">
            {/* description */}
            <div className="flex flex-col gap-4 leading-relaxed text-muted-dark">
              <p>
                Since 2011, KSC has worked across a diverse range of industries,
                helping businesses find the people they need and professionals take
                their next career step.
              </p>
              <p>
                Our experience has taught us that recruitment is rarely as simple as
                matching a CV to a job description.
              </p>
            </div>
            <p className="font-fraunces text-xl font-semibold text-dark">
              The right fit requires understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
