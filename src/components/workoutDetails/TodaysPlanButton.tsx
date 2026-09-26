"use client";

import { FitContext } from "@/context/FitlogContext";
import { Ifitlog } from "@/types/FitLogType";
import { useContext } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { toast } from "react-toastify";

interface FitLogProp {
  fitLog: Ifitlog;
}

const TodaysPlanButton = ({ fitLog }: FitLogProp) => {
  const { plans, setPlan } = useContext(FitContext);

  // console.log(fitProvider);

  const handleTodaysPlan = () => {
    if(plans.length <= 4) {
      setPlan([...plans, fitLog]);
      toast.success(`${fitLog.name} is added to today's plan`);
    } else {
      toast.error(`You have taken 5 plans today.`)
    }
  };

  return (
    <div>
      <button
        onClick={() => handleTodaysPlan()}
        className="btn bg-[#ccff00] hover:bg-[#dbfc66] text-black border-none font-semibold"
      >
        <MdOutlineCalendarMonth className="text-xl" />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default TodaysPlanButton;
