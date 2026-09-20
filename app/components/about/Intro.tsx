import Image from "next/image";

export default function Intro() {
  return (
    <>
      {/* banner */}
      <div className="relative aspect-1440/335 w-full">
        <Image
          src="/about-hero.jpg"
          alt="People in a professional discussion"
          fill
          className="object-cover object-[50%_26%]"
          priority
        />
      </div>

      {/* intro */}
      <section className="pt-16 pb-8 md:py-20 lg:py-25">
        <div className="container mx-auto flex flex-col gap-6 px-4">
          {/* title */}
          <h1 className="font-fraunces text-4xl leading-tight font-semibold tracking-tight text-dark sm:text-5xl md:max-w-[55%] lg:text-6xl xl:text-7xl xl:leading-none">
            People are at the centre of what we do.
          </h1>

          {/* description */}
          <div className="flex flex-col md:items-end">
            <div className="flex flex-col gap-4 leading-relaxed text-muted-dark md:max-w-[34%]">
              <p>
                KSC Consultants is a recruitment consultancy built around a simple
                idea: better recruitment starts with understanding people.
              </p>
              <p>
                We work with businesses looking for talent and professionals
                looking for their next opportunity, bringing the two together
                through industry knowledge, experience, and genuine relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
