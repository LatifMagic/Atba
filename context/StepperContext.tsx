import React, { createContext, useContext, useState } from "react";

interface StepperContextType {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const useStepperContext = (): StepperContextType => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepperContext must be used within a StepperProvider");
  }
  return context;
};

export const StepperProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <StepperContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepperContext.Provider>
  );
};
