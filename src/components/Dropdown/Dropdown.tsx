/**
 * React
 */
import { useState } from "react";

/**
 * @headlessui/react/Combobox: Robust support for keyboard navigation.
 */
import { Combobox } from "@headlessui/react";

/**
 * JavaScript utility for conditionally joining classNames together.
 */
import classNames from "classnames";

// I18N
import "../../i18N/config";
import { useTranslation } from "react-i18next";

// Utilities
import isEmpty from "lodash/isEmpty";
import { IDropdownOption } from "../definitions";
import { icon, EMPTY_SPACE_REGEX } from "../../constants";
import { searchLogo, IMAGE_MAP } from "../../assets";

type DropdownProps = {
  options: IDropdownOption[];
  onSelect: (item: IDropdownOption) => void;
};

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const { options, onSelect } = props;
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState<IDropdownOption>({
    id: "",
    name: "",
  });
  const [searchText, setSearchText] = useState<string>("");

  const filteredDropdownOptions: IDropdownOption[] = isEmpty(searchText)
    ? options
    : options.filter((option) =>
        option.name
          .toLowerCase()
          .replace(EMPTY_SPACE_REGEX, "")
          .includes(searchText.toLowerCase().replace(EMPTY_SPACE_REGEX, ""))
      );

  const handleOnSelect = (product: IDropdownOption): void => {
    setSelectedOption(product);
    onSelect(product);
  };

  const renderNoMatchFound = (): JSX.Element => {
    return (
      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
        {t("COMMON.NOTHING_FOUND")}
      </div>
    );
  };

  const renderFilteredMenu = (): JSX.Element[] => {
    return filteredDropdownOptions.map((item) => (
      <Combobox.Option
        key={item.id}
        className={({ active }) =>
          classNames("relative", "p-2", "rounded-md", "cursor-pointer", {
            "bg-blue-600": active,
            "text-white": active,
            "text-gray-900": !active,
          })
        }
        value={item}
      >
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={IMAGE_MAP[item.image || item.id]}
              className="w-5 h-5 mr-4 rounded-sm"
            />
            <span className="block truncate">{item.name}</span>
          </div>
          {selectedOption.id === item.id && (
            <span className="h-5 w-5" aria-hidden="true">
              {icon.check}
            </span>
          )}
        </div>
      </Combobox.Option>
    ));
  };
  return (
    <div>
      <Combobox value={selectedOption} onChange={handleOnSelect}>
        <div className="relative mt-1">
          {isEmpty(searchText) && isEmpty(selectedOption.name) && (
            <img
              src={searchLogo}
              className="w-4 h-4 text-gray-500 absolute mt-2.5 ml-2 focus:invisible"
            />
          )}
          <Combobox.Input
            className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-700 bg-slate-200      focus:outline-1 focus:outline-blue-600 rounded-md"
            displayValue={(item: IDropdownOption) => item.name}
            placeholder={t("SEARCH_FOR_ANY_SOFTWARE")}
            autoComplete="off"
            onChange={(event) => setSearchText(event.target.value)}
          ></Combobox.Input>
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredDropdownOptions.length === 0
              ? renderNoMatchFound()
              : renderFilteredMenu()}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default Dropdown;
