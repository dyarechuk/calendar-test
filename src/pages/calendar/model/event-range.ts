import type { CalendarEvent } from "@/features/calendar-event/model/types";
import { isSameDay } from "date-fns";

export const isDateInEventRange = (event: CalendarEvent, date: Date) => {
  return isSameDay(event.start, date) || isSameDay(event.end, date);
};

export const isSlotInEventRange = (event: CalendarEvent, date: Date) => {
  return event.start <= date && date < event.end;
};
