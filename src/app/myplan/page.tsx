"use client";
import MyPlanCard from "@/components/myplan/MyPlanCard";
import SavedPlanCard from "@/components/myplan/SavedPlanCard";
import { FitContext } from "@/context/FitlogContext";
import { Ifitlog } from "@/types/FitLogType";
import React, { ReactNode, useContext, useState } from "react";

const MyplanPage = () => {
  const { plans, setPlan, saveds, setSaved } = useContext(FitContext);

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

  const getTotalDuration = (plans: Ifitlog[]): number => {
    return plans.reduce((total, plans) => total + plans.duration, 0);
  };

  const getTotalCalories = (plans: Ifitlog[]): number => {
    return plans.reduce((total, plans) => total + plans.caloriesBurned, 0);
  };

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
          <div className="bg-base-100 border border-gray-700 rounded-2xl py-7 flex items-center">
            <div className="pl-10 pr-40">
              <h2 className="font-bold text-2xl">Exercises</h2>
              <span className="font-bold text-5xl text-[#ccff00]">
                {plans.length}
              </span>
            </div>
            <div className="border-l border-gray-800 pl-20 pr-40">
              <h2 className="font-bold text-2xl">Munites</h2>
              <span className="font-bold text-5xl text-[#ccff00]">
                {plans.length && getTotalDuration(plans)}
              </span>
            </div>
            <div className="border-l border-gray-800 pl-20 pr-40">
              <h2 className="font-bold text-2xl">Calories</h2>
              <span className="font-bold text-5xl text-[#ccff00]">
                {plans.length && getTotalCalories(plans)}
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-base-100 border border-gray-700 rounded-2xl py-7 flex items-center">
            <div className="pl-10 pr-40">
              <h2 className="font-bold text-2xl">Exercises</h2>
              <span className="font-bold text-5xl text-[#ccff00]">
                {saveds.length}
              </span>
            </div>
            <div className="border-l border-gray-800 pl-20 pr-40">
              <h2 className="font-bold text-2xl">Munites</h2>
              <span className="font-bold text-5xl text-[#ccff00]">
                {saveds.length && getTotalDuration(saveds)}
              </span>
            </div>
            <div className="border-l border-gray-800 pl-20 pr-40">
              <h2 className="font-bold text-2xl">Calories</h2>
              <span className="font-bold text-5xl text-[#ccff00]">
                {saveds.length && getTotalCalories(saveds)}
              </span>
            </div>
          </div>
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
              {
                sortedPlans.length != 0 ? sortedPlans.map((plan: Ifitlog) => (
                <MyPlanCard key={plan.id} plan={plan}></MyPlanCard>
              )) : <div className="text-yellow-300 text-md text-center">No today&apos;s plans found!</div> 
              }
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
              {
                sortedSaved.length != 0 ? sortedSaved.map((saved: Ifitlog) => (
                <SavedPlanCard key={saved.id} saved={saved}></SavedPlanCard>
              )): <div className="text-yellow-300 text-md text-center">No saved plans found!</div> 
              }
              
            </div>
          </div>
        </div>

        <div className="absolute top-97 right-50">
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
