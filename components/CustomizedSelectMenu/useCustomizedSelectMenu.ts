"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { useState } from "react";

const useCustomizedSelectMenu = () => {
  const [expandList, setExpandList] = useState<boolean>(false);

  const [listItems, setListItems] = useState<string[]>([]);

  const listRef = useClickOutside<HTMLDivElement>({
    closeFn: () => setExpandList(false)
  });

  return {
    expandList,
    listItems,
    setListItems,
    listRef,
    setExpandList
  };
};

export default useCustomizedSelectMenu;
