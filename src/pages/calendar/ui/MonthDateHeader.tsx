import clsx from "clsx";
import type { DateHeaderProps } from "react-big-calendar";
import { CREATE_TARGET_DATE_CLASS } from "../model/calendar-css-classes";

type MonthDateHeaderProps = DateHeaderProps & {
  isHighlighted?: boolean;
};

const MonthDateHeader = ({
  drilldownView,
  isHighlighted = false,
  label,
  onDrillDown,
}: MonthDateHeaderProps) => {
  const className = clsx({
    [CREATE_TARGET_DATE_CLASS]: isHighlighted,
  });

  if (!drilldownView) {
    return <span className={className}>{label}</span>;
  }

  return (
    <button
      type="button"
      className={clsx("rbc-button-link", className)}
      onClick={onDrillDown}
    >
      {label}
    </button>
  );
};

export { MonthDateHeader };
