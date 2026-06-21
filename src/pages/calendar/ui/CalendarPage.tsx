import { EventModal } from "../../../features/calendar-event/ui/EventModal";
import { useMemo } from "react";
import type { CalendarProps, DateHeaderProps } from "react-big-calendar";
import {
  CALENDAR_VIEWS,
  calendarFormats,
  calendarLocalizer,
  calendarScrollStartTime,
} from "../model/calendar-config";
import { createEventPropGetter } from "../model/calendar-event-props";
import { DnDCalendar } from "../model/dnd-calendar";
import type { CalendarEvent } from "../../../features/calendar-event/model/types";
import { useCalendarPage } from "../model/useCalendarPage";
import { useCreateTargetHighlight } from "../model/useCreateTargetHighlight";
import { useCurrentHourLabel } from "../model/useCurrentHourLabel";
import { useDragAndDropAvailabilityToast } from "../model/useDragAndDropAvailabilityToast";
import { usePopupDragGuard } from "../model/usePopupDragGuard";
import { MonthDateHeader } from "./MonthDateHeader";

type CalendarComponents = CalendarProps<CalendarEvent>["components"];

const CalendarPage = () => {
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

  const {
    closeModalWithCreateAnimation,
    dayPropGetter,
    isSelectedEmptyDay,
    slotPropGetter,
  } = useCreateTargetHighlight({
    events,
    view,
    selectedDate,
    modalMode,
    closeModal,
  });

  usePopupDragGuard();
  useCurrentHourLabel(date, view);
  useDragAndDropAvailabilityToast();

  const eventPropGetter = useMemo(
    () => createEventPropGetter(selectedEvent),
    [selectedEvent],
  );

  const calendarComponents = useMemo<CalendarComponents>(() => {
    const dateHeader = (props: DateHeaderProps) => (
      <MonthDateHeader
        {...props}
        isHighlighted={isSelectedEmptyDay(props.date)}
      />
    );

    return {
      month: {
        dateHeader,
      },
    };
  }, [isSelectedEmptyDay]);

  return (
    <section className="calendar-page min-w-0">
      <h1 className="shrink-0 text-xl font-medium text-[#3f3d56] sm:text-2xl">
        Calendar
      </h1>

      <div
        className={`bg-white p-3 pb-5 shadow-sm sm:p-5 sm:pb-9 calendar-view calendar-view-${view}`}
      >
        <DnDCalendar
          localizer={calendarLocalizer}
          events={events}
          date={date}
          view={view}
          views={CALENDAR_VIEWS}
          formats={calendarFormats}
          getNow={() => new Date()}
          selectable
          resizable={false}
          popup
          showMultiDayTimes
          dayLayoutAlgorithm="no-overlap"
          scrollToTime={calendarScrollStartTime}
          enableAutoScroll={false}
          startAccessor="start"
          endAccessor="end"
          onNavigate={setDate}
          onView={setView}
          onSelectSlot={openCreateModal}
          onSelectEvent={openEventModal}
          onEventDrop={handleDrop}
          dayPropGetter={dayPropGetter}
          slotPropGetter={slotPropGetter}
          eventPropGetter={eventPropGetter}
          style={{
            height: "100%",
          }}
          components={calendarComponents}
        />
      </div>

      {modalMode && (
        <EventModal
          mode={modalMode}
          selectedDate={selectedDate}
          event={selectedEvent}
          position={modalPosition}
          onClose={closeModalWithCreateAnimation}
          onCreate={createEvent}
          onUpdate={updateEvent}
          onDelete={deleteEvent}
        />
      )}
    </section>
  );
};

export { CalendarPage };
