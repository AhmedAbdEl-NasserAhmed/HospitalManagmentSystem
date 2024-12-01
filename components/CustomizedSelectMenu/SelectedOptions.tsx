import { HiX } from "react-icons/hi";

const SelectedOptions = ({
  listItems,
  deleteHandler
}: {
  listItems: string[];
  deleteHandler: (item: string) => void;
}) => {
  return (
    <div className="flex items-center gap-3">
      {listItems.map((item) => {
        return (
          <div
            className="flex items-center gap-3 px-2 py-1 bg-borderLight  text-black rounded-md"
            key={item}
          >
            <h2>{item}</h2>
            <span
              className="bg-white px-[0.4rem] py-[0.2rem] rounded-md text-sm"
              onClick={() => deleteHandler(item)}
            >
              <HiX />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedOptions;
