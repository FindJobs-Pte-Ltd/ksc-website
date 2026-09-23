import Image from "next/image";

export default function Industries() {
  return (
    <section className="pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:items-center md:justify-between">
        {/* image */}
        {/* TODO: swap for the image the client provides */}
        <div className="relative order-2 aspect-4/5 w-full max-w-115 flex-1 md:order-1">
          <Image
            src="/employer-office.jpg"
            alt="Supply chain professionals at work"
            fill
            className="object-cover"
          />
        </div>

        {/* content */}
        <div className="order-1 flex flex-col gap-10 md:order-2">
          <h2 className="max-w-xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Your supply chain hiring partner.
          </h2>
          <div className="flex flex-col gap-4">
            <p className="max-w-md leading-relaxed text-muted-dark">
              We are the experts in PMET and C-suite placements in the
              Supply Chain (Logistics, freight, warehousing and
              transportation) industry
            </p>
            <a
              href="mailto:susan@kschr.com"
              className="flex w-fit items-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
            >
              Email Us
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
