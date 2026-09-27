import { Ifitlog } from "@/types/FitLogType";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import { RiHeartPulseFill } from "react-icons/ri";
import ClosePlanedButton from "./CloseButton";
import Link from "next/link";
import MarkAsDoneBtn from "./MarkAsDoneBtn";

interface PlanPropType {
  plan: Ifitlog;
}

const MyPlanCard = ({ plan }: PlanPropType) => {
  return (
    <div>
      <div className="group relative overflow-hidden rounded-2xl border border-gray-700/60 bg-base-300 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00]/40 hover:shadow-[#ccff00]/5">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="relative shrink-0">
            <Image
              src={plan.image}
              alt={plan.name}
              width={180}
              height={180}
              className="h-44 w-full rounded-xl object-cover md:w-44"
            />

            <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <FaStar className="text-[#ccff00]" />
              {plan.rating}
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between gap-5">
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-white">
                    {plan.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">{plan.equipment}</p>
                </div>

                <ClosePlanedButton plan={plan} />
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <LuClock9 className="text-lg text-[#ccff00]" />

                  <p className="text-sm font-semibold text-gray-200">
                    {plan.duration} min
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <RiHeartPulseFill className="text-lg text-[#ccff00]" />

                  <p className="text-sm font-semibold text-gray-200">
                    {plan.caloriesBurned} kcal
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FaStar className="text-lg text-[#ccff00]" />

                  <p className="text-sm font-semibold text-gray-200">
                    {plan.rating}/5
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-gray-700/60 pt-4">
              <Link href={`/workout/${plan.id}`}>
                <button className="rounded-full cursor-pointer border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-[#ccff00] hover:text-[#ccff00]">
                  View Details
                </button>
              </Link>

              <MarkAsDoneBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;
