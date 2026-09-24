import { Fragment } from "react";
import Image from "next/image";

const steps = [
  {
    image: "/domestic-helper-prepare-1.png",
    title: "Service-Focused",
    description:
      "We keep you informed through 5 essential preparation milestones, so you know your helper is ready at every stage.",
  },
  {
    image: "/domestic-helper-prepare-2.png",
    title: "Personalised Preparation, Every Step of the Way",
    description:
      "Our process starts by assessing your household's specific needs to develop a tailored daily routine. Your helper then participates in a thorough orientation and intensive hands-on practice to boost her confidence.",
  },
  {
    image: "/domestic-helper-prepare-3.png",
    title: "A Smooth Start at Home",
    description:
      "While you wait to fetch your helper, we spend an hour briefing her on your daily routines, elderly care needs, and home maintenance so she is fully prepared for her first day.",
  },
];

export default function Preparation() {
  return (
    <section className="pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        {/* title */}
        <h2 className="font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
          Getting Your Helper Ready
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
