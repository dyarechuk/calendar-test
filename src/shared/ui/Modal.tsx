import {
  type CSSProperties,
  type MouseEvent,
  type PropsWithChildren,
} from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

export type ModalPosition = {
  top: number;
  left: number;
  arrowLeft?: number;
  placement?: "top" | "bottom";
};

type ModalProps = PropsWithChildren<{
  position?: ModalPosition;
  onClose: () => void;
}>;

export function Modal({ children, position, onClose }: ModalProps) {
  const style: CSSProperties = position
    ? {
        top: position.top,
        left: position.left,
      }
    : {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onClose();
  };

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-transparent border"
      onClick={handleBackdropClick}
    >
      <div
        style={style}
        className="fixed w-65 rounded-md border border-[#43425D] bg-white p-6 shadow-xl"
        onClick={handleModalClick}
      >
        <div
          className={
            position?.placement === "top"
              ? "absolute -bottom-2 h-4 w-4 rotate-45 border-b border-r border-[#43425D] bg-white"
              : "absolute -top-2 h-4 w-4 rotate-45 border-l border-t border-[#43425D] bg-white"
          }
          style={{ left: position?.arrowLeft ?? 32 }}
        />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 text-slate-300 hover:text-slate-500"
          aria-label="Close modal"
        >
          <IoCloseCircleOutline size={18} />
        </button>

        {children}
      </div>
    </div>
  );
}
