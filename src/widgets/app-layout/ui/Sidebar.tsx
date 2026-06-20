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

export function Sidebar() {
  return (
    <aside className="w-full shrink-0 bg-[#43425D] text-white lg:w-65">
      <div className="flex h-14 items-center px-4 text-[13px] font-bold tracking-[8px] lg:h-16 lg:px-8">
        IMPEKABLE
      </div>

      <nav className="flex overflow-x-auto lg:mt-4 lg:block lg:overflow-visible">
        {menuItems.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={clsx(
              "flex h-12 shrink-0 items-center gap-3 px-4 text-sm text-white/75 lg:h-14 lg:gap-4 lg:px-8",
              active && "bg-sidebarActive text-white",
            )}
          >
            <Icon size={16} />
            {label}
          </div>
        ))}
      </nav>
    </aside>
  );
}
