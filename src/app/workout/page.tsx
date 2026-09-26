import FitCard from "@/components/shared/FitCard";
import { Ifitlog } from "@/types/FitLogType";
import React from "react";

const getFitlogData = async (): Promise<Ifitlog[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  return await res.json();
};

const WorkoutPage = async () => {
  const fitlogs = await getFitlogData();

  return (
    <div className="bg-base-300 ">

      <div className="container mx-auto mt-10">
        <div className="space-y-3 mb-10">
          <h2 className="text-3xl font-bold">THE LIBRARY</h2>
          <p className="text-[#9CA3AF]">
            All lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 mb-10">
          {fitlogs.map((fitlog: Ifitlog) => (
            <FitCard key={fitlog.id} fitlog={fitlog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
