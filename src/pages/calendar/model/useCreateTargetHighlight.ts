import type { CalendarEvent } from "@/features/calendar-event/model/types";
import { useTemporaryValue } from "@/shared/lib/useTemporaryValue";
import clsx from "clsx";
import { isSameDay } from "date-fns";
import { useCallback } from "react";
import type { DayPropGetter, SlotPropGetter, View } from "react-big-calendar";
import {
  CREATE_TARGET_CELL_CLASS,
  CREATE_TARGET_LEAVING_CLASS,
  CREATE_TARGET_SLOT_CLASS,
} from "./calendar-css-classes";
import { isMonthView, isTimeGridView } from "./calendar-view";
import { isDateInEventRange, isSlotInEventRange } from "./event-range";
import type { CalendarModalMode } from "./types";

const CREATE_TARGET_SHADOW_DURATION = 180;

type UseCreateTargetHighlightParams = {
  events: CalendarEvent[];
  view: View;
  selectedDate?: Date;
  modalMode: CalendarModalMode | null;
  closeModal: () => void;
};

export const useCreateTargetHighlight = ({
  events,
  view,
  selectedDate,
  modalMode,
  closeModal,
}: UseCreateTargetHighlightParams) => {
  const [leavingCreateTargetDate, setLeavingCreateTargetDate] =
    useTemporaryValue<Date | null>(null, CREATE_TARGET_SHADOW_DURATION);

  const isCreatingEvent = modalMode === "create" && Boolean(selectedDate);

  const hasEventOnDay = useCallback(
    (targetDate: Date) => {
      return events.some((event) => isDateInEventRange(event, targetDate));
    },
    [events],
  );

  const hasEventAtSlot = useCallback(
    (targetDate: Date) => {
      return events.some((event) => isSlotInEventRange(event, targetDate));
    },
    [events],
  );

  const isSelectedEmptyDay = useCallback(
    (targetDate: Date) => {
      return Boolean(
        isCreatingEvent &&
        selectedDate &&
        isSameDay(targetDate, selectedDate) &&
        !hasEventOnDay(targetDate),
      );
    },
    [hasEventOnDay, isCreatingEvent, selectedDate],
  );

  const isSelectedEmptySlot = useCallback(
    (targetDate: Date) => {
      return Boolean(
        isCreatingEvent &&
        selectedDate &&
        targetDate.getTime() === selectedDate.getTime() &&
        !hasEventAtSlot(targetDate),
      );
    },
    [hasEventAtSlot, isCreatingEvent, selectedDate],
  );

  const isLeavingCreateTargetDay = useCallback(
    (targetDate: Date) => {
      return Boolean(
        leavingCreateTargetDate &&
        isSameDay(targetDate, leavingCreateTargetDate),
      );
    },
    [leavingCreateTargetDate],
  );

  const isLeavingCreateTargetSlot = useCallback(
    (targetDate: Date) => {
      return targetDate.getTime() === leavingCreateTargetDate?.getTime();
    },
    [leavingCreateTargetDate],
  );

  const closeModalWithCreateAnimation = useCallback(() => {
    if (isCreatingEvent && selectedDate) {
      setLeavingCreateTargetDate(selectedDate);
    }

    closeModal();
  }, [closeModal, isCreatingEvent, selectedDate, setLeavingCreateTargetDate]);

  const dayPropGetter: DayPropGetter = useCallback(
    (targetDate) => ({
      className: clsx({
        [CREATE_TARGET_CELL_CLASS]:
          isMonthView(view) && isSelectedEmptyDay(targetDate),
        [CREATE_TARGET_LEAVING_CLASS]:
          isMonthView(view) && isLeavingCreateTargetDay(targetDate),
      }),
    }),
    [isLeavingCreateTargetDay, isSelectedEmptyDay, view],
  );

  const slotPropGetter: SlotPropGetter = useCallback(
    (targetDate) => ({
      className: clsx({
        [CREATE_TARGET_SLOT_CLASS]:
          isTimeGridView(view) && isSelectedEmptySlot(targetDate),
        [CREATE_TARGET_LEAVING_CLASS]:
          isTimeGridView(view) && isLeavingCreateTargetSlot(targetDate),
      }),
    }),
    [isLeavingCreateTargetSlot, isSelectedEmptySlot, view],
  );

  return {
    closeModalWithCreateAnimation,
    dayPropGetter,
    isSelectedEmptyDay,
    slotPropGetter,
  };
};
