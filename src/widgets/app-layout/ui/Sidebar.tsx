import clsx from "clsx";
import {
  FiBarChart2,
  FiBox,
  FiCalendar,
  FiFileText,
  FiHelpCircle,
  FiHome,
  FiInbox,
  FiMessageSquare,
  FiSettings,
  FiUsers,
  FiX,
} from "react-icons/fi";

const menuItems = [
  { label: "Home", icon: FiHome },
  { label: "Dashboard", icon: FiBarChart2 },
  { label: "Inbox", icon: FiInbox },
  { label: "Products", icon: FiBox },
  { label: "Invoices", icon: FiFileText },
  { label: "Customers", icon: FiUsers },
  { label: "Chat Room", icon: FiMessageSquare },
  { label: "Calendar", icon: FiCalendar, active: true },
  { label: "Help Center", icon: FiHelpCircle },
  { label: "Settings", icon: FiSettings },
];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-slate-950/40 transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] shrink-0 flex-col bg-[#43425D] text-white shadow-2xl transition-transform duration-200 lg:static lg:z-auto lg:w-65 lg:max-w-none lg:translate-x-0 lg:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 text-[13px] font-bold tracking-[8px] lg:px-8">
          <span>IMPEKABLE</span>

          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded text-white/75 hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Close navigation"
          >
            <FiX size={20} />
          </button>
        </div>

        <nav className="mt-4 min-h-0 flex-1 overflow-y-auto">
          {menuItems.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              type="button"
              onClick={onClose}
              className={clsx(
                "flex h-14 w-full items-center gap-4 px-8 text-left text-sm text-white/75",
                active && "bg-sidebarActive text-white",
              )}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export { Sidebar };
