import { toast, type ToastOptions } from "react-toastify";

export type AppToastType = "success" | "error" | "info" | "warning";

type ShowAppToastParams = {
  type: AppToastType;
  text: string;
  duration?: number;
};

export const showAppToast = ({ type, text, duration }: ShowAppToastParams) => {
  const options: ToastOptions = {
    autoClose: duration ?? 3000,
  };

  try {
    toast[type](text, options);
  } catch {
    // Toast failures should never break the user flow that triggered them.
  }
};
