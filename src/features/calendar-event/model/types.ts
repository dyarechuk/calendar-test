export type CalendarEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color: string;
  notes?: string;
};

export type CalendarEventFormValues = {
  title: string;
  date: string;
  time: string;
  color: string;
  notes: string;
};

export type FormErrors = Partial<Record<keyof CalendarEventFormValues, string>>;
