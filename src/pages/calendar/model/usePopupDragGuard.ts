import { useEffect } from "react";

export const usePopupDragGuard = () => {
  useEffect(() => {
    const preventPopupDragStart = (event: DragEvent) => {
      const target =
        event.target instanceof Element
          ? event.target
          : event.target instanceof Text
            ? event.target.parentElement
            : null;

      if (!target?.closest(".rbc-overlay .rbc-event")) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };

    document.addEventListener("dragstart", preventPopupDragStart, true);

    return () => {
      document.removeEventListener("dragstart", preventPopupDragStart, true);
    };
  }, []);
};
