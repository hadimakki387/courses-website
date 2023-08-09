import fetchData from "@/Queries/GetData";
import Plans from "@/components/Landing Page/plans/Plans";
import LoadingScreen from "@/components/loading/LoadingScreen";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ApprovePayments() {
  const [data, setData]: any = useState();

  useEffect(() => {
    fetchData("admin", setData);
  }, []);

  function findUserByID(userID: string) {
    return data.users.find((user: any) => user._id === userID);
  }

  function findPlanByID(planID: string) {
    return data.plans.find((plan: any) => plan._id === planID);
  }

  const approveRequest = (payment:any)=>{
    console.log(payment)

  }
  const declineRequest = (payment:any)=>{
    console.log(payment)
  }

  return (
    <div className={`${!data && "h-full"}`}>
      {data ? (
        <div>
          {data.payments.map((payment: any, index: number) => {
            const user = findUserByID(payment.payerID);
            const plan = findPlanByID(payment.planType);

            return (
              <div
                className="w-full bg-gray-600 p-4 flex justify-start items-center gap-4"
                key={index}
              >
                <div className="w-1/2">
                  <Image
                    src={payment.img}
                    width={1000}
                    height={1000}
                    alt="payment"
                    className="w-full"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                  {user && (
                    <div className="flex flex-col gap-2">
                      <div>{user.name}</div>
                      <div>{user.email}</div>
                      {plan && <div>selected plan: {plan.name}</div>}
                    </div>
                  )}
                  <div className="flex gap-8">
                    <button onClick={()=>{approveRequest(payment._id)}}>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button onClick={()=>{declineRequest(payment._id)}}>
                      <FontAwesomeIcon icon={faX} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <LoadingScreen />
        </div>
      )}
    </div>
  );
}

export default ApprovePayments;
