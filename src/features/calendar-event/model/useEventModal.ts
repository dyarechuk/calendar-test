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
  onCreate: (values: CalendarEventFormValues) => void;
  onUpdate: (id: string, values: CalendarEventFormValues) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
};

export function useEventModal({
  mode,
  selectedDate,
  event,
  onCreate,
  onUpdate,
  onDelete,
  onClose,
}: UseEventModalParams) {
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
    const validationErrors = validateEventForm(values);

    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    if (event) {
      onUpdate(event.id, values);
    } else {
      onCreate(values);
    }

    onClose();
  };

  const handleDelete = () => {
    if (!event) return;

    onDelete(event.id);
    onClose();
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
}
