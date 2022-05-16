import classNames from "classnames";
import React from "react";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { MdExpandMore } from "react-icons/md";

const ButtonDropdown: React.FC = () => {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(4);

  return (
    <div className="relative">
      <div className="inline-flex text-sm h-8">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-1 rounded-l">
          Koupit
        </button>
        <button
          {...buttonProps}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-1 rounded-r"
        >
          <MdExpandMore />
        </button>
      </div>
      <div
        hidden={!isOpen}
        role="menu"
        className={classNames(
          "absolute bg-white rounded p-3 px-5 w-auto border-2 flex-col z-20 top-10 right-0 whitespace-nowrap",
          {
            flex: isOpen,
          }
        )}
      >
        <a {...itemProps[0]} className="py-1 hover:bg-gray-100">
          Koupit zrychleně
        </a>
        <a {...itemProps[1]} className="py-1 hover:bg-gray-100">
          Porovnat
        </a>
        <a {...itemProps[1]} className="py-1 hover:bg-gray-100">
          Hlídat
        </a>
        <a {...itemProps[1]} className="py-1 hover:bg-gray-100">
          Přidat do seznamu
        </a>
      </div>
    </div>
  );
};

export default ButtonDropdown;
