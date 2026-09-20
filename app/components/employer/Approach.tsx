import Image from "next/image";

export default function Approach() {
  return (
    <section className="pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:items-center">
        {/* text content */}
        <div className="flex flex-1 flex-col gap-10">
          <h2 className="max-w-xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            We start with the business, not the CV.
          </h2>
          <div className="flex max-w-md flex-col gap-4 leading-relaxed text-muted-dark">
            <p>
              A job description tells us what a role requires. Understanding
              your business tells us what the right person needs to bring to
              it.
            </p>
            <p>
              We look at the experience, capabilities, and qualities that will
              make someone successful in the role—and use that understanding
              to guide the search.
            </p>
          </div>
        </div>

        {/* image */}
        <div className="relative aspect-3/2 w-full flex-1">
          <Image
            src="/employer-office.jpg"
            alt="Modern office collaborative professional environment"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
