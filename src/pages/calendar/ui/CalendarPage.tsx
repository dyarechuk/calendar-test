import { format, getDay, parse, startOfWeek } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { useEffect, type ComponentType } from "react";
import {
  Calendar,
  dateFnsLocalizer,
  Views,
  type CalendarProps,
  type View,
} from "react-big-calendar";
import type { withDragAndDropProps } from "react-big-calendar/lib/addons/dragAndDrop";
import * as DragAndDropAddon from "react-big-calendar/lib/addons/dragAndDrop";
import type { CalendarEvent } from "../../../features/calendar-event/model/types";
import { EventModal } from "../../../features/calendar-event/ui/EventModal";
import { useCalendarPage } from "../model/useCalendarPage";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

type DragAndDropCalendarProps<TEvent extends object> = CalendarProps<TEvent> &
  withDragAndDropProps<TEvent>;

type DragAndDropFactory = <TEvent extends object>(
  calendar: ComponentType<CalendarProps<TEvent>>,
) => ComponentType<DragAndDropCalendarProps<TEvent>>;

type DragAndDropModule =
  | DragAndDropFactory
  | {
      default?:
        | DragAndDropFactory
        | {
            default?: DragAndDropFactory;
          };
    };

function resolveDragAndDropFactory(module: DragAndDropModule) {
  if (typeof module === "function") {
    return module;
  }

  if (typeof module.default === "function") {
    return module.default;
  }

  return module.default?.default;
}

const withDragAndDrop = resolveDragAndDropFactory(
  DragAndDropAddon as unknown as DragAndDropModule,
);

if (!withDragAndDrop) {
  throw new Error("react-big-calendar drag-and-drop addon is unavailable");
}

const DnDCalendar = withDragAndDrop<CalendarEvent>(Calendar);

const VIEWS: View[] = [Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA];

const calendarFormats = {
  dayFormat: (date: Date) => format(date, "EEE dd/MM"),
  weekdayFormat: (date: Date) => format(date, "EEE"),
  dayHeaderFormat: (date: Date) => format(date, "EEEE MMM d"),
};

const timeViewScrollStart = new Date(1970, 0, 1, 0, 0);

export function CalendarPage() {
  const {
    events,
    date,
    view,
    selectedDate,
    selectedEvent,
    modalMode,
    modalPosition,
    createEvent,
    updateEvent,
    deleteEvent,
    setDate,
    setView,
    openCreateModal,
    openEventModal,
    closeModal,
    handleDrop,
  } = useCalendarPage();

  useEffect(() => {
    const preventPopupDragStart = (event: DragEvent) => {
      const target =
        event.target instanceof Element
          ? event.target
          : event.target instanceof Text
            ? event.target.parentElement
            : null;

      if (!target?.closest(".rbc-overlay .rbc-event")) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };

    document.addEventListener("dragstart", preventPopupDragStart, true);

    return () => {
      document.removeEventListener("dragstart", preventPopupDragStart, true);
    };
  }, []);

  const calendarHeight =
    view === Views.MONTH
      ? "clamp(560px, calc(100vh - 210px), 650px)"
      : view === Views.AGENDA
        ? "clamp(440px, calc(100vh - 210px), 500px)"
        : "clamp(560px, calc(100vh - 210px), 680px)";

  return (
    <section className="min-w-0">
      <h1 className="mb-4 text-xl font-medium text-[#3f3d56] sm:mb-8 sm:text-2xl">
        Calendar
      </h1>

      <div
        className={`bg-white p-3 pb-5 shadow-sm sm:p-5 sm:pb-9 calendar-view calendar-view-${view}`}
      >
        <DnDCalendar
          localizer={localizer}
          events={events}
          date={date}
          view={view}
          views={VIEWS}
          formats={calendarFormats}
          getNow={() => new Date()}
          selectable
          resizable={false}
          popup
          showMultiDayTimes
          scrollToTime={timeViewScrollStart}
          enableAutoScroll={false}
          startAccessor="start"
          endAccessor="end"
          onNavigate={setDate}
          onView={setView}
          onSelectSlot={openCreateModal}
          onSelectEvent={openEventModal}
          onEventDrop={handleDrop}
          eventPropGetter={(event: CalendarEvent) => ({
            style: {
              backgroundColor: event.color,
            },
          })}
          style={{
            height: calendarHeight,
          }}
        />
      </div>

      {modalMode && (
        <EventModal
          mode={modalMode}
          selectedDate={selectedDate}
          event={selectedEvent}
          position={modalPosition}
          onClose={closeModal}
          onCreate={createEvent}
          onUpdate={updateEvent}
          onDelete={deleteEvent}
        />
      )}
    </section>
  );
}
