"use client";

import { useEffect } from "react";
import ListOptions from "./ListOptions";
import MainComponent from "./MainComponent";
import useCustomizedMultipleSelectMenu from "./useCustomizedMultipleSelectMenu";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const CustomizedMultipleSelectMenu = ({
  options,
  title,
  placeholder,
  onChange,
  errorMessage,
  defaultValue = []
}: {
  options: { id: number; content: string }[];
  title: string;
  placeholder: string;
  onChange: (title: string[]) => void;
  errorMessage?: string;
  defaultValue?: string[];
}) => {
  const { listItems, setListItems, listRef, setExpandList, expandList } =
    useCustomizedMultipleSelectMenu(defaultValue);

  function handleAddToListItems(item: string) {
    if (!listItems.includes(item)) {
      setListItems((data: string[]) => [...data, item]);
    }
  }

  function handleDeleteItemFromListItems(item: string) {
    setListItems((data: string[]) =>
      data.filter((existedItem: string) => existedItem !== item)
    );
  }

  useEffect(() => {
    onChange(listItems);
  }, [listItems, onChange]);

  return (
    <div ref={listRef} className="relative flex flex-col gap-4 ">
      <h2 className=" text-xl">{title}</h2>
      <MainComponent
        listItems={listItems}
        deleteHandler={handleDeleteItemFromListItems}
        setExpandList={setExpandList}
        placeholder={placeholder}
      />
      <ListOptions
        expandList={expandList}
        listItems={listItems}
        handleAddToListItems={handleAddToListItems}
        options={options}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default CustomizedMultipleSelectMenu;
