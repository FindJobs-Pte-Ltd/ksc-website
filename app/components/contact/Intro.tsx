import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative aspect-1440/335 w-full">
      <Image
        src="/contact-hero.jpg"
        alt="Asian man and woman in professional conversation"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
