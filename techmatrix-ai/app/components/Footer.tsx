const pages = ["Home", "About Us", "Services", "Portfolio", "Contact"];
const legal = ["Terms & Conditions", "Cookie Policy", "Privacy Policy"];

export default function Footer() {
  return (
    <footer className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-12 text-sm text-white shadow-[0_10px_50px_rgba(0,0,0,0.35)] ring-1 ring-black/30 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900">
                <span className="font-bold">TM</span>
              </div>
              <span>Techmatrix AI</span>
            </div>
            <p className="text-slate-300">
              Building the future, one line of code at a time.
            </p>
            <a
              href="mailto:techmatrix@gmail.com"
              className="text-base font-medium text-slate-200 transition hover:text-white"
            >
              techmatrix@gmail.com
            </a>
          </div>

          {/* Pages Section */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Pages
            </p>
            <ul className="space-y-3">
              {pages.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-base text-slate-300 transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Legal
            </p>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-base text-slate-300 transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Stay Updated
            </p>
            <p className="text-slate-300">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg bg-slate-700 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-700/50 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Techmatrix AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}