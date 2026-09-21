import Image from "next/image";
import Link from "next/link";

export default function CareReady() {
  return (
    <section className="pt-16 pb-8 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:items-start lg:gap-20">
        {/* image */}
        <div className="relative mx-auto aspect-square w-full max-w-115 flex-1">
          <Image
            src="/domestic-helper-care-ready.png"
            alt="Helper caring for an elderly woman"
            fill
            className="object-cover"
          />
        </div>

        {/* text content */}
        <div className="flex flex-1 flex-col gap-10">
          <p className="text-xs font-bold tracking-[2.16px] text-primary uppercase">
            Program
          </p>
          <h2 className="font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Care Ready Program
          </h2>
          <p className="leading-relaxed text-muted-dark">
            Want extra assurance? With our Care Ready Program, your helper
            receives hands-on experience caring for real elderly people before
            joining your home. This premium program is available for a small
            fee and ensures your helper is even better prepared from day one.
          </p>

          {/* offer */}
          <div className="flex w-fit flex-col gap-6 bg-dark p-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-3 font-fraunces font-semibold">
              <p className="text-2xl text-white xl:text-3xl">
                Secure a Care-Ready Helper Today
              </p>
              <p className="text-4xl leading-tight tracking-tight text-line xl:text-5xl">
                $400 Only
              </p>
            </div>
            <Link
              href="/contact"
              className="flex w-fit shrink-0 items-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
            >
              Learn More
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
