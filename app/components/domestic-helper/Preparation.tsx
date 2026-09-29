import { Fragment } from "react";
import Image from "next/image";

const steps = [
  {
    image: "/domestic-helper-prepare-1.png",
    title: "Elderly Care",
    description:
      "Certified caregivers to ensure your senior loved ones are in good care at home. Chinese, Hokkien, or Cantonese speaking helpers are also available.",
  },
  {
    image: "/domestic-helper-prepare-2.png",
    title: "Childcare",
    description:
      "Experienced helpers in infant care and child care to provide a nurturing and safe environment for your little ones to grow healthily.",
  },
  {
    image: "/domestic-helper-prepare-3.png",
    title: "Housekeeping & Cooking",
    description:
      "Keep your home clean and enjoy home-cooked meals with our trained housemaids.",
  },
];

export default function Preparation() {
  return (
    <section className="pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        {/* title */}
        <h2 className="font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
          Care That Fits Your Household
        </h2>

        {/* steps */}
        <div className="grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-x-10">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              {index > 0 && <span className="hidden w-px bg-line lg:block" />}
              <div className="flex flex-col gap-5">
                <div className="relative aspect-3/2 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-fraunces text-xl font-semibold text-dark">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-dark">
                  {step.description}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
