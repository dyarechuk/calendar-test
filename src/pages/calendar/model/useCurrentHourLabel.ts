import { format } from "date-fns";
import { useEffect } from "react";
import type { View } from "react-big-calendar";
import { CURRENT_HOUR_LABEL_CLASS } from "./calendar-css-classes";
import { isTimeGridView } from "./calendar-view";

const TIME_GUTTER_LABEL_SELECTOR = ".rbc-time-gutter .rbc-label";
const CURRENT_TIME_INDICATOR_SELECTOR = ".rbc-current-time-indicator";

const clearCurrentHourLabels = () => {
  document
    .querySelectorAll(`.${CURRENT_HOUR_LABEL_CLASS}`)
    .forEach((label) => label.classList.remove(CURRENT_HOUR_LABEL_CLASS));
};

const markCurrentHourLabel = (view: View) => {
  clearCurrentHourLabels();

  if (!isTimeGridView(view)) {
    return;
  }

  const calendarElement = document.querySelector(`.calendar-view-${view}`);

  if (!calendarElement?.querySelector(CURRENT_TIME_INDICATOR_SELECTOR)) {
    return;
  }

  const currentHourLabel = format(new Date(), "h:00 aa").toLowerCase();

  calendarElement
    .querySelectorAll<HTMLElement>(TIME_GUTTER_LABEL_SELECTOR)
    .forEach((label) => {
      if (label.textContent?.trim().toLowerCase() === currentHourLabel) {
        label.classList.add(CURRENT_HOUR_LABEL_CLASS);
      }
    });
};

export const useCurrentHourLabel = (date: Date, view: View) => {
  useEffect(() => {
    if (!isTimeGridView(view)) {
      clearCurrentHourLabels();
      return;
    }

    let animationFrameId: number;

    const updateCurrentHourLabel = () => {
      animationFrameId = requestAnimationFrame(() =>
        markCurrentHourLabel(view),
      );
    };

    updateCurrentHourLabel();

    const intervalId = window.setInterval(updateCurrentHourLabel, 60 * 1000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.clearInterval(intervalId);
      clearCurrentHourLabels();
    };
  }, [date, view]);
};
