import {
  useGetAdminPlansQuery,
  useGetAdminUsersQuery,
  useUpdateUserPlanMutation,
} from "@/api/apiSlice";
import { AdminUserInterface } from "@/interfaces";
import React, { useState, useEffect, useRef } from "react";
type Props = {};

function ListUsers({}: Props) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<AdminUserInterface[]>([]);

  const { data, isLoading, isError } = useGetAdminUsersQuery({});

  useEffect(() => {
    if (data) {
      setUsers((prev) => [...prev, ...data]);
    }
  }, [data]);

  const { data: plans } = useGetAdminPlansQuery();
  const [updateUserPlan] = useUpdateUserPlanMutation();
  const [selectedPlans, setSelectedPlans] = useState<{ [key: string]: string }>(
    {}
  );
  const loader = useRef(null);

  const handlePlanChange = (userId: string, planId: string) => {
    setSelectedPlans((prev) => ({ ...prev, [userId]: planId }));
  };

  const handleSavePlan = (userId: string) => {
    const planId = selectedPlans[userId];
    if (planId) {
      updateUserPlan({ userId, planId });
    }
  };

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader]);

  console.log("search", search);

  return (
    <div>
      <input
        className="bg-gray-800 text-white rounded-md p-2"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <table>
        {(search
          ? users?.filter((user) => user.email.includes(search))
          : users
        )?.map((user: AdminUserInterface) => (
          <tr key={user._id} className="border-b border-gray-700">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              {user.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              {user.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              <select
                className="bg-gray-800 text-white rounded-md p-2"
                value={selectedPlans[user._id] || user.plan?._id || ""}
                onChange={(e) => handlePlanChange(user._id, e.target.value)}
              >
                <option value="">No plan</option>
                {plans?.map((plan) => (
                  <option key={plan._id} value={plan._id}>
                    {plan.name}
                  </option>
                ))}
              </select>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              <button onClick={() => handleSavePlan(user._id)}>Save</button>
            </td>
          </tr>
        ))}
      </table>
      <div ref={loader} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading users</p>}
    </div>
  );
}

export default ListUsers;
