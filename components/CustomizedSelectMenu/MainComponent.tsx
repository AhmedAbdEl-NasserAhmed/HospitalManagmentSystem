import { HiChevronDown } from "react-icons/hi";
import SelectedOptions from "./SelectedOptions";

const MainComponent = ({
  listItems,
  deleteHandler,
  setExpandList,
  placeholder
}: {
  listItems: string[];
  deleteHandler: (item: string) => void;
  setExpandList: React.Dispatch<React.SetStateAction<boolean>>;
  placeholder: string;
}) => {
  return (
    <div
      onClick={() => setExpandList((prev: boolean) => !prev)}
      className="flex items-center justify-between px-4 py-3 border-borderLight border-[0.8px] rounded-md w-full placeholder:text-textMuted placeholder:text-lg outline-none text-xl text-borderLight cursor-pointer   "
    >
      {listItems.length === 0 && <p>{placeholder}</p>}
      <SelectedOptions listItems={listItems} deleteHandler={deleteHandler} />
      <span className="text-3xl">
        <HiChevronDown />
      </span>
    </div>
  );
};

export default MainComponent;
