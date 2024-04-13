import { useState } from "react";

export function UseForm(steps) {
    const [CurrentStep, setCurrentStep] = useState(0)


    return {
        CurrentStep,
        currentComponent: steps[CurrentStep],
    }
}