"use client";
import { FitContext } from "@/context/FitlogContext";
import Link from "next/link";
import React, { useContext } from "react";

const MyPlanCount = () => {
  const context = useContext(FitContext);
  if (!context) {
    throw new Error("MyplanPage must be used inside FitlogProvider");
  }
  const { plans } = context;
  return (
    <div>
      <Link href={`/myplan`} className="">
        Plan
        <span className="ml-2 border bg-[#ccff00] text-black px-2 rounded-full">
          {plans.length}
        </span>
      </Link>
    </div>
  );
};

export default MyPlanCount;
