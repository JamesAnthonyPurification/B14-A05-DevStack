import Loader from "./Loader";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";

export default function TechnologySection({
  technologies,
  loading,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  const stackedIds = new Set(stack.map((tech) => tech.id));

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Explore the <span className="text-gradient-brand">Technologies</span>
        </h2>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stackedIds.has(tech.id)}
                onAdd={onAdd}
              />
            ))}
          </div>

          <StackSidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      )}
    </section>
  );
}
