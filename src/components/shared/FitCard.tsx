import { Ifitlog } from "@/types/FitLogType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import { RiHeartPulseFill } from "react-icons/ri";

interface FitCardPropType {
  fitlog: Ifitlog
}

const FitCard = ({ fitlog }: FitCardPropType) => {
  // const {muscleGroup} = fitlog
  return (
    <Link href={`/workout/${fitlog.id}`} className="">
      <div className="card bg-base-100 shadow-sm border border-gray-700 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <figure className="relative overflow-hidden">
          <Image
            src={fitlog.image}
            width={392}
            height={100}
            className="w-full h-[250] object-cover hover:scale-105 transition-transform duration-500"
            alt={fitlog.name}
          />
        </figure>

        {/* Muscle Groups */}
        <div className="flex flex-wrap p-5 gap-2 text-black">
          {fitlog.muscleGroups.map((muscel, ind) => (
            <div className="card-actions" key={ind}>
              <div className="py-1 px-3 text-sm font-medium hover:bg-[#a0cc00] rounded-full bg-[#ccff00] transition-colors duration-200">
                {muscel}
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="card-body pt-0">
          <h2 className="card-title text-xl font-bold text-white">
            {fitlog.name}
          </h2>

          <p className="text-gray-400 text-sm leading-6">{fitlog.equipment}</p>
        </div>

        {/* Divider */}
        <div className="px-5">
          <div className="border-b border-gray-700"></div>
        </div>

        {/* Statistics */}
        <div className="flex p-5 gap-10 text-gray-300">
          <p className="flex items-center gap-2 text-sm">
            <LuClock9 className="text-[#ccff00] text-lg" />
            <span>{fitlog.duration} min</span>
          </p>

          <p className="flex items-center gap-2 text-sm">
            <RiHeartPulseFill className="text-[#ccff00] text-lg" />
            <span>{fitlog.caloriesBurned} kcal</span>
          </p>

          <p className="flex items-center gap-2 text-sm">
            <FaStar className="text-[#ccff00] text-lg"/>
            <span>{fitlog.rating}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FitCard;
