"use client";
import { useStepperContext } from "@/context/StepperContext";

const Stepper: React.FC = () => {
  const { currentStep } = useStepperContext();

  //   const handleNext = () => {
  //     if (currentStep < 3) {
  //       setCurrentStep(currentStep + 1);
  //     }
  //   };

  //   const handlePrev = () => {
  //     if (currentStep > 1) {
  //       setCurrentStep(currentStep - 1);
  //     }
  //   };

  return (
    <div className="flex items-end max-w-screen-lg mx-auto">
      {[1, 2, 3].map((step) => (
        <div key={step} className="w-full">
          <h6
            className={`text-base font-bold ${
              currentStep >= step ? "text-primary" : "text-gray-400"
            } mb-2 mr-4`}
          >
            Step {step}
          </h6>
          <div className="flex items-center w-full">
            <div
              className={`w-8 h-8 shrink-0 mx-[-1px] border-2 transition ease-in-out delay-50 ${
                currentStep >= step ? "border-primary" : "border-gray-300"
              } p-1.5 flex items-center justify-center rounded-full`}
            >
              {currentStep > step ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full fill-primary"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
              ) : (
                <span
                  className={`w-3 h-3 transition ease-in-out delay-50 ${
                    currentStep >= step ? "bg-primary" : "bg-gray-300"
                  } rounded-full`}
                ></span>
              )}
            </div>
            {step !== 3 && (
              <div
                className={`w-full h-1  transition ease-in-out delay-50 ${
                  currentStep > step ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        </div>
      ))}
      {/* <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
      >
        Next
      </button> */}
    </div>
  );
};

export default Stepper;
