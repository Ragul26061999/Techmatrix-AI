import Navbar from "../components/Navbar";

const navLinks = ["Home", "About Us", "Services", "Portfolio", "Contact"];

const principles = [
  {
    title: "Our Mission",
    description:
      "To build intelligent, reliable, and scalable software solutions that empower businesses to achieve their full potential.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8 text-[#6c7cff]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M20 4v32" />
        <path d="M10 14l10-10 10 10" />
        <path d="M10 26l10 10 10-10" />
      </svg>
    ),
  },
  {
    title: "Our Vision",
    description:
      "To be a global leader in AI-driven software development, where technology seamlessly integrates with human ingenuity.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8 text-[#6c7cff]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="20" cy="20" r="10" />
        <path d="M6 20s6-10 14-10 14 10 14 10-6 10-14 10S6 20 6 20Z" />
        <circle cx="20" cy="20" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const coreValues = [
  {
    title: "Innovation",
    description: "Pushing the boundaries of what's possible with AI.",
  },
  {
    title: "Integrity",
    description: "Building trust through transparent and ethical work.",
  },
  {
    title: "Collaboration",
    description: "Working together with our clients for shared success.",
  },
  {
    title: "Customer-Centric",
    description: "Placing our clients’ needs at the heart of everything.",
  },
];

const team = [
  {
    name: "Johnathan Doe",
    title: "CEO & Founder",
    initials: "JD",
  },
  {
    name: "Jane Smith",
    title: "Chief Technology Officer",
    initials: "JS",
  },
  {
    name: "Michael Chen",
    title: "Lead AI Engineer",
    initials: "MC",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-[#f6f8fc]">
      <Navbar links={navLinks} active="About Us" />

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-20 pt-10 sm:px-8 lg:px-10">
        <section className="rounded-[40px] bg-gradient-to-br from-[#c9dffe] via-[#cbd1ff] to-[#e5c7ff] px-8 py-16 text-center shadow-[0_30px_80px_rgba(108,124,255,0.2)]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#5b6beb]">
            About Us
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#1e274f] sm:text-5xl">
            Crafting the Future of Software
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-[#313f72]">
            Learn about the mission, vision, and the brilliant minds behind
            Techmatrix AI’s innovative solutions that are shaping tomorrow’s
            technology landscape.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/service"
              className="rounded-full bg-[#2c6bff] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(33,82,255,0.35)] transition hover:bg-[#1f53c7]"
            >
              Explore Our Services
            </a>
            <button className="rounded-full border border-white/70 bg-white/70 px-6 py-3 text-sm font-semibold text-[#1e274f] transition hover:bg-white">
              Work With Us
            </button>
          </div>
        </section>

        <section className="space-y-10 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a94b8]">
              Principles
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#111b2f]">
              Our Guiding Principles
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-[#4c5771]">
              We are founded on a clear mission to empower businesses and a
              powerful vision for the future of technology, guiding every
              project we undertake.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-6 text-left shadow-[0_25px_60px_rgba(18,32,56,0.08)] ring-1 ring-slate-100"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef3ff]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#131d34]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#4c5672]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a94b8]">
              Values
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#111b2f]">
              Our Core Values
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-[#4c5771]">
              The principles that drive our culture, our work, and our
              relationships with every client.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {coreValues.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl bg-white px-4 py-6 text-center shadow-[0_20px_50px_rgba(55,71,102,0.08)] ring-1 ring-slate-100"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e5f7ee] text-[#2fb272]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M12 3v18M3 12h18" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#182237]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-[#4b576e]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a94b8]">
              Team
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#111b2f]">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-[#4c5771]">
              The passionate minds and expert engineers dedicated to bringing
              your vision to life.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="space-y-4">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#c1d9ff] to-[#e2d6ff] text-2xl font-semibold text-[#1f2a46]">
                  {member.initials}
                </div>
                <div>
                  <p className="text-base font-semibold text-[#131d34]">
                    {member.name}
                  </p>
                  <p className="text-sm text-[#5c6c8e]">{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] bg-[#e8d4fb] px-6 py-12 text-center shadow-[0_30px_60px_rgba(157,114,255,0.2)] sm:px-16">
          <p className="text-2xl font-semibold text-[#1c1f3b]">
            Ready to build the future?
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-[#4a4f75]">
            Let’s collaborate on your next project and unlock its true
            potential. We’re excited to learn about your ideas.
          </p>
          <button className="mt-8 rounded-full bg-[#34cf85] px-8 py-3 text-sm font-semibold text-[#0f2a1c] shadow-[0_20px_50px_rgba(52,207,133,0.35)] transition hover:bg-[#26a567]">
            Work With Us
          </button>
        </section>
      </main>

      {/* Footer is now in the root layout */}
    </div>
  );
}
