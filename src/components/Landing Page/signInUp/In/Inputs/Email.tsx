import React, { useState } from "react";
import CheckSvg from "../SVGs/CheckSvg";

function Email({
  name,
  handleInputChange,
  setEmailValid
}: {
  name: string;
  handleInputChange: any;
  setEmailValid:any
}) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (input: string) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(input);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
    handleInputChange(e); // Pass the event to the parent handler if needed
    setEmailValid(validateEmail(newEmail))
  };



  return (
    <>
      <label
        className="text-xs font-medium text-grey-600 block text-2xs text-grey-800 dark:text-grey-600"
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
          value={email}
          onChange={handleEmailChange}
        />
        <div
          className={`absolute right-0 mx-auto -mt-px flex h-4 w-4 items-center justify-center rounded-full p-1 ${
            isValid && email ? "bg-green-500" : "bg-gray-600"
          }`}
        >
          <CheckSvg />
        </div>
      </div>
      {!isValid && email ? (
        <span className="text-xs text-red-700 relative bottom-4">
          enter a valid email
        </span>
      ) : (
        ""
      )}
    </>
  );
}

export default Email;
