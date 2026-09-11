const CATEGORY_STYLES = {
  Frontend: "bg-blue-50 text-blue-600",
  Backend: "bg-emerald-50 text-emerald-600",
  Database: "bg-cyan-50 text-cyan-600",
  Language: "bg-amber-50 text-amber-600",
  Styling: "bg-sky-50 text-sky-600",
  DevOps: "bg-violet-50 text-violet-600",
  Tools: "bg-rose-50 text-rose-600",
};

const BADGE_STYLES = {
  Frontend: "bg-blue-50 text-blue-600",
  Backend: "bg-emerald-50 text-emerald-600",
  Database: "bg-cyan-50 text-cyan-600",
  Language: "bg-amber-50 text-amber-700",
  Styling: "bg-sky-50 text-sky-600",
  DevOps: "bg-violet-50 text-violet-600",
  Tools: "bg-rose-50 text-rose-600",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;
  const badgeClass = BADGE_STYLES[category] || "bg-slate-100 text-slate-600";
  const chipClass = CATEGORY_STYLES[category] || "bg-slate-100 text-slate-600";

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <img src={icon} alt={`${name} logo`} className="h-10 w-10 object-contain" loading="lazy" />
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
        <span className={`rounded-md px-2 py-1 font-medium ${chipClass}`}>{category}</span>
        <span className="text-slate-400">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <span className="text-amber-400">&#9733;</span>
          {rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
