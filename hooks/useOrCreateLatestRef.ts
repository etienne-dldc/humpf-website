import { MutableRefObject, useRef } from 'react';

export function useOrCreateLatestRef<T>(
  ref: MutableRefObject<T> | undefined | null,
  value: T
): MutableRefObject<T> {
  const created: MutableRefObject<T> = useRef<T>(value);
  if (ref) {
    ref.current = value;
    return ref;
  }
  created.current = value;
  return created;
}
