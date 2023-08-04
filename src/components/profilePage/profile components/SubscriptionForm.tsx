import TextInput from "@/components/admin/Add Video/Admin components/TextInput";
import React from "react";
import CheckBoxes from "./sub inputs/CheckBoxes";
import FileInput from "./sub inputs/FileInput";

function SubscriptionFrom() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <p>Current Subscription:</p>
        <p className="text-sm sm-text-c bg-[#24395a] px-2 py-1 rounded-lg">
          Monthly
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div>Want to upgrade your subscription?</div>
        <div className="flex flex-col gap-4">
          <div>
            <div>choose a plan</div>
            <CheckBoxes />
          </div>

          <FileInput />

          <TextInput
            name="password"
            type="password"
            placeholder="password"
            title="Enter Your Password"
          />
        </div>
      </div>
    </div>
  );
}

export default SubscriptionFrom;
