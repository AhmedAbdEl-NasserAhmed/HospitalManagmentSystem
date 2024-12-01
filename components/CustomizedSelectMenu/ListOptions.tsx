const ListOptions = ({
  expandList,
  listItems,
  options,
  handleAddToListItems,
  multiple,
  setExpandList
}: {
  multiple: boolean;
  expandList: boolean;
  listItems: string[];
  options: { id: number; content: string }[];
  handleAddToListItems: (item: string) => void;
  setExpandList: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ul
      className={`absolute ${
        expandList ? "h-[100px] " : "h-0"
      } flex flex-col gap-2 text-lg top-28 capitalize w-full bg-white shadow-md  z-50 overflow-hidden rounded-md duration-200 transition-all ${
        listItems.length > 3 ? "overflow-y-scroll" : ""
      } `}
    >
      {options.map((item) => {
        const isChosen = listItems.includes(item.content);
        return (
          <li
            key={item.id}
            onClick={() => {
              if (!multiple) {
                setExpandList(false);
              }
              handleAddToListItems(item.content);
            }}
            className={`p-3 cursor-pointer ${isChosen ? "hidden" : "block"} `}
          >
            {item.content}
          </li>
        );
      })}
    </ul>
  );
};

export default ListOptions;
