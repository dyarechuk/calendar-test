import type { CalendarEvent } from "@/features/calendar-event/model/types";
import type { ComponentType } from "react";
import { Calendar, type CalendarProps } from "react-big-calendar";
import type { withDragAndDropProps } from "react-big-calendar/lib/addons/dragAndDrop";
import * as DragAndDropAddon from "react-big-calendar/lib/addons/dragAndDrop";

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

const isDragAndDropFactory = (value: unknown): value is DragAndDropFactory => {
  return typeof value === "function";
};

const getDefaultExport = (value: unknown) => {
  return value && typeof value === "object" && "default" in value
    ? (value as { default?: unknown }).default
    : undefined;
};

const resolveDragAndDropFactory = (module: DragAndDropModule) => {
  const defaultExport = getDefaultExport(module);
  const nestedDefaultExport = getDefaultExport(defaultExport);

  return [module, defaultExport, nestedDefaultExport].find(
    isDragAndDropFactory,
  );
};

const withDragAndDrop = resolveDragAndDropFactory(
  DragAndDropAddon as unknown as DragAndDropModule,
);

export const isDragAndDropAvailable = Boolean(withDragAndDrop);

export const DnDCalendar = withDragAndDrop
  ? withDragAndDrop<CalendarEvent>(Calendar)
  : (Calendar as unknown as ComponentType<
      DragAndDropCalendarProps<CalendarEvent>
    >);
