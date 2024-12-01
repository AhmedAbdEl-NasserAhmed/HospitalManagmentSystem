"use client";

import { useEffect } from "react";
import ListOptions from "./ListOptions";
import MainComponent from "./MainComponent";
import useCustomizedSelectMenu from "./useCustomizedSelectMenu";

const CustomizedSelectMenu = ({
  multiple,
  options,
  title,
  placeholder,
  onChange
}: {
  multiple: boolean;
  options: { id: number; content: string }[];
  title: string;
  placeholder: string;
  onChange: (title: string[]) => void;
}) => {
  const { listItems, setListItems, listRef, setExpandList, expandList } =
    useCustomizedSelectMenu();

  function handleAddToListItems(item: string) {
    if (!multiple && listItems.length === 1) return;

    if (!listItems.includes(item)) {
      setListItems((data: string[]) => [...data, item]);
    }
  }

  function handleDeleteItemFromListItems(item: string) {
    setListItems((data: string[]) =>
      data.filter((existedItem) => existedItem !== item)
    );
  }

  useEffect(() => {
    onChange(listItems);
  }, [listItems]);

  return (
    <div ref={listRef} className="relative flex flex-col gap-4 ">
      <h2 className="capitalize text-xl">{title}</h2>
      <MainComponent
        listItems={listItems}
        deleteHandler={handleDeleteItemFromListItems}
        setExpandList={setExpandList}
        placeholder={placeholder}
      />
      <ListOptions
        setExpandList={setExpandList}
        multiple={multiple}
        expandList={expandList}
        listItems={listItems}
        handleAddToListItems={handleAddToListItems}
        options={options}
      />
    </div>
  );
};

export default CustomizedSelectMenu;
