import { format, getDay, parse, startOfWeek } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { dateFnsLocalizer, Views, type View } from "react-big-calendar";

export const calendarLocalizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    "en-US": enUS,
  },
});

export const CALENDAR_VIEWS: View[] = [
  Views.MONTH,
  Views.WEEK,
  Views.DAY,
  Views.AGENDA,
];

export const calendarFormats = {
  dayFormat: (date: Date) => format(date, "EEE dd/MM"),
  weekdayFormat: (date: Date) => format(date, "EEE"),
  dayHeaderFormat: (date: Date) => format(date, "EEEE MMM d"),
};
