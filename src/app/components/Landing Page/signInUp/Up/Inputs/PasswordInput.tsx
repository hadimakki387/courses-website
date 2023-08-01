import React from "react";
import CheckSvg from "../SVGs/CheckSvg";

function PasswordInput() {
  return (
    <>
      <label
        className=" text-xs font-medium text-grey-600 block text-2xs text-grey-800 dark:text-grey-600"
        htmlFor="password"
      >
        Password
      </label>
      <div className="relative flex items-center border-b border-panel-700">
        <input
          id="password_66304.12609659045"
          type="password"
          name="password_66304.12609659045"
          data-js="password"
          className="input is-minimal text-sm text-white"
          autoComplete="current-password"
          placeholder="Enter Password"
        />
        <button
          type="button"
          title="Toggle private mode"
          className="ml-4 pr-8 text-2xs font-bold text-grey"
        >
          Show
        </button>
        <div className="absolute right-0 mx-auto -mt-px flex h-4 w-4 items-center justify-center rounded-full p-1 bg-gray-600">
          <CheckSvg />
        </div>
      </div>
    </>
  );
}

export default PasswordInput;
