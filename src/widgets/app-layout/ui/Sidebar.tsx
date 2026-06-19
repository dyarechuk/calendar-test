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
    <aside className="w-65 bg-[#43425D] text-white">
      <div className="flex h-16 items-center px-8 text-[13px] font-bold tracking-[8px]">
        IMPEKABLE
      </div>

      <nav className="mt-4">
        {menuItems.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={clsx(
              "flex h-14 items-center gap-4 px-8 text-sm text-white/75",
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
