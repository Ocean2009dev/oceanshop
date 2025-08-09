import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface FilterGroupProps {
  title?: string;
  borderTop?: boolean;
  options?: string[];
  valueOptions?: string[];
  onSelect?: (value: string) => void;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  title = "",
  options = [],
  onSelect,
  valueOptions = [],
  borderTop = false,
}) => {
  const [isDownMenu, setIsDownMenu] = useState(false);
  const handleShowMenu = () => {
    setIsDownMenu(!isDownMenu);
  };
  return (
    <div className="mb-6 bg-white p-4">
      <div className="flex items-center justify-between mb-3 ">
        <h3 className="font-semibold ">{title}</h3>
        {isDownMenu ? (
          <FaAngleUp className="cursor-pointer" onClick={handleShowMenu} />
        ) : (
          <FaAngleDown className="cursor-pointer" onClick={handleShowMenu} />
        )}
      </div>

      <ul
        className={`flex-col ${
          borderTop ? "border-t-1 border-t-gray-200" : ""
        }  space-y-2  transition-all delay-500 duration-500 ease-in-out pt-3   ${
          isDownMenu
            ? "opacity-0 -translate-y-2 max-h-0"
            : "opacity-100 translate-y-0 max-h-[500px]"
        } overflow-hidden`}
      >
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
              <span>
                {valueOptions[index] ? `${valueOptions[index]}` : null}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
