import type { PropsWithChildren } from "react";
import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const AppLayout = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen min-w-0 flex-col overflow-hidden bg-[#F0F0F7] lg:flex-row">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="min-h-0 min-w-0 flex-1 overflow-hidden px-4 py-4 sm:px-6 sm:py-6 xl:px-16 xl:py-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export { AppLayout };
