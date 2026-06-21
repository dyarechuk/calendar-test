import {
  FiBell,
  FiGlobe,
  FiMenu,
  FiMessageCircle,
  FiSearch,
} from "react-icons/fi";

type HeaderProps = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:flex-nowrap sm:px-6 sm:py-0">
      <div className="flex min-w-0 flex-1 items-center gap-3 text-slate-400">
        <button
          type="button"
          onClick={onMenuClick}
          className="grid h-9 w-9 place-items-center rounded border border-slate-200 bg-white text-slate-500 lg:hidden"
          aria-label="Open navigation"
        >
          <FiMenu size={18} />
        </button>

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
};

export { Header };
