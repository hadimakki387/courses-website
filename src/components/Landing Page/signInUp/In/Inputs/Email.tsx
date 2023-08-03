import React from "react";
import CheckSvg from "../SVGs/CheckSvg";

function Email({name,handleInputChange}:{name:string,handleInputChange:any}) {
  return (
    <>
      <label
        className=" text-xs font-medium text-grey-600 block text-2xs text-grey-800 dark:text-grey-600"
        htmlFor="email"
      >
        Email
      </label>
      <div className="relative flex items-center border-b border-panel-700 mb-4">
        <input
          id="email_12505.664105939994"
          type="text"
          name={name}
          data-js="email"
          className="input is-minimal text-sm text-white"
          autoComplete="username"
          placeholder="Enter Email"
          onChange={handleInputChange}
        />
        <div className="absolute right-0 mx-auto -mt-px flex h-4 w-4 items-center justify-center rounded-full p-1 bg-gray-600">
          <CheckSvg />
        </div>
      </div>
    </>
  );
}

export default Email;
