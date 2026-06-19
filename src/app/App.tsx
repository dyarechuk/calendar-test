import { CalendarPage } from "@/pages/calendar/ui/CalendarPage";
import { AppLayout } from "@/widgets/app-layout/ui/AppLayout";
import { AppDndProvider } from "./providers/DndProvider";

export function App() {
  return (
    <AppDndProvider>
      <AppLayout>
        <CalendarPage />
      </AppLayout>
    </AppDndProvider>
  );
}
