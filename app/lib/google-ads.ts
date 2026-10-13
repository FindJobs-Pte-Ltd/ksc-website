export function trackWhatsAppClick() {
  const googleWindow = window as Window & {
    gtag?: (
      command: "event",
      eventName: "conversion",
      parameters: { send_to: string },
    ) => void;
  };

  googleWindow.gtag?.("event", "conversion", {
    send_to: "AW-18503570933/NGPvCLiLiJsdEPWrmPdE",
  });
}

