import { Fragment } from "react";
import Image from "next/image";

const steps = [
  {
    image: "/domestic-helper-prepare-1.png",
    title: "Regular Process Update",
    description:
      "Get 5 key updates on your helper's preparation progress, with each stage tracked to ensure full readiness",
  },
  {
    image: "/domestic-helper-prepare-2.png",
    title: "Highly Personalised Preparation",
    description:
      "We gather 31 key points to create your helper's routine card, followed by 35 days of preparation and 7 days of practical.",
  },
  {
    image: "/domestic-helper-prepare-3.png",
    title: "Home Deployment Orientation",
    description:
      "Our deployment specialist conducts an 11-point, 1-hour orientation in your home, covering daily routines, elderly medication, and home maintenance",
  },
];

export default function Preparation() {
  return (
    <section className="pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        {/* title */}
        <h2 className="max-w-xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
          Prepare to Provide Exceptional Elderly Care
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
