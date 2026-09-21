import Image from "next/image";

const addOns = [
  {
    title: "Placement Fee Protector",
    price: "5% of Placement Fee",
    icon: { src: "/icon-protect.svg", width: 20, height: 22.5 },
  },
  {
    title: "Indemnity Fee",
    price: "$54.50",
    icon: { src: "/icon-fee.svg", width: 21.5, height: 18.5 },
  },
  {
    title: "Measles Vaccination (1st Dose)",
    price: "$120.00",
    icon: { src: "/icon-syringe.svg", width: 24, height: 24 },
  },
];

export default function AddOns() {
  return (
    <section className="bg-surface py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 lg:flex-row lg:gap-20">
        {/* intro */}
        <div className="flex flex-col gap-6 lg:w-100 lg:shrink-0">
          <h2 className="font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Add - On Services
          </h2>
          <p className="leading-relaxed text-muted-dark">
            Services commonly selected by employers for added financial
            protection and administrative convenience.
          </p>
        </div>

        {/* add-on list */}
        <div className="grid gap-10 md:grid-cols-2 lg:flex-1 lg:grid-cols-3">
          {addOns.map((addOn) => (
            <div key={addOn.title} className="flex flex-col gap-5">
              <span className="flex size-10 items-center justify-center bg-dark">
                <Image
                  src={addOn.icon.src}
                  alt=""
                  width={addOn.icon.width}
                  height={addOn.icon.height}
                />
              </span>
              <h3 className="flex-1 font-fraunces text-xl leading-tight font-semibold text-dark">
                {addOn.title}
              </h3>
              <p className="font-fraunces text-xl leading-tight font-semibold text-primary">
                {addOn.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
