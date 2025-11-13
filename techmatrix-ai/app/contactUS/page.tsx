import Navbar from "../components/Navbar";

const navLinks = ["Home", "About Us", "Services", "Portfolio", "Contact"];

const contactDetails = [
  {
    label: "contact@techmatrix.ai",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-5 w-5 text-[#f47d7d]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="5" y="7" width="22" height="18" rx="3" />
        <path d="m5 10 11 8 11-8" />
      </svg>
    ),
  },
  {
    label: "+1 (555) 123-4567",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-5 w-5 text-[#f9a66c]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M9 4h14v24H9z" />
        <circle cx="16" cy="24" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "123 Innovation Drive, Suite 404\nTech Park, CA 94043, USA",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-5 w-5 text-[#f471b5]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M16 4c-4 0-7 3.2-7 7.3C9 18 16 28 16 28s7-10 7-16.7C23 7.2 20 4 16 4Z" />
        <circle cx="16" cy="11.5" r="2.5" />
      </svg>
    ),
  },
];

const socialLinks = [
  { label: "Dribbble", icon: "dribbble" },
  { label: "Twitter", icon: "twitter" },
  { label: "GitHub", icon: "github" },
];

const selectOptions = ["Project Quote", "Partnership", "General Inquiry"];

export default function ContactUs() {
  return (
    <div className="bg-[#f5f8fb]">
      <Navbar links={navLinks} active="Contact" />

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-10 sm:px-8 lg:px-10">
        <header className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold text-[#1d2b38]">
            Let’s Build Something Great Together
          </h1>
          <p className="text-lg text-[#5a6573]">
            We’re ready to discuss your new project, answer your questions, or
            explore potential partnerships. Reach out and let’s get the
            conversation started.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="space-y-8 rounded-3xl bg-white/90 p-6 shadow-[0_20px_70px_rgba(28,38,45,0.08)] ring-1 ring-white/60">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-[#1d2b38]">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-[#fbfbfd] px-4 py-3 text-sm text-[#4a5360]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-inner">
                      {detail.icon}
                    </div>
                    <p className="whitespace-pre-line">{detail.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#1d2b38]">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-white text-[#8b96a4] transition hover:text-[#1c7d99]"
                  >
                    {social.icon === "twitter" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M21 5.5c-.7.3-1.3.5-2 .6.7-.4 1.2-1 1.4-1.8-.6.3-1.4.6-2.1.7-.6-.7-1.5-1-2.4-1-1.9 0-3.4 1.6-3.4 3.5 0 .3 0 .6.1.8-2.8-.1-5.3-1.5-7-3.7-.3.5-.5 1-.5 1.6 0 1.2.6 2.2 1.5 2.8-.5 0-1-.2-1.4-.4 0 1.7 1.1 3.1 2.6 3.4-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3.1 2.3-1.1.8-2.4 1.3-3.9 1.3h-.8c1.4.9 3 1.5 4.8 1.5 5.8 0 9-4.9 9-9.2v-.4c.7-.5 1.3-1.1 1.8-1.8Z" />
                      </svg>
                    )}
                    {social.icon === "dribbble" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.8 9a8.2 8.2 0 0 1-2.6.1 20 20 0 0 0-.6-1.3c1-.5 1.9-1.2 2.7-2a8.2 8.2 0 0 1 .5 3.2ZM15.3 5a8.4 8.4 0 0 1-2.3 1 25.4 25.4 0 0 0-2.6-3A8.2 8.2 0 0 1 15.3 5Zm-5.6-.8a24 24 0 0 1 2.5 2.9 22 22 0 0 1-6.9.6c1.1-1.6 2.6-2.8 4.4-3.5ZM6 8.7a23.7 23.7 0 0 0 7.8-.4c.2.4.4.7.6 1.2a9.7 9.7 0 0 1-6 6.5A8.2 8.2 0 0 1 6 8.8Zm3.2 8.6c1.4-.7 2.7-1.8 3.7-3.1.6 1.4 1 2.9 1.2 4.4a8.1 8.1 0 0 1-4.9-1.3Zm6.6 1c-.3-1.4-.8-2.8-1.3-4.2 1.1-.2 2.3-.2 3.8 0a8.2 8.2 0 0 1-2.5 4.2Z" />
                      </svg>
                    )}
                    {social.icon === "github" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5V19c-3 .7-3.6-1.4-3.6-1.4-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1 3 .8a2 2 0 0 1 .5-1.3c-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3.1 1.2a10.2 10.2 0 0 1 5.6 0c2.2-1.5 3-1.2 3-1.2.6 1.5.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.1-2.5 5-4.9 5.3.4.4.6 1 .6 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="space-y-6 rounded-3xl bg-white px-6 py-8 shadow-[0_25px_80px_rgba(25,40,48,0.1)] ring-1 ring-white/60">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-[#1d2b38]">
                Send Us a Message
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-[#4e5864]">
                Full Name
                <input
                  type="text"
                  placeholder="e.g., John Doe"
                  className="mt-2 w-full rounded-xl border border-[#e0e6ed] bg-[#fdfefe] px-4 py-3 text-sm text-[#1d2b38] outline-none focus:border-[#90d8df]"
                />
              </label>
              <label className="text-sm font-medium text-[#4e5864]">
                Company Name
                <input
                  type="text"
                  placeholder="e.g., Techmatrix Inc."
                  className="mt-2 w-full rounded-xl border border-[#e0e6ed] bg-[#fdfefe] px-4 py-3 text-sm text-[#1d2b38] outline-none focus:border-[#90d8df]"
                />
              </label>
              <label className="text-sm font-medium text-[#4e5864]">
                Work Email
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-[#e0e6ed] bg-[#fdfefe] px-4 py-3 text-sm text-[#1d2b38] outline-none focus:border-[#90d8df]"
                />
              </label>
              <label className="text-sm font-medium text-[#4e5864]">
                Phone Number
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="mt-2 w-full rounded-xl border border-[#e0e6ed] bg-[#fdfefe] px-4 py-3 text-sm text-[#1d2b38] outline-none focus:border-[#90d8df]"
                />
              </label>
            </div>
            <label className="text-sm font-medium text-[#4e5864]">
              Reason for Inquiry
              <select className="mt-2 w-full rounded-xl border border-[#e0e6ed] bg-[#fdfefe] px-4 py-3 text-sm text-[#1d2b38] outline-none focus:border-[#90d8df]">
                {selectOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-[#4e5864]">
              Message
              <textarea
                rows={4}
                placeholder="Tell us about your project or inquiry..."
                className="mt-2 w-full rounded-xl border border-[#e0e6ed] bg-[#fdfefe] px-4 py-3 text-sm text-[#1d2b38] outline-none focus:border-[#90d8df]"
              />
            </label>
            <div className="space-y-2 text-center">
              <button
                type="submit"
                className="w-full rounded-full bg-[#7fd1d8] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(127,209,216,0.45)] transition hover:bg-[#69c3cb]"
              >
                Send Message
              </button>
              <p className="text-xs text-[#8a94a3]">
                We respect your privacy and won’t share your information.
              </p>
            </div>
          </form>
        </section>
      </main>

      {/* Footer is now in the root layout */}
    </div>
  );
}
