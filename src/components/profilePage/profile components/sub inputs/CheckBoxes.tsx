import React, { useState } from "react";

function CheckBoxes({ setPlan }: { setPlan: any }) {
  const [name,setName] = useState("")

 
  return (
    <>
      <div className="flex items-center mb-2">
        <input
          onChange={() => setPlan("monthly")}
          onClick={()=>setName("monthly")}
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked
          disabled
          
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          monthly
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          onChange={() => setPlan("3 months")}
          onClick={()=>setName("3 months")}
          checked={name==="3 months"?true:false}
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          3 Months
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          onChange={() => setPlan("forever")}
          onClick={()=>setName("forever")}
          checked={name==="forever"?true:false}
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          forever
        </label>
      </div>
    </>
  );
}

export default CheckBoxes;
