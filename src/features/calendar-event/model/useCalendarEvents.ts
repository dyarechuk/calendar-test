import { showAppToast } from "@/shared/lib/toast";
import { useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import type { CalendarEvent, CalendarEventFormValues } from "./types";

const STORAGE_KEY = "calendar-events";
const DEFAULT_EVENT_DURATION = 60 * 60 * 1000;

const serializeEvents = (events: CalendarEvent[]) => {
  return JSON.stringify(events);
};

const isValidDate = (date: Date) => {
  return !Number.isNaN(date.getTime());
};

const parseStoredEvent = (value: unknown): CalendarEvent | null => {
  if (!value || typeof value !== "object") {
    return null;
  }

  const event = value as Partial<CalendarEvent> & {
    start?: string | Date;
    end?: string | Date;
  };

  if (
    typeof event.id !== "string" ||
    typeof event.title !== "string" ||
    typeof event.color !== "string" ||
    !event.start ||
    !event.end
  ) {
    return null;
  }

  const start = new Date(event.start);
  const end = new Date(event.end);

  if (!isValidDate(start) || !isValidDate(end)) {
    return null;
  }

  return {
    id: event.id,
    title: event.title,
    start,
    end,
    color: event.color,
    notes: typeof event.notes === "string" ? event.notes : "",
  };
};

const deserializeEvents = (): CalendarEvent[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      showAppToast({
        type: "error",
        text: "Failed to load calendar events",
      });
      return [];
    }

    const events = parsed
      .map((event) => parseStoredEvent(event))
      .filter((event): event is CalendarEvent => Boolean(event));

    if (events.length !== parsed.length) {
      showAppToast({
        type: "error",
        text: "Some saved events could not be loaded",
      });
    }

    return events;
  } catch {
    showAppToast({
      type: "error",
      text: "Failed to load calendar events",
    });
    return [];
  }
};

const buildEventDate = (values: CalendarEventFormValues) => {
  const date = new Date(`${values.date}T${values.time}`);

  if (!isValidDate(date)) {
    throw new Error("Invalid event date");
  }

  return date;
};

const buildEventFromValues = (
  values: CalendarEventFormValues,
  id = uuid(),
): CalendarEvent => {
  const start = buildEventDate(values);
  const end = new Date(start.getTime() + DEFAULT_EVENT_DURATION);

  return {
    id,
    title: values.title.trim(),
    start,
    end,
    color: values.color,
    notes: values.notes.trim(),
  };
};

const showEventNotFoundToast = () => {
  showAppToast({
    type: "error",
    text: "Event was not found",
  });
};

export const useCalendarEvents = () => {
  const [events, setEvents] = useState<CalendarEvent[]>(deserializeEvents);

  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => a.start.getTime() - b.start.getTime()),
    [events],
  );

  const persist = (nextEvents: CalendarEvent[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, serializeEvents(nextEvents));
      setEvents(nextEvents);
      return true;
    } catch {
      showAppToast({
        type: "error",
        text: "Failed to save calendar events",
      });
      return false;
    }
  };

  const createEvent = (values: CalendarEventFormValues) => {
    try {
      const isSaved = persist([...events, buildEventFromValues(values)]);

      if (isSaved) {
        showAppToast({
          type: "success",
          text: "Event created successfully",
        });
      }

      return isSaved;
    } catch {
      showAppToast({
        type: "error",
        text: "Failed to create event",
      });
      return false;
    }
  };

  const updateEvent = (id: string, values: CalendarEventFormValues) => {
    try {
      if (!events.some((event) => event.id === id)) {
        showEventNotFoundToast();
        return false;
      }

      const isSaved = persist(
        events.map((event) =>
          event.id === id ? buildEventFromValues(values, id) : event,
        ),
      );

      if (isSaved) {
        showAppToast({
          type: "success",
          text: "Event updated successfully",
        });
      }

      return isSaved;
    } catch {
      showAppToast({
        type: "error",
        text: "Failed to update event",
      });
      return false;
    }
  };

  const deleteEvent = (id: string) => {
    try {
      if (!events.some((event) => event.id === id)) {
        showEventNotFoundToast();
        return false;
      }

      const isSaved = persist(events.filter((event) => event.id !== id));

      if (isSaved) {
        showAppToast({
          type: "error",
          text: "Event deleted",
        });
      }

      return isSaved;
    } catch {
      showAppToast({
        type: "error",
        text: "Failed to delete event",
      });
      return false;
    }
  };

  const moveEvent = (id: string, start: Date, end: Date) => {
    try {
      if (!isValidDate(start) || !isValidDate(end)) {
        throw new Error("Invalid event date");
      }

      if (!events.some((event) => event.id === id)) {
        showEventNotFoundToast();
        return false;
      }

      return persist(
        events.map((event) =>
          event.id === id
            ? {
                ...event,
                start,
                end,
              }
            : event,
        ),
      );
    } catch {
      showAppToast({
        type: "error",
        text: "Failed to move event",
      });
      return false;
    }
  };

  return {
    events: sortedEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    moveEvent,
  };
};
