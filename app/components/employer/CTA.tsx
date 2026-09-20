import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-primary py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:items-end md:justify-between">
        {/* left content */}
        <div className="flex flex-col gap-6 text-white">
          <h2 className="max-w-xl font-fraunces text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Have a role to fill?
          </h2>
          <p className="max-w-md leading-relaxed">
            Let&apos;s talk about the kind of person you&apos;re looking for.
          </p>
        </div>

        {/* right content */}
        <Link
          href="/contact"
          className="flex shrink-0 items-center gap-2 self-start border border-primary bg-white px-4 py-3 text-sm font-bold whitespace-nowrap text-primary transition-colors duration-200 hover:bg-surface md:self-auto"
        >
          Talk to a Consultant
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
