import { MAX_EVENT_TITLE_LENGTH } from "./constants";
import type { CalendarEventFormValues, FormErrors } from "./types";

export function validateEventForm(values: CalendarEventFormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.title.trim()) {
    errors.title = "Event name is required";
  } else if (values.title.trim().length > MAX_EVENT_TITLE_LENGTH) {
    errors.title = "Max 30 characters allowed";
  }

  if (!values.date) {
    errors.date = "Event date is required";
  }

  if (!values.time) {
    errors.time = "Event time is required";
  }

  if (!values.color) {
    errors.color = "Color is required";
  }

  if (values.date && values.time) {
    const selectedDate = new Date(`${values.date}T${values.time}`);

    if (selectedDate < new Date()) {
      errors.date = "Past date is not allowed";
    }
  }

  return errors;
}

export function hasErrors(errors: FormErrors) {
  return Object.keys(errors).length > 0;
}
