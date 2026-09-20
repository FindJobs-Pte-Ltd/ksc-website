"use client";

import { useState, type SubmitEvent } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          reason: formData.get("reason"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-surface py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4 lg:flex-row lg:gap-30">
        {/* image */}
        <div className="relative aspect-3/2 w-full flex-1 lg:aspect-3/4">
          <Image
            src="/contact-office.jpg"
            alt="Modern office workspace"
            fill
            className="object-cover"
          />
        </div>

        {/* form */}
        <div className="flex flex-1 flex-col gap-10">
          {/* title */}
          <div>
            <h2 className="font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Have a question?
            </h2>
            <p className="mt-4 text-sm text-muted-dark">
              Fill in the form and our team will get back to you.
            </p>
          </div>

          {/* form content */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-15">
              <div>
                <label className="text-xs font-medium tracking-[2.16px] text-muted-dark uppercase">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="mt-3 block w-full border-b border-line bg-transparent pb-3 text-sm text-dark placeholder:text-muted focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-medium tracking-[2.16px] text-muted-dark uppercase">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="mt-3 block w-full border-b border-line bg-transparent pb-3 text-sm text-dark placeholder:text-muted focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium tracking-[2.16px] text-muted-dark uppercase">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="Your phone number"
                className="mt-3 block w-full border-b border-line bg-transparent pb-3 text-sm text-dark placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-medium tracking-[2.16px] text-muted-dark uppercase">
                I&apos;m contacting KSC about{" "}
                <span className="text-primary">*</span>
              </label>
              <select
                name="reason"
                required
                defaultValue=""
                className="mt-3 block w-full border-b border-line bg-transparent pb-3 text-sm text-dark focus:border-primary focus:outline-none"
              >
                <option value="" disabled>
                  Please select…
                </option>
                <option value="employer">I&apos;m an employer</option>
                <option value="job-seeker">I&apos;m a job seeker</option>
                <option value="domestic-helper">Domestic helper enquiry</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium tracking-[2.16px] text-muted-dark uppercase">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us what you're looking for…"
                className="mt-3 block w-full resize-none border-b border-line bg-transparent pb-3 text-sm text-dark placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-fit items-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Enquiry"}
              <span aria-hidden>→</span>
            </button>

            {status === "sent" && (
              <p className="text-sm text-primary">
                Thanks! We&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
