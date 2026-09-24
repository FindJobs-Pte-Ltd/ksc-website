export default function Footer() {
  return (
    <footer className="bg-surface py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        {/* footer header content */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ksc-logo-mark.png"
              alt="KSC Consultants"
              className="h-8.5 w-auto self-start"
            />

            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/businessgood.png"
                alt="Business For Good, Social Enterprise Member of raiSE Singapore"
                className="h-20 w-auto shrink-0"
              />
              <p className="text-sm leading-relaxed text-muted-dark md:max-w-xs">
                We are a Singapore social enterprise, a member of raiSE SG.
              </p>
            </div>
          </div>

          {/* certifications */}
          <div className="flex items-center gap-4 self-start md:self-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bizsafe.png"
              alt="bizSAFE 3"
              className="h-20 w-auto"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/raise-verified-leading.png"
              alt="raiSE Verified Leading Social Enterprise 2025"
              className="h-20 w-auto"
            />
          </div>
        </div>

        {/* footer bottom content */}
        <div className="flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-medium tracking-[2.16px] text-muted-dark uppercase">
            © 2026 KSC Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
