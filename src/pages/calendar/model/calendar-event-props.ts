import type { CalendarEvent } from "@/features/calendar-event/model/types";
import type { CSSProperties } from "react";
import type { EventPropGetter } from "react-big-calendar";
import { SELECTED_EVENT_CLASS } from "./calendar-css-classes";

type CalendarEventStyle = CSSProperties & {
  "--calendar-event-color": string;
};

export const createEventPropGetter = (
  selectedEvent: CalendarEvent | null,
): EventPropGetter<CalendarEvent> => {
  return (event) => ({
    className: selectedEvent?.id === event.id ? SELECTED_EVENT_CLASS : "",
    style: {
      "--calendar-event-color": event.color,
      backgroundColor: event.color,
      borderColor: event.color,
    } as CalendarEventStyle,
  });
};
