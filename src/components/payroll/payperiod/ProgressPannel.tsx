import React from 'react';

type ProgressPanelProps = {
    steps: string[];
    currentStep: number;
    changeCB: (index: number) => void 
};

export default function ProgressPanel({ steps, currentStep, changeCB }: ProgressPanelProps) {
    return (
        <div className="flex w-full overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;

                return (
                    <div
                        key={step}
                        className={`flex-1 px-4 py-3 text-center text-sm font-medium transition-colors duration-200
                                        border-r border-secondary last:border-r-0
                            ${isCompleted
                                ? 'bg-dark_secondary text-white'
                                : isActive
                                    ? 'bg-secondary-up text-text'
                                    : 'bg-white text-gray-500'
                            } 
                            hover:bg-secondary-up 
                            `}
                    onClick={() => {changeCB(index)}}
                    >
                        {step}
                    </div>
                );
            })}
        </div>
    );
}
