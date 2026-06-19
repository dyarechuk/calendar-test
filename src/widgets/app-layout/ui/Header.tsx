import { FiBell, FiGlobe, FiMessageCircle, FiSearch } from "react-icons/fi";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex items-center gap-3 text-slate-400">
        <FiSearch size={18} />
        <span className="text-xs">Search transactions, invoices or help</span>
      </div>

      <div className="flex items-center gap-6 text-slate-400">
        <FiGlobe />
        <FiMessageCircle />
        <FiBell />

        <div className="h-7 w-px bg-slate-200" />

        <div className="flex items-center gap-3 text-xs text-slate-600">
          <span>John Doe</span>
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
