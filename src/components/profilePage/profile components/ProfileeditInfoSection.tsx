import React, { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import SubscriptionFrom from "./SubscriptionForm";

function ProfileeditInfoSection() {
  const [form, setForm] = useState("personal");
  const changeForm = (e: string) => {
    setForm(e);
  };
  const active = "bg-[#24395a]";

  return (
    <div className="w-full course-lighter-bg-divs p-8 rounded-lg my-8 flex justify-between items-start">
      <div className="flex flex-col gap-4">
        <div
          onClick={() => changeForm("personal")}
          className={`hover:bg-[#24395a] px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
            form === "personal" && active
          }`}
        >
          Personal Information
        </div>
        <div
          onClick={() => changeForm("subscription")}
          className={`hover:bg-[#24395a] px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
            form === "subscription" && active
          }`}
        >
          Subscription
        </div>
      </div>
      <div className="w-[80%]">
        {form === "personal" ? <PersonalInfoForm /> : <SubscriptionFrom />}
      </div>
    </div>
  );
}

export default ProfileeditInfoSection;
