import { FaAngleDown } from "react-icons/fa6";

interface FilterGroupProps {
  title: string;
  options: string[];
  valueOptions: string[];
  onSelect?: (value: string) => void;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  options,
  onSelect,
  valueOptions,
}) => {
  return (
    <div className="mb-6 bg-white p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold ">{title}</h3>
        <FaAngleDown className="cursor-pointer" />
      </div>
      <ul className=" flex-col space-y-2">
        {options.map((opt, index) => (
          <li key={opt} className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                value={opt}
                onChange={() => onSelect?.(opt)}
                className="accent-black"
              />
              <span>{opt}</span>
            </label>

            <label className="gap-2 cursor-pointer">
              <span>{`{${valueOptions[index]}}`}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
