"use client";
import CountCard from "@/components/myplan/CountCard";
import MyPlanCard from "@/components/myplan/MyPlanCard";
import SavedPlanCard from "@/components/myplan/SavedPlanCard";
import { FitContext } from "@/context/FitlogContext";
import { Ifitlog } from "@/types/FitLogType";
import React, { useContext, useState } from "react";

const MyplanPage = () => {
  const context = useContext(FitContext);
  if (!context) {
    throw new Error("MyplanPage must be used inside FitlogProvider");
  }
  const { plans, saveds } = context;

  const [shortBy, setSortBy] = useState<"duration" | "rating" | "calories">(
    "duration",
  );

  const [todayPlan, setTodayPlan] = useState<boolean>(true);

  const sortPlans = (fitLog: Ifitlog[]) => {
    const sortedFit = [...fitLog];
    if (shortBy === "duration") {
      sortedFit.sort((a, b) => b.duration - a.duration);
    } else if (shortBy === "rating") {
      sortedFit.sort((a, b) => b.rating - a.rating);
    } else if (shortBy === "calories") {
      sortedFit.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    return sortedFit;
  };

  const sortedPlans = sortPlans(plans);
  const sortedSaved = sortPlans(saveds);

  return (
    <div className="bg-base-300">
      <div className="container mx-auto space-y-10 py-10">
        <div className="">
          <h2 className="uppercase font-bold text-2xl">My Plan</h2>
          <p className="text-[#9CA3AF]">
            Cap of five lifts for today, Finish them, then load more.
          </p>
        </div>

        {todayPlan == true ? (
          <CountCard plans={plans} />
        ) : (
          <CountCard plans={saveds} />
        )}

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box relative">
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
            onClick={() => setTodayPlan(true)}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="space-y-3">
              {sortedPlans.length != 0 ? (
                sortedPlans.map((plan: Ifitlog) => (
                  <MyPlanCard key={plan.id} plan={plan}></MyPlanCard>
                ))
              ) : (
                <div className="text-yellow-300 text-md text-center">
                  No today&apos;s plans found!
                </div>
              )}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Saved"
            onClick={() => setTodayPlan(false)}
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="space-y-3">
              {sortedSaved.length != 0 ? (
                sortedSaved.map((saved: Ifitlog) => (
                  <SavedPlanCard key={saved.id} saved={saved}></SavedPlanCard>
                ))
              ) : (
                <div className="text-yellow-300 text-md text-center">
                  No saved plans found!
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="absolute top-150 right-5 sm:top-94 md:top-94 md:right-30 lg:top-95 lg:right-50">
          <div className="flex items-center">
            <label className="w-full">Sort by</label>
            <select
              value={shortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "rating" | "calories")
              }
              className="select select-neutral w-full"
            >
              <option value={"duration"}>Duration</option>
              <option value={"rating"}>Rating</option>
              <option value={"calories"}>Calories</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyplanPage;
