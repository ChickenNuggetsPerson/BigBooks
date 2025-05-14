'use client';

import { ReactNode, createContext, useContext } from 'react';

export type AddWindowFn = (component: ReactNode) => void;

const WindowManagerContext = createContext<AddWindowFn>(() => {
    throw new Error('WindowManagerContext not initialized');
});

export const useWindowManager = () => useContext(WindowManagerContext);

export function WindowManagerProvider({
    children,
    addWindow,
}: {
    children: ReactNode;
    addWindow: AddWindowFn;
}) {
    return (
        <WindowManagerContext.Provider value={addWindow} >
            {children}
        </WindowManagerContext.Provider>
    );
}
