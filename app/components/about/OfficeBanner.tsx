import Image from "next/image";

export default function OfficeBanner() {
  return (
    <div className="relative aspect-1440/423 w-full">
      <Image
        src="/about-office.jpg"
        alt="Modern office environment"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-dark to-transparent" />
    </div>
  );
}
