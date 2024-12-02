import { HiX } from "react-icons/hi";

const SelectedOptions = ({
  listItems,
  deleteHandler
}: {
  listItems: string[];
  deleteHandler: (item: string) => void;
}) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {listItems?.map((item: string) => {
        return (
          <div
            className="flex items-center gap-3 px-2 py-1 bg-secondary  rounded-md"
            key={item}
          >
            <h2 className="text-black">{item}</h2>
            <span
              className="bg-borderLight px-[0.4rem] py-[0.2rem] rounded-md text-sm text-black "
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
