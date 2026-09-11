import banner from "../assets/banner-stack.png";

function scrollToSection(event, href) {
  event.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:pt-24">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="font-display text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">Development Stack</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#technologies"
              onClick={(event) => scrollToSection(event, "#technologies")}
              className="bg-gradient-brand rounded-lg px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              onClick={(event) => scrollToSection(event, "#about")}
              className="rounded-lg border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <img
            src={banner}
            alt="Layered illustration representing a development stack"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
