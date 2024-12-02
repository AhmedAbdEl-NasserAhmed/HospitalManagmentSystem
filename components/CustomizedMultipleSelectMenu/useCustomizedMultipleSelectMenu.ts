"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { useEffect, useState } from "react";

const useCustomizedMultipleSelectMenu = (defaultValue: string[]) => {
  const [expandList, setExpandList] = useState<boolean>(false);

  const [listItems, setListItems] = useState<string[]>([]);

  const listRef = useClickOutside<HTMLDivElement>({
    closeFn: () => setExpandList(false)
  });

  useEffect(() => {
    setListItems(defaultValue);
  }, []);

  return {
    expandList,
    listItems,
    setListItems,
    listRef,
    setExpandList
  };
};

export default useCustomizedMultipleSelectMenu;
