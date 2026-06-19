import type { CalendarEvent } from "@/features/calendar-event/model/types";
import { useCalendarEvents } from "@/features/calendar-event/model/useCalendarEvents";
import type { ModalPosition } from "@/shared/ui/Modal";
import { useState } from "react";
import { Views, type SlotInfo, type View } from "react-big-calendar";
import { getEventModalPosition, getSlotModalPosition } from "./modal-position";
import type { CalendarModalMode, DropArgs } from "./types";

export function useCalendarPage() {
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
    setModalMode(null);
    setSelectedDate(undefined);
    setSelectedEvent(null);
    setModalPosition(undefined);
  };

  const openCreateModal = (slot: SlotInfo) => {
    if (modalMode) {
      closeModal();
      return;
    }

    const box = (
      slot as SlotInfo & {
        box?: {
          clientX: number;
          clientY: number;
        };
      }
    ).box;

    setSelectedDate(slot.start);
    setSelectedEvent(null);
    setModalMode("create");

    if (box) {
      setModalPosition(getSlotModalPosition(box.clientX, box.clientY));
    }
  };

  const openEventModal = (
    event: CalendarEvent,
    syntheticEvent: React.SyntheticEvent<HTMLElement>,
  ) => {
    if (modalMode) {
      closeModal();
      return;
    }

    const rect = syntheticEvent.currentTarget.getBoundingClientRect();

    setSelectedEvent(event);
    setSelectedDate(undefined);
    setModalMode("view");
    setModalPosition(getEventModalPosition(rect));
  };

  const handleDrop = ({ event, start, end }: DropArgs) => {
    calendarEvents.moveEvent(event.id, new Date(start), new Date(end));
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
}
