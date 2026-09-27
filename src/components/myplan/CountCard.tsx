import { Ifitlog } from "@/types/FitLogType";
import React from "react";

interface CountPropType {
  plans: Ifitlog[];
}

const CountCard = ({ plans }: CountPropType) => {
  const getTotalDuration = (plans: Ifitlog[]): number => {
    return plans.reduce((total, plans) => total + plans.duration, 0);
  };

  const getTotalCalories = (plans: Ifitlog[]): number => {
    return plans.reduce((total, plans) => total + plans.caloriesBurned, 0);
  };

  console.log(plans);

  return (
    <div>
      <div className="bg-base-100 border border-gray-700 rounded-2xl py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3">
        <div className="text-center sm:text-left py-4 sm:py-0 sm:pr-6">
          <h2 className="font-bold text-xl sm:text-2xl">Exercises</h2>
          <span className="font-bold text-4xl sm:text-5xl text-[#ccff00]">
            {plans.length}
          </span>
        </div>

        <div className="text-center sm:text-left py-4 sm:py-0 sm:px-6 border-t sm:border-t-0 sm:border-l border-gray-800">
          <h2 className="font-bold text-xl sm:text-2xl">Minutes</h2>
          <span className="font-bold text-4xl sm:text-5xl">
            {plans.length ? getTotalDuration(plans) : 0}
          </span>
        </div>

        <div className="text-center sm:text-left py-4 sm:py-0 sm:pl-6 border-t sm:border-t-0 sm:border-l border-gray-800">
          <h2 className="font-bold text-xl sm:text-2xl">Calories</h2>
          <span className="font-bold text-4xl sm:text-5xl">
            {plans.length ? getTotalCalories(plans) : 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
