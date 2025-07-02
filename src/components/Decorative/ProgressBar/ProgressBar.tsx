import { Stepper, Step, StepButton, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#789283',
        }
    },
});

type ProgressBarProps = {
    steps: string[];
    currentStep: number;
    changeCB: (index: number) => void
};

export default function ProgressBar({ steps, currentStep, changeCB }: ProgressBarProps) {


    return (
        <div className='smallCard' style={{ padding: 10 }}>
            <ThemeProvider theme={theme}>
                <Stepper nonLinear activeStep={currentStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={currentStep > index}>
                            <StepButton color="inherit" onClick={() => { changeCB(index) }}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </ThemeProvider>
        </div>

    );
}
