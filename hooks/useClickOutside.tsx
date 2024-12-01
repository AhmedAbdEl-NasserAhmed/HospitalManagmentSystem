"use client";

import { useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLElement>({
  closeFn
}: {
  closeFn: () => void;
}) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeFn();
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, [closeFn]);

  return ref;
};

export default useClickOutside;
