import Image from "next/image";

export default function Intro() {
  return (
    <>
      {/* banner */}
      <div className="relative aspect-1440/335 w-full">
        <Image
          src="/contact-hero.jpg"
          alt="Asian man and woman in professional conversation"
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
            Let&apos;s talk about what&apos;s next.
          </h1>

          {/* description */}
          <div className="flex flex-col md:items-end">
            <p className="leading-relaxed text-muted-dark md:max-w-[34%]">
              Whether you&apos;re looking for your next hire or your next
              opportunity, our team is here to help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
