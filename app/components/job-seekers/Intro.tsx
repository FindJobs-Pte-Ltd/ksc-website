import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <>
      {/* banner */}
      <div className="relative aspect-1440/335 w-full">
        <Image
          src="/job-seekers-hero.jpg"
          alt="Asian professional at work in modern office"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* intro */}
      <section className="py-16 md:py-20 lg:py-25">
        <div className="container mx-auto flex flex-col gap-6 px-4">
          {/* title */}
          <h1 className="font-fraunces text-4xl leading-tight font-semibold tracking-tight text-dark sm:text-5xl lg:text-6xl xl:text-7xl xl:leading-none">
            Your career is more <br className="hidden md:block" />
            than a CV.
          </h1>
          {/* description */}
          <div className="flex flex-col md:items-end">
            <div className="flex flex-col gap-4 md:max-w-[34%]">
              <div className="flex flex-col gap-4 leading-relaxed text-muted-dark">
                <p>
                  We want to understand the person behind your experience.
                  Whether you&apos;re actively looking or simply considering
                  what&apos;s next, our team can help you understand your
                  options and navigate recruitment with confidence.
                </p>
                <p>
                  We work across a range of industries and have access to
                  opportunities that don&apos;t always appear on job boards.
                  When we understand what you&apos;re looking for, we&apos;re
                  in a better position to connect you with the right
                  opportunity at the right time.
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
