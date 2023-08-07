"use client"
import { useEffect, useState } from 'react';

type UseDebounceType<T> = T;

export const useDebounce = <T>(value: UseDebounceType<T>, delay = 800): UseDebounceType<T> => {
  const [debouncedValue, setDebouncedValue] = useState<UseDebounceType<T>>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};