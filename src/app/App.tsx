import { CalendarPage } from "@/pages/calendar/ui/CalendarPage";
import { showAppToast } from "@/shared/lib/toast";
import { AppToastContainer } from "@/shared/ui/AppToast";
import { AppLayout } from "@/widgets/app-layout/ui/AppLayout";
import { useEffect } from "react";
import { AppDndProvider } from "./providers/DndProvider";

const App = () => {
  useEffect(() => {
    const handleError = () => {
      showAppToast({
        type: "error",
        text: "Something went wrong",
      });
    };

    const handleUnhandledRejection = () => {
      showAppToast({
        type: "error",
        text: "Something went wrong",
      });
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection,
      );
    };
  }, []);

  return (
    <AppDndProvider>
      <AppLayout>
        <CalendarPage />
      </AppLayout>
      <AppToastContainer />
    </AppDndProvider>
  );
};

export { App };
