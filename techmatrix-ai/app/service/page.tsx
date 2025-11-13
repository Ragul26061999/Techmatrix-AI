import Navbar from "../components/Navbar";

const navLinks = ["Home", "About Us", "Services", "Portfolio", "Contact"];

const expertise = [
  {
    title: "Custom Software Development",
    description:
      "Bespoke solutions tailored to solve your unique business challenges and drive growth. We build scalable and robust software from the ground up.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 text-sky-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="10" y="14" width="28" height="20" rx="4" />
        <path d="M14 20h6m8 0h6M24 29l4 5h-8l4-5Z" />
      </svg>
    ),
  },
  {
    title: "AI & Machine Learning",
    description:
      "Leverage data-driven insights and intelligent automation. We develop AI models that learn, adapt, and help you gain a competitive edge.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 text-sky-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="18" cy="18" r="4" />
        <circle cx="30" cy="12" r="3" />
        <circle cx="34" cy="24" r="4" />
        <circle cx="18" cy="30" r="5" />
        <path d="M18 22v4m8-14l-6 4m12 8-8-4m-8 10 12-2" />
      </svg>
    ),
  },
  {
    title: "Web Application Development",
    description:
      "Building scalable, secure, and modern web platforms that deliver exceptional, responsive user experiences across all devices.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 text-sky-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="8" y="10" width="32" height="24" rx="4" />
        <path d="M8 18h32M18 24h12" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Engaging native and cross-platform mobile applications for iOS and Android, designed to put your business in your users' pockets.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 text-sky-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="17" y="6" width="14" height="36" rx="4" />
        <circle cx="24" cy="34" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Service() {
  return (
    <div className="bg-[var(--page-bg)]">
      <Navbar links={navLinks} active="Services" />
      <div className="bg-gradient-to-br from-white/90 via-white/70 to-transparent pt-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 sm:px-8 lg:px-10">
          <section className="rounded-[36px] bg-white/80 px-6 py-16 shadow-[0_30px_80px_rgba(82,109,255,0.08)] ring-1 ring-white/60 sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6074ff]">
              Services
            </p>
            <h1 className="mt-6 text-4xl font-semibold text-[#1d3ca6] sm:text-5xl">
              Our Services: Engineering Your Digital Future
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-[#4a5c8f]">
              Techmatrix AI transforms your bold ideas into reality through
              cutting-edge technology, expert engineering, and a passion for
              innovation.
            </p>
          </section>

          <section className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7a8cc4]">
              Our Expertise
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#1f2f62]">
              Our Expertise
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#596b9c]">
              We provide a comprehensive suite of software development services
              designed to help you achieve your most ambitious goals.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {expertise.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-6 text-left shadow-[0_20px_60px_rgba(31,64,171,0.08)] ring-1 ring-slate-100"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e6efff]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1d2e57]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#4e5f84]">
                      {item.description}
                    </p>
                  </div>
                  <button className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#2f6bff]">
                    Learn More
                    <span aria-hidden="true">→</span>
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] bg-[#cfdcf4] px-6 py-12 text-center shadow-[0_30px_80px_rgba(49,80,172,0.15)] sm:px-16">
            <p className="text-base font-semibold text-[#2742a5]">
              Ready to build your next solution?
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-[#3a4f87]">
              Let's discuss how our expertise can help you achieve your goals.
              Schedule a free consultation with our experts today.
            </p>
            <button className="mt-8 rounded-full bg-[#2d6aff] px-8 py-3 text-sm font-semibold text-white shadow-[0_15px_30px_rgba(29,80,255,0.35)] transition hover:bg-[#1f51d6]">
              Start a Project
            </button>
          </section>

          {/* Footer is now in the root layout */}
        </div>
      </div>
    </div>
  );
}
