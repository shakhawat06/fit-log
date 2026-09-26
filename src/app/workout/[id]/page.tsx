import SavedButton from "@/components/workoutDetails/SavedButton";
import TodaysPlanButton from "@/components/workoutDetails/TodaysPlanButton";
import { Ifitlog } from "@/types/FitLogType";
import Image from "next/image";

interface ParamsType {
  params: Promise<{ id: string }>;
}

const WorkoutDetailsPage = async ({ params }: ParamsType) => {
  const { id } = await params;

  const getFitload = async (): Promise<Ifitlog> => {
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
    return await res.json();
  };

  const fitLog = await getFitload();

  return (
    <div className="bg-base-300">

      <div className="container mx-auto my-20 px-4">
        <div className="grid lg:grid-cols-2 bg-base-300  border-gray-700  overflow-hidden">
          {/* Left Column - Image */}
          <div className="h-full min-h-[500]">
            <Image
              src={fitLog.image}
              width={600}
              height={700}
              className="w-full h-full object-cover rounded-3xl"
              alt={fitLog.name}
            />
          </div>

          {/* Right Column - Data */}
          <div className="p-6 lg:p-10">
            {/* Title */}
            <h2 className="text-3xl font-bold text-white mb-3">{fitLog.name}</h2>

            {/* Description */}
            <p className="text-gray-400 leading-7 mb-5">{fitLog.description}</p>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mb-6">
              {fitLog.muscleGroups.map((muscleGroup, ind) => (
                <span
                  key={ind}
                  className="px-3 py-1 rounded-full bg-[#ccff00] text-black text-sm font-semibold"
                >
                  {muscleGroup}
                </span>
              ))}
            </div>

            {/* Workout Data */}
            <div className="bg-base-100 rounded-xl border text-[#9CA3AF] border-gray-700 my-10 ">
              <div className="flex justify-between p-5">
                <p>equipment</p>
                <p>{fitLog.equipment}</p>
              </div>
              <div className="border-b border-gray-700"></div>
              <div className="flex justify-between p-5">
                <p className="uppercase">difficulty</p>
                <p>{fitLog.difficulty}</p>
              </div>
              <div className="border-b border-gray-700"></div>

              <div className="flex justify-between p-5">
                <p className="uppercase">sets</p>
                <p>{fitLog.sets}</p>
              </div>
              <div className="border-b border-gray-700"></div>

              <div className="flex justify-between p-5">
                <p className="uppercase">reps</p>
                <p>{fitLog.reps}</p>
              </div>
              <div className="border-b border-gray-700"></div>

              <div className="flex justify-between p-5">
                <p className="uppercase">duration</p>
                <p>{fitLog.duration}</p>
              </div>
              <div className="border-b border-gray-700"></div>

              <div className="flex justify-between p-5">
                <p className="uppercase">caloriesBurned</p>
                <p>{fitLog.caloriesBurned}</p>
              </div>
              <div className="border-b border-gray-700"></div>

              <div className="flex justify-between p-5">
                <p className="uppercase">rating</p>
                <p>{fitLog.rating}</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-7">
              <h2 className="font-bold text-white   pl-3 mb-4">
                INSTRUCTIONS
              </h2>

              <ol className="space-y-3 text-[#9CA3AF]">
                {fitLog.instructions.map((inst, ind) => (
                  <li
                    key={ind}
                    className="flex items-start gap-3 text-gray-400 text-sm leading-6"
                  >
                    <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
                      {ind + 1}.
                    </span>

                    <span className="pt-0.5">{inst}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <TodaysPlanButton fitLog={fitLog} />

              <SavedButton fitLog={fitLog} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
