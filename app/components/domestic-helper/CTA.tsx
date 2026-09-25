import Image from "next/image";

export default function CTA() {
  return (
    <section className="bg-primary py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:items-end md:justify-between">
        {/* left content */}
        <div className="flex flex-col gap-6 text-white">
          <h2 className="max-w-xl font-fraunces text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Let us find the right helper for your household.
          </h2>
          <p className="max-w-md leading-relaxed">
            Share with us your requirements now
          </p>
        </div>

        {/* right content */}
        <a
          href="https://wa.me/6582337670"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2 self-start border border-primary bg-white px-4 py-3 text-sm font-bold whitespace-nowrap text-primary transition-colors duration-200 hover:bg-surface md:self-auto"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
            <Image src="/icon-whatsapp.svg" alt="" width={12} height={12} />
          </span>
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
