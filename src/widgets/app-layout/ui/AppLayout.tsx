import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F0F0F7] lg:flex-row">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="min-w-0 flex-1 px-4 py-4 sm:px-6 sm:py-6 xl:px-16 xl:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
