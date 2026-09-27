'use client'
import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const MarkAsDoneBtn = () => {
    const [done, setDone] = useState<boolean>(false)
  return (
    <div>
      <button onClick={() => setDone(true)} disabled={done} className={`${done === true ? 'bg-rose-200 border border-rose-500 text-rose-500 ' : 'bg-[#ccff00] hover:bg-[#b8eb00] hover:shadow-[#ccff00]/10' } flex cursor-pointer items-center gap-2 rounded-full  px-4 py-2 text-sm font-semibold text-black transition  hover:shadow-lg `}>
        <IoCheckmarkSharp className="text-lg" />
        Mark as Done
      </button>
    </div>
  );
};

export default MarkAsDoneBtn;
