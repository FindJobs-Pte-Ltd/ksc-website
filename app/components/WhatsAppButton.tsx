"use client";

import Image from "next/image";
import { trackWhatsAppClick } from "../lib/google-ads";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6582337670"
      onClick={trackWhatsAppClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KSC on WhatsApp (opens in a new tab)"
      className="whatsapp-button fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-14 w-14 items-center justify-center gap-3 rounded-full border border-black/10 bg-[#2CD46D] text-dark shadow-[0_4px_16px_rgba(15,28,31,0.18)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#26c462] hover:shadow-[0_6px_20px_rgba(15,28,31,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark motion-safe:active:scale-95 motion-reduce:transition-none sm:right-[max(1.5rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:h-16 sm:w-auto sm:px-5"
    >
      <Image
        src="/icon-whatsapp.svg"
        alt=""
        width={28}
        height={28}
        className="whatsapp-icon shrink-0 brightness-0"
      />
      <span className="hidden text-left sm:block">
        <span className="block text-sm leading-5 font-bold">Chat with us</span>
        <span className="block text-xs leading-4">on WhatsApp</span>
      </span>
    </a>
  );
}
