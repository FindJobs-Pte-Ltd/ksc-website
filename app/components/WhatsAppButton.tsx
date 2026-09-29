import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6582337670"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KSC on WhatsApp"
      className="group fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-[50%_50%_50%_4px] bg-primary shadow-lg transition-colors duration-200 hover:bg-muted-dark"
    >
      <span className="pointer-events-none absolute right-full mr-3 rounded-md bg-dark px-3 py-2 text-sm whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Chat with us on WhatsApp
      </span>
      <Image src="/icon-whatsapp.svg" alt="" width={28} height={28} />
    </a>
  );
}
