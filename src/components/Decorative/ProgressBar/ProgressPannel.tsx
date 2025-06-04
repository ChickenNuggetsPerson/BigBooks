import React from 'react';

type ProgressBarProps = {
    steps: string[];
    currentStep: number;
    changeCB: (index: number) => void
};

export default function ProgressBar({ steps, currentStep, changeCB }: ProgressBarProps) {

    const size = 100 / steps.length

    function getPercent() {
        const percent = 100 - Math.floor((currentStep / steps.length) * 100) + (currentStep * -1)
        return `${percent}%`
    }

    function getSelectedPercent() {

        return `0 ${size * (steps.length - (currentStep + 1))}% 0 ${currentStep * size}%`
    }

    const transition = "clip-path .3s cubic-bezier(0.25, 0.1, 0.25, 1)"

    return (
        <div className="flex flex-row justify-center">
            <div className="relative flex overflow-hidden rounded-xl border border-gray-300 shadow-sm max-w-200 w-full">
                {/* Background Layer */}

                <div
                    className="absolute inset-0 bg-accent z-10"
                    style={{
                        transition: transition,
                        clipPath: `inset(${getSelectedPercent()})` // you can dynamically apply your clipPath here
                    }}
                ></div>
                <div
                    className="absolute inset-0 bg-primary opacity-20 z-0"
                    style={{
                        transition: transition,
                        clipPath: `inset(0 ${getPercent()} 0 0)` // you can dynamically apply your clipPath here
                    }}
                ></div>

                

                {/* Foreground Items */}
                {steps.map((step, index) => (
                    <div
                        key={step}
                        className="select-none text-gray-600 relative z-10 flex-1 px-4 py-3 text-center text-sm font-bold transition-colors duration-200 border-r border-secondary last:border-r-0"
                        onClick={() => changeCB(index)}
                        style={{
                            color: currentStep == index ? "white" : ""
                        }}
                    >
                        {step}
                    </div>
                ))}
            </div>
        </div>

    );
}
