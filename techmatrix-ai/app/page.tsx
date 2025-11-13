import Navbar from "./components/Navbar";

const navLinks = ["Home", "About Us", "Services", "Portfolio", "Contact"];

const services = [
  {
    title: "Web Development",
    description:
      "We create responsive, scalable, and high-performance web applications tailored to your business needs, from marketing sites to complex enterprise platforms.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 text-[var(--primary-600)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="4" y="6.5" width="24" height="17" rx="3" />
        <path d="M11 24.5V28h10v-3.5" />
        <path d="M4 12.5h24" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "We build native and cross-platform mobile apps for iOS and Android, ensuring polished design, seamless performance, and delightful user experiences.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 text-[var(--accent-green)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="9" y="2.5" width="14" height="27" rx="3.5" />
        <circle cx="16" cy="24" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "AI & Machine Learning",
    description:
      "We integrate cutting-edge AI to build intelligent, automated, and data-driven systems that unlock new efficiencies, insights, and customer experiences.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 text-[var(--primary-500)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="16" cy="16" r="10" />
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4M10 10l2.5 2.5M20 20l2.5 2.5M10 22l2.5-2.5M20 12l2.5-2.5" />
      </svg>
    ),
  },
];

const process = [
  {
    title: "Ideation & Strategy",
    copy: "We start by understanding your vision, goals, and target audience to craft a detailed, data-backed roadmap.",
  },
  {
    title: "UI/UX Design",
    copy: "Our design team creates intuitive, user-centric interfaces and prototypes that bring your idea to life visually.",
  },
  {
    title: "Agile Development",
    copy: "Using agile methodologies, we iteratively build your product with transparency, flexibility, and measurable progress.",
  },
  {
    title: "QA & Launch",
    copy: "Rigorous testing ensures a bug-free, polished product before a seamless deployment and launch plan.",
  },
];

const stack = [
  "React",
  "Node.js",
  "AWS",
  "Swift",
  "Figma",
  "Python",
  "TensorFlow",
];

export default function Home() {
  return (
    <div className="bg-[var(--page-bg)]">
      <Navbar links={navLinks} active="Home" />
      <div className="mx-auto mt-12 flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <main className="space-y-16">
          <section className="rounded-container bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-100 md:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--text-light)]">
              Techmatrix AI
            </p>
            <h1 className="mt-6 text-4xl font-bold text-[var(--text-dark)] sm:text-5xl">
              Building the Future, One Line of Code at a Time
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--text-muted)]">
              At Techmatrix AI, we transform your innovative ideas into
              powerful, scalable, and intelligent software solutions that drive
              growth and success.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--accent-indigo)] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg">
                Explore Our Services
              </button>
              <button className="rounded-full border border-[var(--secondary-300)] px-6 py-3 text-sm font-semibold text-[var(--text-default)] transition hover:border-[var(--secondary-400)] hover:bg-[var(--secondary-50)]">
                View Portfolio
              </button>
            </div>
          </section>

          <section className="space-y-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--text-light)]">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--text-dark)]">
                Our Services
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md"
                >
                  <div className="h-14 w-14 rounded-2xl bg-[var(--muted-bg)] p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-dark)]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {service.description}
                  </p>
                  <button className="mt-auto w-fit text-sm font-semibold text-[var(--primary-600)] transition hover:text-[var(--primary-700)]">
                    Learn More →
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-8 rounded-container bg-white px-6 py-12 shadow-sm ring-1 ring-slate-100 md:px-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--text-light)]">
                Process
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--text-dark)]">
                How We Work
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {process.map((step, index) => (
                <article key={step.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary-100)] to-[var(--secondary-100)] text-2xl font-bold text-[var(--primary-700)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[var(--text-dark)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{step.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--text-light)]">
                Technology
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--text-dark)]">
                Our Technology Stack
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 rounded-3xl bg-white px-6 py-6 shadow-sm ring-1 ring-slate-100">
              {stack.map((item) => (
                <div
                  key={item}
                  className="flex h-16 w-20 items-center justify-center rounded-2xl bg-[var(--muted-bg)] text-sm font-semibold text-[var(--text-default)] transition-all hover:bg-[var(--secondary-200)] hover:shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-container bg-gradient-to-br from-[var(--primary-50)] to-[var(--secondary-50)] px-6 py-12 text-center shadow-sm ring-1 ring-slate-100 md:px-16">
            <p className="text-base font-semibold uppercase tracking-[0.25em] text-[var(--primary-600)]">
              Let's Build Together
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[var(--text-dark)]">
              Have an Idea? Let's Build It Together.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-[var(--text-muted)]">
              Ready to turn your vision into reality? Schedule a free,
              no-obligation consultation to discuss your project with our
              experts.
            </p>
            <button className="mt-8 rounded-full bg-gradient-to-r from-[var(--primary-600)] to-[var(--accent-indigo)] px-8 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg">
              Schedule a Free Consultation
            </button>
          </section>
        </main>

        {/* Footer is now in the root layout */}
      </div>
    </div>
  );
}