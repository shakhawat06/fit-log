'use client'

import { FitContext } from "@/context/FitlogContext";
import { Ifitlog } from "@/types/FitLogType";
import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

interface ClosePropTypes {
    plan: Ifitlog
}

const CloseButton = ({plan} : ClosePropTypes) => {
    const {plans, setPlan} = useContext(FitContext)

    const handleCloseButton = () => {
        const filteredPlans = plans.filter(storedPlan => Number(storedPlan.id) !== Number(plan.id) )
        setPlan(filteredPlans)   
        toast.error(`${plan.name} is removed`)
    }
  return (
    <div>
      <button onClick={() => handleCloseButton()} className="flex h-8 w-8 cursor-pointer shrink-0 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-rose-500/10 hover:text-rose-500">
        <FaXmark />
      </button>
    </div>
  );
};

export default CloseButton;

