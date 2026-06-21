import { showAppToast } from "@/shared/lib/toast";
import { useMemo, useState } from "react";
import { EVENT_COLORS } from "./constants";
import { toDateInputValue, toTimeInputValue } from "./date-format";
import type {
  CalendarEvent,
  CalendarEventFormValues,
  FormErrors,
} from "./types";
import { hasErrors, validateEventForm } from "./validators";

type EventModalMode = "create" | "view" | "edit";

type UseEventModalParams = {
  mode: EventModalMode;
  selectedDate?: Date;
  event?: CalendarEvent | null;
  onCreate: (values: CalendarEventFormValues) => boolean;
  onUpdate: (id: string, values: CalendarEventFormValues) => boolean;
  onDelete: (id: string) => boolean;
  onClose: () => void;
};

export const useEventModal = ({
  mode,
  selectedDate,
  event,
  onCreate,
  onUpdate,
  onDelete,
  onClose,
}: UseEventModalParams) => {
  const [currentMode, setCurrentMode] = useState<EventModalMode>(mode);
  const [errors, setErrors] = useState<FormErrors>({});

  const isPastEvent = event ? event.end < new Date() : false;
  const isReadonly = currentMode === "view";

  const initialValues = useMemo<CalendarEventFormValues>(() => {
    const date = event?.start ?? selectedDate ?? new Date();

    return {
      title: event?.title ?? "",
      date: toDateInputValue(date),
      time: toTimeInputValue(date),
      color: event?.color ?? EVENT_COLORS[0],
      notes: event?.notes ?? "",
    };
  }, [event, selectedDate]);

  const [values, setValues] = useState<CalendarEventFormValues>(initialValues);

  const updateField = <K extends keyof CalendarEventFormValues>(
    field: K,
    value: CalendarEventFormValues[K],
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSave = () => {
    try {
      const validationErrors = validateEventForm(values);

      if (hasErrors(validationErrors)) {
        setErrors(validationErrors);
        return;
      }

      const isSaved = event ? onUpdate(event.id, values) : onCreate(values);

      if (isSaved) {
        onClose();
      }
    } catch {
      showAppToast({
        type: "error",
        text: "Failed to save event",
      });
    }
  };

  const handleDelete = () => {
    if (!event) return;

    try {
      const isDeleted = onDelete(event.id);

      if (isDeleted) {
        onClose();
      }
    } catch {
      showAppToast({
        type: "error",
        text: "Failed to delete event",
      });
    }
  };

  const enableEditMode = () => {
    if (isPastEvent) return;
    setCurrentMode("edit");
  };

  return {
    values,
    errors,
    currentMode,
    isReadonly,
    isPastEvent,
    updateField,
    handleSave,
    handleDelete,
    enableEditMode,
  };
};
