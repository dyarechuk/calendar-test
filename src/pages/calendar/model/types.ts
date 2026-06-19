import type { CalendarEvent } from "@/features/calendar-event/model/types";

export type CalendarModalMode = "create" | "view";

export type DropArgs = {
  event: CalendarEvent;
  start: Date | string;
  end: Date | string;
};
