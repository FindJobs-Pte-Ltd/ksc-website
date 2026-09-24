import Image from "next/image";

export default function AboutRecruitment() {
  return (
    <section className="py-8 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:items-center md:justify-between">
        {/* image */}
        {/* TODO: swap for the image the client provides */}
        <div className="relative order-2 aspect-4/5 w-full max-w-115 flex-1 md:order-1">
          <Image
            src="/domestic-helper-hero.jpg"
            alt="Domestic helper at work"
            fill
            className="object-cover"
          />
        </div>

        {/* content */}
        <div className="order-1 flex flex-col gap-10 md:order-2">
          <div className="flex max-w-xl flex-col gap-3 font-fraunces font-semibold">
            <h2 className="text-3xl leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Hire your maid with us now!
            </h2>
            <p className="text-xl leading-tight text-primary">
              We offer the lowest Agency Fee in Singapore!
            </p>
          </div>
          <a
            href="https://wa.me/6582337670"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
          >
            <Image src="/icon-whatsapp.svg" alt="" width={20} height={20} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
