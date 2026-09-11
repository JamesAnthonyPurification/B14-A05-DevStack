export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const isEmpty = stack.length === 0;

  return (
    <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:w-72">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
        <p className="mt-1 text-sm text-slate-400">
          {isEmpty ? "No technologies selected yet." : `${stack.length} Technology Selected`}
        </p>

        {isEmpty ? (
          <div className="mt-4 flex items-center justify-center rounded-xl border border-dashed border-slate-200 py-8 text-center text-sm text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          <ul className="mt-4 flex flex-col gap-3">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-3"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <img src={tech.icon} alt="" className="h-8 w-8 shrink-0 object-contain" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">{tech.name}</p>
                    <p className="truncate text-xs text-slate-400">{tech.category}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(tech)}
                  aria-label={`Remove ${tech.name} from your stack`}
                  className="shrink-0 text-slate-400 transition hover:text-red-500"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}

        {!isEmpty && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-red-200 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        )}
      </div>
    </aside>
  );
}
