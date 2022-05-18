import classNames from "classnames";
import React from "react";

const tabs = ["TOP", "Nejprodávanější", "Od nejlevnějšího", "Od nejdražšího"];

const Tabs: React.FC = () => {
  return (
    <ul className="flex text-sm overflow-x-scroll md:overflow-auto font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
      {tabs.map((tab, i) => (
        <li key={i} className="mr-2">
          <a
            className={classNames(
              "inline-block p-4 bg-gray-100 rounded-t-lg whitespace-nowrap active cursor-pointer",
              { "text-blue-600 font-bold": i === 0 }
            )}
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
