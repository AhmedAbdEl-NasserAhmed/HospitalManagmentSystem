const ListOptions = ({
  expandList,
  listItems,
  options,
  handleAddToListItems
}: {
  expandList: boolean;
  listItems: string[];
  options: { id: number; content: string }[];
  handleAddToListItems: (item: string) => void;
}) => {
  return (
    <ul
      className={`absolute ${
        expandList ? "h-[100px] " : "h-0"
      } flex flex-col gap-2 text-lg top-28 capitalize w-full bg-white shadow-md  z-50 overflow-hidden rounded-md duration-200 transition-all ${
        options.length > 3 ? "overflow-y-scroll" : ""
      } `}
    >
      <div className="contents">
        {listItems?.length === options.length && (
          <p className="flex items-center justify-center font-semibold h-full">
            No More Options !
          </p>
        )}
      </div>
      {options.map((item) => {
        const isChosen = listItems?.includes(item.content);
        return (
          <li
            key={item.id}
            onClick={() => handleAddToListItems(item.content)}
            className={`p-3 cursor-pointer ${isChosen ? "hidden" : "block"}`}
          >
            {item.content}
          </li>
        );
      })}
    </ul>
  );
};

export default ListOptions;
