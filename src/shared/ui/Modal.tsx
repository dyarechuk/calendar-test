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

type ModalStyle = CSSProperties & {
  "--modal-placement-transform": string;
};

const Modal = ({ children, position, onClose }: ModalProps) => {
  const style: ModalStyle = position
    ? {
        top: position.top,
        left: position.left,
        "--modal-placement-transform":
          position.placement === "top" ? "translateY(-100%)" : "translateY(0)",
      }
    : {
        top: "50%",
        left: "50%",
        "--modal-placement-transform": "translate(-50%, -50%)",
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
        className="event-modal-panel fixed w-65 rounded-[10px] border border-[#43425D] bg-white p-6 shadow-xl"
        onClick={handleModalClick}
      >
        {position && (
          <div
            className={
              position.placement === "top"
                ? "absolute -bottom-[9px] h-0 w-0 -translate-x-1/2 border-x-[9px] border-t-[9px] border-x-transparent border-t-[#43425D]"
                : "absolute -top-[9px] h-0 w-0 -translate-x-1/2 border-x-[9px] border-b-[9px] border-x-transparent border-b-[#43425D]"
            }
            style={{ left: position.arrowLeft ?? 32 }}
          />
        )}

        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center text-[#D6D6D6] transition hover:text-[#43425D]"
          aria-label="Close modal"
        >
          <IoCloseCircleOutline size={20} />
        </button>

        {children}
      </div>
    </div>
  );
};

export { Modal };
