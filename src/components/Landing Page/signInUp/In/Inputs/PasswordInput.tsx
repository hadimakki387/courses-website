import React, { useState } from "react";
import CheckSvg from "../SVGs/CheckSvg";

function PasswordInput({
  handleInputChange,
  setPasswordValid,
}: {
  handleInputChange: any;
  setPasswordValid: any;
}) {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validatePassword = (input: string) => {
    // Customize your password validation logic here
    const minLength = 8;

    return input.length >= minLength;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValid(validatePassword(newPassword));
    handleInputChange(e); // Pass the event to the parent handler if needed
    setPasswordValid(validatePassword(newPassword))
  };

  return (
    <>
      <label
        className="text-xs font-medium text-grey-600 block text-2xs text-grey-800 dark:text-grey-600"
        htmlFor="password"
      >
        Password
      </label>
      <div className="relative flex items-center border-b border-panel-700">
        <input
          type="password"
          name="UserPassword"
          className="input is-minimal text-sm text-white"
          autoComplete="current-password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          type="button"
          title="Toggle private mode"
          className="ml-4 pr-8 text-2xs font-bold text-grey"
        >
          Show
        </button>
        <div
          className={`absolute right-0 mx-auto -mt-px flex h-4 w-4 items-center justify-center rounded-full p-1 ${
            isValid ? "bg-green-500" : "bg-gray-600"
          }`}
        >
          <CheckSvg />
        </div>
      </div>
      {!isValid && password ? (
        <span className="text-xs text-red-700 ">
          your need at least 8 characters
        </span>
      ) : (
        ""
      )}
    </>
  );
}

export default PasswordInput;
