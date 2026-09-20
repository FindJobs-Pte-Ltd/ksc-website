import Link from "next/link";

const companyLinks = [
  { label: "About", href: "/about" },
  // not use temporary — no /services page exists yet
  // { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const workWithUsLinks = [
  { label: "For Employers", href: "/employer" },
  { label: "For Job Seekers", href: "/job-seekers" },
  { label: "Talk to KSC", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        {/* footer header content */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* footer left content */}
          <div className="flex flex-col gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ksc-logo-mark.png"
              alt="KSC Consultants"
              className="h-8.5 w-auto self-start"
            />
            <p className="text-sm leading-relaxed text-muted md:max-w-xs">
              A recruitment consultancy built around a simple idea: better
              recruitment starts with understanding people.
            </p>
            <p className="text-xs font-medium tracking-[2.16px] text-primary/60 uppercase">
              Est. 2011
            </p>
          </div>

          {/* footer link groups */}
          <div className="grid gap-10 sm:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-medium tracking-[2.16px] text-primary/60 uppercase">
                Company
              </p>
              <nav className="flex flex-col gap-4">
                {companyLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-muted">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-xs font-medium tracking-[2.16px] text-primary/60 uppercase">
                Work with us
              </p>
              <nav className="flex flex-col gap-4">
                {workWithUsLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-muted">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* footer bottom content */}
        <div className="flex flex-col gap-4 border-t border-primary/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-medium tracking-[2.16px] text-primary/30 uppercase">
            © 2026 KSC Consultants. All rights reserved.
          </p>
          <p className="text-xs font-medium tracking-[2.16px] text-primary/30 uppercase">
            Recruitment Consultancy
          </p>
        </div>
      </div>
    </footer>
  );
}
