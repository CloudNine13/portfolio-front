import { createContext } from 'react';
import type { ToastType } from '@types';
import type { ToastState } from './ToastProvider';

export type ToastContextType = {
  showToast: ({ message, type }: { message?: string; type?: ToastType }) => void;
  hideToast: () => void;
  toast: ToastState;
};

export const ToastContext = createContext<ToastContextType | undefined>(undefined);
