'use client'

import { FitContext } from "@/context/FitlogContext";
import { Ifitlog } from "@/types/FitLogType";
import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

interface ClosePropTypes {
    saved: Ifitlog
}

const CloseSavedButton = ({saved} : ClosePropTypes) => {
    const {saveds, setSaved} = useContext(FitContext)

    const handleCloseButton = () => {
        const filteredSaveds = saveds.filter(savedFit => String(savedFit.id) != String(saved.id) )
        setSaved(filteredSaveds)   
        toast.error(`${saved.name} is removed`)
    }
  return (
    <div>
      <button onClick={() => handleCloseButton()} className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-rose-500/10 hover:text-rose-500">
        <FaXmark />
      </button>
    </div>
  );
};

export default CloseSavedButton;

