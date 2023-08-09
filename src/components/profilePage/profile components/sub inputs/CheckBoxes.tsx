import { ProfileContext } from "@/context/ProfileContext";
import React, { useContext, useState } from "react";

function CheckBoxes({ setPlan ,Plan}: { setPlan: any ,Plan:any}) {
  const [name,setName] = useState("")

  const [ShowEditInfo, editProfile, planSettings, data] =
  useContext(ProfileContext);

  return (
    <>
    {data.plans.map((plan:any,index:number)=>{
      return<div className="flex items-center mb-2" key={index}>
        <input
          onChange={() => setPlan(plan._id)}
          onClick={()=>setName(plan.name)}
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={Plan===plan._id}
          
          
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {plan.name}
        </label>
      </div>
    })}
      
 
    </>
  );
}

export default CheckBoxes;
