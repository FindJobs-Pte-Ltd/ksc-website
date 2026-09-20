import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <>
      {/* banner */}
      <div className="relative aspect-1440/335 w-full">
        <Image
          src="/employer-hero.jpg"
          alt="Asian professionals working together"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* intro */}
      <section className="pt-16 pb-8 md:py-20 lg:py-25">
        <div className="container mx-auto flex flex-col gap-6 px-4">
          {/* title */}
          <h1 className="font-fraunces text-4xl leading-tight font-semibold tracking-tight text-dark sm:text-5xl md:max-w-[55%] lg:text-6xl xl:text-7xl xl:leading-none">
            Before we find the right talent, we understand what you need.
          </h1>

          {/* description */}
          <div className="flex flex-col md:items-end">
            <div className="flex flex-col gap-4 md:max-w-[34%]">
              <div className="flex flex-col gap-4 leading-relaxed text-muted-dark">
                <p>
                  Tell us what your business needs—not just the position
                  you&apos;re trying to fill.
                </p>
                <p>
                  KSC takes the time to understand your requirements, then uses
                  recruitment expertise and industry knowledge to connect you
                  with relevant talent.
                </p>
              </div>
              <Link
                href="/contact"
                className="flex items-center gap-2 self-start bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
              >
                Talk to KSC
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
