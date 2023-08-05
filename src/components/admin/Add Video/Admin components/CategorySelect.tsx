import React from "react";

function CategorySelect({handleChange}:any) {
  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select the course
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name="Course"
      onChange={handleChange}
      >
        <option selected>Choose the course</option>
        <option value="MERN">MERN</option>
        
      </select>
    </div>
  );
}

export default CategorySelect;
