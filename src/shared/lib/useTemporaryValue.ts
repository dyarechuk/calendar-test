import { useCallback, useEffect, useRef, useState } from "react";

export const useTemporaryValue = <TValue>(
  initialValue: TValue,
  duration: number,
) => {
  const [value, setValue] = useState<TValue>(initialValue);
  const timeoutRef = useRef<number | null>(null);

  const clearTemporaryValue = useCallback(() => {
    if (!timeoutRef.current) return;

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }, []);

  const setTemporaryValue = useCallback(
    (nextValue: TValue) => {
      clearTemporaryValue();
      setValue(nextValue);

      timeoutRef.current = window.setTimeout(() => {
        setValue(initialValue);
        timeoutRef.current = null;
      }, duration);
    },
    [clearTemporaryValue, duration, initialValue],
  );

  useEffect(() => {
    return clearTemporaryValue;
  }, [clearTemporaryValue]);

  return [value, setTemporaryValue, clearTemporaryValue] as const;
};
