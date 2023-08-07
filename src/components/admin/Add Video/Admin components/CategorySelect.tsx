import React from "react";

function CategorySelect({
  handleChange,
  sections,
  firstValue,
  title,
}: {
  sections: any;
  handleChange: any;
  firstValue: string;
  title: string;
}) {
  console.log(sections)
  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name="Course"
        onChange={handleChange}
      >
        <option defaultValue={firstValue}>{firstValue}</option>
        {sections.map((section: any, index: any) => {
          return (
            <option value={section.id} key={index}>
              {section.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CategorySelect;
