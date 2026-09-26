"use client";

import { FitContext } from "@/context/FitlogContext";
import { Ifitlog } from "@/types/FitLogType";
import { useContext } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { toast } from "react-toastify";

interface SavedPropType {
  fitLog: Ifitlog;
}

const SavedButton = ({ fitLog }: SavedPropType) => {
  const { saveds, setSaved } = useContext(FitContext);

  const handleSavedButton = () => {
    if (saveds.length <= 4) {
      setSaved([...saveds, fitLog]);
      toast.success(`${fitLog.name} is added to saved plan`);
    } else {
      toast.error("You have saved 5 plans today.");
    }
  };
  return (
    <div>
      <button
        onClick={() => handleSavedButton()}
        className="btn btn-outline border-gray-600 hover:bg-gray-800 hover:border-[#ccff00]"
      >
        <IoBookmarkOutline className="text-xl" />
        Save for later
      </button>
    </div>
  );
};

export default SavedButton;
