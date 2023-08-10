import GetData from "@/Queries/GetData";
import SendData from "@/Queries/SendData";
import Plans from "@/components/Landing Page/plans/Plans";
import LoadingScreen from "@/components/loading/LoadingScreen";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ApprovePayments() {
  const [data, setData]: any = useState();
  const [num, setNum]: any = useState(0);

  useEffect(()=>{
    GetData("admin", setData);
  },[])
  useEffect(() => {
    GetData("admin", setData);
  }, [num]);

  function findUserByID(userID: string) {
    return data.users.find((user: any) => user._id === userID);
  }

  function findPlanByID(planID: string) {
    return data.plans.find((plan: any) => plan._id === planID);
  }

  const approveRequest = (payment: any, plan: any) => {
    SendData(
      "admin",
      { payment: payment, plan: plan, toDo: "approveRequest" },
      (res: any) => {
        
      }
    );
    setNum(num + 1);
  };
  const declineRequest = (payment: any, plan: any) => {
    SendData(
      "admin",
      { payment: payment, plan: plan, toDo: "declineRequest" },
      (res: any) => {
        
      }
    );
  
    setNum(num + 1);
  };
console.log(data)
  return (
    <>{data ? (
    <div className={`${data.payments.length<2 && "h-screen"} `}>
      
        <div className="flex flex-col gap-4">
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
                    src={payment.imgURL}
                    width={1000}
                    height={500}
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
                    <button
                      onClick={() => {
                        approveRequest(payment, plan);
                      }}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button
                      onClick={() => {
                        declineRequest(payment, plan);
                      }}
                    >
                      <FontAwesomeIcon icon={faX} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <LoadingScreen />
        </div>
      )}
    
    </>
    
  );
}

export default ApprovePayments;