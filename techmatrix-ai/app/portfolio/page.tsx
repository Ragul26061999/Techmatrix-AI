import Navbar from "../components/Navbar";

const navLinks = ["Home", "About Us", "Services", "Portfolio", "Contact"];

const filters = ["All", "Web Apps", "Mobile", "AI/ML", "Cloud Solutions"];

const projects = [
  {
    title: "Project Alpha",
    summary: "A brief summary of Project Alpha, outlining the challenge and our innovative solution.",
    stack: "React | Python | AWS",
  },
  {
    title: "Project Beta",
    summary: "A brief summary of Project Beta, outlining the challenge and our innovative solution.",
    stack: "Swift | Firebase | GCP",
  },
  {
    title: "Project Gamma",
    summary: "A brief summary of Project Gamma, outlining the challenge and our innovative solution.",
    stack: "TensorFlow | Python | Docker",
  },
  {
    title: "Project Delta",
    summary: "A brief summary of Project Delta, outlining the challenge and our innovative solution.",
    stack: "Vue.js | Node.js | Azure",
  },
  {
    title: "Project Epsilon",
    summary: "A brief summary of Project Epsilon, outlining the challenge and our innovative solution.",
    stack: "Kotlin | MongoDB | AWS",
  },
  {
    title: "Project Zeta",
    summary: "A brief summary of Project Zeta, outlining the challenge and our innovative solution.",
    stack: "React Native | GraphQL | Heroku",
  },
];

const heroImage =
  "linear-gradient(135deg, rgba(9,63,121,0.9), rgba(15,133,164,0.85), rgba(46,62,124,0.9))";

export default function Portfolio() {
  return (
    <div className="bg-[#f4fafb]">
      <Navbar links={navLinks} active="Portfolio" />

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 sm:px-8 lg:px-10">
        <section className="grid gap-10 rounded-[40px] bg-white px-8 py-12 shadow-[0_40px_120px_rgba(16,48,61,0.12)] ring-1 ring-white/70 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold text-[#0c1d26]">Our Success Stories</h1>
            <p className="text-lg text-[#516472]">
              We build innovative software solutions that drive tangible results. Explore our portfolio of work and see how we turn
              ambitious ideas into reality.
            </p>
            <button className="w-fit rounded-full bg-[#17a7ba] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1090a1]">
              View Our Work
            </button>
          </div>
          <div
            className="min-h-[220px] rounded-[30px] shadow-[0_30px_80px_rgba(20,37,59,0.35)]"
            style={{ background: heroImage }}
          ></div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-5 py-2 text-sm font-semibold ${
                  index === 0
                    ? "bg-[#0db4d6] text-white shadow-[0_12px_30px_rgba(13,180,214,0.3)]"
                    : "bg-white text-[#4c5f67] shadow-[0_10px_30px_rgba(9,10,10,0.07)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="space-y-4 rounded-[28px] bg-white p-4 shadow-[0_25px_60px_rgba(16,38,53,0.12)]">
                <div
                  className="h-44 rounded-2xl bg-[radial-gradient(circle_at_top_left,_#f5f8fb,_#b6dff2)]"
                  style={{
                    background:
                      index % 3 === 0
                        ? "linear-gradient(135deg,#fdfdfe,#d8eff6)"
                        : index % 3 === 1
                        ? "linear-gradient(135deg,#fdfdfd,#e6f0ff)"
                        : "linear-gradient(135deg,#f7fdfa,#cfe4dd)",
                  }}
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#0f1d2b]">{project.title}</h3>
                  <p className="text-sm text-[#546572]">{project.summary}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a8e9b]">{project.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] bg-[#d7f0f5] px-6 py-12 text-center shadow-[0_30px_70px_rgba(24,59,72,0.18)] sm:px-16">
          <p className="text-2xl font-semibold text-[#0d2231]">Ready to build something amazing?</p>
          <p className="mx-auto mt-3 max-w-3xl text-[#3d5260]">
            Let’s turn your idea into a reality. Contact us today to start your project and join our list of success stories.
          </p>
          <button className="mt-8 rounded-full bg-[#11a0c1] px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(17,160,193,0.35)] transition hover:bg-[#0c7f99]">
            Start a Project
          </button>
        </section>
      </main>

      {/* Footer is now in the root layout */}
    </div>
  );
}
