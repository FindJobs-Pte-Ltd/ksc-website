import Image from "next/image";

export default function Services() {
  return (
    <section className="py-8 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:items-center">
        {/* text content */}
        <div className="flex flex-1 flex-col gap-10">
          <h2 className="max-w-xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Your blue collar hiring partner in Singapore.
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex max-w-md flex-col gap-4 leading-relaxed text-muted-dark">
              <p>
                We are the best agency to support your blue collar hiring in
                Singapore with over 200k local (Singaporean &amp; PR)
                candidates in our database
              </p>
              <p>
                Our expertise covers warehouse workers, cleaners, retail
                staff, F&amp;B crews and more!
              </p>
            </div>
            <a
              href="mailto:stanley@kschr.com"
              className="flex w-fit items-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
            >
              Email Us
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* image */}
        <div className="relative mx-auto aspect-4/5 w-full max-w-115 flex-1">
          <Image
            src="/team-stanley.png"
            alt="KSC consultant Stanley"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
