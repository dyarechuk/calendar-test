import { useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import type { CalendarEvent, CalendarEventFormValues } from "./types";

const STORAGE_KEY = "calendar-events";

function serializeEvents(events: CalendarEvent[]) {
  return JSON.stringify(events);
}

function deserializeEvents(): CalendarEvent[] {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) return [];

  try {
    return JSON.parse(raw).map((event: CalendarEvent) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
  } catch {
    return [];
  }
}

function buildEventDate(values: CalendarEventFormValues) {
  return new Date(`${values.date}T${values.time}`);
}

export function useCalendarEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>(deserializeEvents);

  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => a.start.getTime() - b.start.getTime()),
    [events],
  );

  const persist = (nextEvents: CalendarEvent[]) => {
    setEvents(nextEvents);
    localStorage.setItem(STORAGE_KEY, serializeEvents(nextEvents));
  };

  const createEvent = (values: CalendarEventFormValues) => {
    const start = buildEventDate(values);
    const end = new Date(start.getTime() + 60 * 60 * 1000);

    persist([
      ...events,
      {
        id: uuid(),
        title: values.title.trim(),
        start,
        end,
        color: values.color,
        notes: values.notes.trim(),
      },
    ]);
  };

  const updateEvent = (id: string, values: CalendarEventFormValues) => {
    const start = buildEventDate(values);
    const end = new Date(start.getTime() + 60 * 60 * 1000);

    persist(
      events.map((event) =>
        event.id === id
          ? {
              ...event,
              title: values.title.trim(),
              start,
              end,
              color: values.color,
              notes: values.notes.trim(),
            }
          : event,
      ),
    );
  };

  const deleteEvent = (id: string) => {
    persist(events.filter((event) => event.id !== id));
  };

  const moveEvent = (id: string, start: Date, end: Date) => {
    persist(
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
  };

  return {
    events: sortedEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    moveEvent,
  };
}
