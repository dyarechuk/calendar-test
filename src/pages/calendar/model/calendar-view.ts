import { Views, type View } from "react-big-calendar";

export const isMonthView = (view: View) => {
  return view === Views.MONTH;
};

export const isTimeGridView = (view: View) => {
  return view === Views.WEEK || view === Views.DAY;
};
