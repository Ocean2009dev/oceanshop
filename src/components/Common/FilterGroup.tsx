import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface FilterGroupProps {
  className?: string;
  title?: string;
  borderTop?: boolean;
  options?: string[];
  valueOptions?: string[];
  onSelect?: (values: string[]) => void;
  onSingleSelect?: (value: string) => void;
  multiSelect?: boolean;
  selectedValues?: string[];
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  className,
  title = "",
  options = [],
  onSelect,
  onSingleSelect,
  valueOptions = [],
  borderTop = false,
  multiSelect = true,
  selectedValues = [],
}) => {
  const [isDownMenu, setIsDownMenu] = useState(false);
  const [localSelected, setLocalSelected] = useState<string[]>(selectedValues);

  const handleShowMenu = () => {
    setIsDownMenu(!isDownMenu);
  };

  const handleOptionChange = (option: string) => {
    if (multiSelect) {
      const newSelected = localSelected.includes(option)
        ? localSelected.filter((item) => item !== option)
        : [...localSelected, option];

      setLocalSelected(newSelected);
      onSelect?.(newSelected);
    } else {
      onSingleSelect?.(option);
    }
  };
  return (
    <div className={`${className} bg-white  rounded-lg overflow-hidden`}>
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={handleShowMenu}
      >
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {isDownMenu ? (
          <FaAngleUp className="text-gray-600" />
        ) : (
          <FaAngleDown className="text-gray-600" />
        )}
      </div>

      <div
        className={`transition-all duration-300 ease-in-out p-4 ${
          isDownMenu ? "max-h-0 opacity-0" : "max-h-96 opacity-100"
        } overflow-hidden`}
      >
        <ul
          className={`flex flex-col space-y-3  max-h-[200px] overflow-y-auto pt-3 ${
            borderTop ? "border-t border-gray-200" : ""
          }`}
        >
          {options.map((opt, index) => (
            <li key={opt} className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type={multiSelect ? "checkbox" : "radio"}
                  name={multiSelect ? undefined : title}
                  value={opt}
                  checked={
                    multiSelect
                      ? localSelected.includes(opt)
                      : selectedValues.includes(opt)
                  }
                  onChange={() => handleOptionChange(opt)}
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
    </div>
  );
};
