import { useState, useEffect } from 'react';

interface TransitionState {
  shouldRender: boolean;
  isVisible: boolean;
  handleTransitionEnd: () => void;
}

export function useTransitionState(isOpen: boolean): TransitionState {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(isOpen);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setShouldRender(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    let timeoutId: number;
    if (isOpen) {
      timeoutId = window.setTimeout(() => setIsVisible(true), 10);
    }
    return () => window.clearTimeout(timeoutId);
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setShouldRender(false);
    }
  };

  return { shouldRender, isVisible, handleTransitionEnd };
}
