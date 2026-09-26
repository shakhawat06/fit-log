"use client";
import { FitContext } from "@/context/FitlogContext";
import Link from "next/link";
import React, { useContext } from "react";

const MySavedCount = () => {
  const context = useContext(FitContext);
    if (!context) {
      throw new Error("MyplanPage must be used inside FitlogProvider");
    }
  const { saveds } = context;
  return (
    <div>
      <Link href={`/myplan`} className="">
        Saved
        <span className="ml-2 border border-gray-100 px-2 rounded-full">
          {saveds.length}
        </span>
      </Link>
    </div>
  );
};

export default MySavedCount;
