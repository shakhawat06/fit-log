"use client";

import React, { useState, createContext, ReactNode } from "react";

export const FitContext = createContext({});

const FitlogProvider = ({children}: {children: ReactNode}) => {
  const [plans, setPlan] = useState([]);
  const [saveds, setSaved] = useState([]);
  // const [] = useState()

  const sharedData = { plans, setPlan, saveds, setSaved };

  return <FitContext.Provider value={sharedData}>{children}</FitContext.Provider>;
};

export default FitlogProvider;
