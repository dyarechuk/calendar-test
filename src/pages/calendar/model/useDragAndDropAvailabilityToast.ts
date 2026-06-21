import { showAppToast } from "@/shared/lib/toast";
import { useEffect } from "react";
import { isDragAndDropAvailable } from "./dnd-calendar";

export const useDragAndDropAvailabilityToast = () => {
  useEffect(() => {
    if (isDragAndDropAvailable) return;

    showAppToast({
      type: "error",
      text: "Drag and drop is unavailable",
    });
  }, []);
};
