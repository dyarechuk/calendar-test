import clsx from "clsx";
import { useRef, type InputHTMLAttributes, type MouseEvent } from "react";
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

type NativePickerInput = HTMLInputElement & {
  showPicker?: () => void;
};

const hasPickerIcon = (type: InputHTMLAttributes<HTMLInputElement>["type"]) => {
  return type === "date" || type === "time";
};

const renderPickerIcon = (
  type: InputHTMLAttributes<HTMLInputElement>["type"],
) => {
  if (type === "date") {
    return <IoCalendarOutline size={20} />;
  }

  if (type === "time") {
    return <IoTimeOutline size={20} />;
  }

  return null;
};

const openNativePicker = (input: NativePickerInput) => {
  input.focus();

  if (input.showPicker) {
    try {
      input.showPicker();
      return;
    } catch {
      input.click();
      return;
    }
  }

  input.click();
};

const Input = ({ label, error, className, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const hasIcon = hasPickerIcon(props.type);

  const openPicker = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const input = inputRef.current as NativePickerInput | null;

    if (!input || props.disabled || props.readOnly) return;

    openNativePicker(input);
  };

  return (
    <label className="block">
      <span className="mb-4 block text-[9px] leading-none text-[#D6D6D6]">
        {label}
      </span>

      <span className="relative block">
        <input
          ref={inputRef}
          className={clsx(
            "event-modal-input block h-5 w-full border-b border-[#D6D6D6] bg-transparent text-[12px] leading-none text-[#43425D] outline-none placeholder:text-[#D6D6D6] focus:border-[#43425D] disabled:text-[#43425D] disabled:opacity-100",
            hasIcon && "pr-7",
            error && "border-red-400",
            className,
          )}
          {...props}
        />

        {hasIcon && (
          <button
            type="button"
            disabled={props.disabled || props.readOnly}
            onClick={openPicker}
            className="absolute right-0 bottom-1 flex h-5 w-5 cursor-pointer items-center justify-center p-0 text-[#D6D6D6] disabled:cursor-not-allowed"
            aria-label={`Open ${label} picker`}
          >
            {renderPickerIcon(props.type)}
          </button>
        )}
      </span>

      {error && (
        <span className="mt-1 block text-[10px] text-red-500">{error}</span>
      )}
    </label>
  );
};

export { Input };
