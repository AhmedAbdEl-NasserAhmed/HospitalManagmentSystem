"use client";

import { useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLElement>({
  closeFn,
  stopBubbling = false
}: {
  closeFn: () => void;
  stopBubbling?: boolean;
}) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeFn();
      }
    }

    window.addEventListener("click", handleClickOutside, stopBubbling);

    return () =>
      window.removeEventListener("click", handleClickOutside, stopBubbling);
  }, [closeFn]);

  return ref;
};

export default useClickOutside;
