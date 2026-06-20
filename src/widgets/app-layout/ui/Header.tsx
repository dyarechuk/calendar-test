import { FiBell, FiGlobe, FiMessageCircle, FiSearch } from "react-icons/fi";

export function Header() {
  return (
    <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:flex-nowrap sm:px-6 sm:py-0">
      <div className="flex min-w-0 flex-1 items-center gap-3 text-slate-400">
        <FiSearch size={18} />
        <span className="hidden truncate text-xs sm:inline">
          Search transactions, invoices or help
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-3 text-slate-400 sm:gap-6">
        <FiGlobe className="hidden sm:block" />
        <FiMessageCircle className="hidden sm:block" />
        <FiBell />

        <div className="hidden h-7 w-px bg-slate-200 sm:block" />

        <div className="flex items-center gap-3 text-xs text-slate-600">
          <span className="hidden sm:inline">John Doe</span>
          <img
            src="https://i.pravatar.cc/40"
            alt="John Doe"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
