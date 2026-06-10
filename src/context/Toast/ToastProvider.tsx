import { useState, useMemo, useCallback, useRef, type ReactNode } from 'react';
import { ToastContext } from './ToastContext';
import type { ToastType } from '@types';

export type ToastState = {
  isOpen: boolean;
  type?: ToastType | '';
  message?: string;
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>({
    isOpen: false,
    type: '',
    message: '',
  });
  const timeoutRef = useRef<number | null>(null);

  const hideToast = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setToast((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const showToast = useCallback(
    ({ message, type }: { message?: string; type?: ToastType }) => {
      if (toast.isOpen) return;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setToast({ isOpen: true, type, message });
      timeoutRef.current = setTimeout(() => {
        hideToast();
      }, 3000);
    },
    [hideToast, toast.isOpen],
  );

  const contextValue = useMemo(
    () => ({ showToast, hideToast, toast }),
    [showToast, hideToast, toast],
  );

  return <ToastContext value={contextValue}>{children}</ToastContext>;
}
