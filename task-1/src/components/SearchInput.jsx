import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SearchInput = ({ onChange, value }) => {
  return (
    <div className="flex flex-1 items-center space-x-2 rounded-lg border border-gray-300 px-4 py-1">
      <FaSearch className="text-gray-700" />
      <input
        type="text"
        placeholder="Search Your Todos..."
        className="w-full rounded-md border-none outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
