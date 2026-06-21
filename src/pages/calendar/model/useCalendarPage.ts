import type { CalendarEvent } from "@/features/calendar-event/model/types";
import { useCalendarEvents } from "@/features/calendar-event/model/useCalendarEvents";
import { showAppToast } from "@/shared/lib/toast";
import type { ModalPosition } from "@/shared/ui/Modal";
import { useState } from "react";
import { Views, type SlotInfo, type View } from "react-big-calendar";
import { getEventModalPosition, getSlotModalPosition } from "./modal-position";
import type { CalendarModalMode, DropArgs } from "./types";

type SlotClickBox = {
  clientX: number;
  clientY: number;
};

type SlotInfoWithClickBox = SlotInfo & {
  box?: SlotClickBox;
};

const getSlotClickBox = (slot: SlotInfo) => {
  return (slot as SlotInfoWithClickBox).box;
};

const runCalendarAction = (action: () => void, errorText: string) => {
  try {
    action();
  } catch {
    showAppToast({
      type: "error",
      text: errorText,
    });
  }
};

export const useCalendarPage = () => {
  const calendarEvents = useCalendarEvents();

  const [date, setDate] = useState(() => new Date());
  const [view, setView] = useState<View>(Views.MONTH);

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );
  const [modalMode, setModalMode] = useState<CalendarModalMode | null>(null);
  const [modalPosition, setModalPosition] = useState<ModalPosition>();

  const closeModal = () => {
    runCalendarAction(() => {
      setModalMode(null);
      setSelectedDate(undefined);
      setSelectedEvent(null);
      setModalPosition(undefined);
    }, "Failed to close event form");
  };

  const openCreateModal = (slot: SlotInfo) => {
    runCalendarAction(() => {
      if (modalMode) {
        closeModal();
        return;
      }

      const box = getSlotClickBox(slot);

      setSelectedDate(slot.start);
      setSelectedEvent(null);
      setModalMode("create");

      if (box) {
        setModalPosition(getSlotModalPosition(box.clientX, box.clientY));
      }
    }, "Failed to open event form");
  };

  const openEventModal = (
    event: CalendarEvent,
    syntheticEvent: React.SyntheticEvent<HTMLElement>,
  ) => {
    runCalendarAction(() => {
      if (modalMode) {
        closeModal();
        return;
      }

      const rect = syntheticEvent.currentTarget.getBoundingClientRect();

      setSelectedEvent(event);
      setSelectedDate(undefined);
      setModalMode("view");
      setModalPosition(getEventModalPosition(rect));
    }, "Failed to open event");
  };

  const handleDrop = ({ event, start, end }: DropArgs) => {
    runCalendarAction(() => {
      calendarEvents.moveEvent(event.id, new Date(start), new Date(end));
    }, "Failed to move event");
  };

  return {
    ...calendarEvents,
    date,
    view,
    selectedDate,
    selectedEvent,
    modalMode,
    modalPosition,
    setDate,
    setView,
    openCreateModal,
    openEventModal,
    closeModal,
    handleDrop,
  };
};
