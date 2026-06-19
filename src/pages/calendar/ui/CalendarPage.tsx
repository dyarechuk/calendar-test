import { format, getDay, parse, startOfWeek } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import {
  Calendar,
  dateFnsLocalizer,
  Views,
  type View,
} from "react-big-calendar";
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

type DragAndDropFactory = <TEvent extends object>(
  calendar: typeof Calendar<TEvent>,
) => React.ComponentType<any>;

const dndModule = DragAndDropAddon as any;

const withDragAndDrop = (dndModule.default?.default ??
  dndModule.default ??
  dndModule) as DragAndDropFactory;

const DnDCalendar = withDragAndDrop<CalendarEvent>(Calendar);

const VIEWS: View[] = [Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA];

const calendarFormats = {
  dayFormat: (date: Date) => format(date, "EEE dd/MM"),
  weekdayFormat: (date: Date) => format(date, "EEE"),
  dayHeaderFormat: (date: Date) => format(date, "EEEE MMM d"),
};

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

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium text-[#3f3d56]">Calendar</h1>

      <div
        className={`bg-white p-5 pb-9 shadow-sm calendar-view calendar-view-${view}`}
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
            height:
              view === Views.MONTH ? 650 : view === Views.AGENDA ? 500 : 680,
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
