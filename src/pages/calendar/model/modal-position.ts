import type { ModalPosition } from "@/shared/ui/Modal";

const MODAL_WIDTH = 260;
const MODAL_HEIGHT = 430;
const MODAL_OFFSET = 12;
const DEFAULT_ARROW_LEFT = 32;

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const getSlotModalPosition = (
  clientX: number,
  clientY: number,
): ModalPosition => {
  const left = clamp(
    clientX - DEFAULT_ARROW_LEFT,
    MODAL_OFFSET,
    window.innerWidth - MODAL_WIDTH - MODAL_OFFSET,
  );

  const hasEnoughSpaceBelow =
    clientY + MODAL_OFFSET + MODAL_HEIGHT <= window.innerHeight;
  const hasEnoughSpaceAbove =
    clientY - MODAL_OFFSET - MODAL_HEIGHT >= MODAL_OFFSET;
  const placement =
    !hasEnoughSpaceBelow && hasEnoughSpaceAbove ? "top" : "bottom";

  const top =
    placement === "bottom" ? clientY + MODAL_OFFSET : clientY - MODAL_OFFSET;

  return {
    top: Math.max(MODAL_OFFSET, top),
    left,
    arrowLeft: clientX - left,
    placement,
  };
};

export const getEventModalPosition = (rect: DOMRect): ModalPosition => {
  const eventCenterX = rect.left + rect.width / 2;

  const left = clamp(
    eventCenterX - MODAL_WIDTH / 2,
    MODAL_OFFSET,
    window.innerWidth - MODAL_WIDTH - MODAL_OFFSET,
  );

  const hasEnoughSpaceBelow =
    rect.bottom + MODAL_OFFSET + MODAL_HEIGHT <= window.innerHeight;
  const hasEnoughSpaceAbove =
    rect.top - MODAL_OFFSET - MODAL_HEIGHT >= MODAL_OFFSET;
  const placement =
    !hasEnoughSpaceBelow && hasEnoughSpaceAbove ? "top" : "bottom";

  const top =
    placement === "bottom"
      ? rect.bottom + MODAL_OFFSET
      : rect.top - MODAL_OFFSET;

  return {
    top: Math.max(MODAL_OFFSET, top),
    left,
    arrowLeft: eventCenterX - left,
    placement,
  };
};
