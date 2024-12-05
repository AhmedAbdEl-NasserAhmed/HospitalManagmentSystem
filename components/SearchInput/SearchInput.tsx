import { HiOutlineSearch } from "react-icons/hi";

const SearchInput = () => {
  return (
    <div className="border-2 border-borderLight bg-secondary px-4 py-3 rounded-lg flex items-center gap-2 w-full  ">
      <span className="text-2xl text-textMuted ">
        <HiOutlineSearch />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none text-lg"
      />
    </div>
  );
};

export default SearchInput;
