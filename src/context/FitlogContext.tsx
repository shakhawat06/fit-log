"use client";

import { Ifitlog } from "@/types/FitLogType";
import React, { useState, createContext, ReactNode } from "react";

export interface IFitContex {
  plans: Ifitlog[];
  setPlan: React.Dispatch<React.SetStateAction<Ifitlog[]>>;
  saveds: Ifitlog[];
  setSaved: React.Dispatch<React.SetStateAction<Ifitlog[]>>;
}

export const FitContext = createContext<IFitContex | null>(null);

const FitlogProvider = ({ children }: { children: ReactNode }) => {
  const [plans, setPlan] = useState<Ifitlog[]>([]);
  const [saveds, setSaved] = useState<Ifitlog[]>([]);
  // const [] = useState()

  const sharedData = { plans, setPlan, saveds, setSaved };

  return (
    <FitContext.Provider value={sharedData}>{children}</FitContext.Provider>
  );
};

export default FitlogProvider;
