import React from "react";
import CheckSvg from "../Landing Page/signInUp/In/SVGs/CheckSvg";

function InputText({
  name,
  label,
  type,
  placeHolder,
  handleChange,
}: {
  name: string;
  label: string;
  type: string;
  placeHolder: string;
  handleChange:any;
}) {
  return (
    <>
      <label
        className="text-xs font-medium text-grey-600 block text-2xs text-grey-800 dark:text-grey-600"
        htmlFor="email"
      >
        {label}
      </label>
      <div className="relative flex items-center border-b border-panel-700 mb-4">
        <input
          id="email_12505.664105939994"
          type={type}
          name={name}
          data-js="email"
          className="input is-minimal text-sm text-white bg-transparent focus:outline-none"
          autoComplete="username"
          placeholder={placeHolder}
          onChange={handleChange}
        />
        <div className="absolute right-0 mx-auto -mt-px flex h-4 w-4 items-center justify-center rounded-full p-1 bg-gray-600">
          <CheckSvg />
        </div>
      </div>
    </>
  );
}

export default InputText;
