'use client';

import { ReactNode, useEffect, useState } from 'react';
import Window from './Window';
import { WindowManagerProvider } from './WindowManagerContext';
import React from 'react';

interface WindowConfig {
    id: number;
    component: ReactNode;
}

let nextId = 1;

export default function Desktop({ children }: { children: React.ReactNode }) {
    const [windows, setWindows] = useState<WindowConfig[]>([]);
    const [zIndexes, setZIndexes] = useState<number[]>([]);

    const addWindow = (component: ReactNode) => {
        const id = nextId++;
        setWindows(prev => [...prev, { id, component }]);
        setZIndexes(prev => [...prev, Math.max(0, ...prev) + 1]);
    };

    const bringToFront = (index: number) => {
        const maxZ = Math.max(...zIndexes);
        const newZ = [...zIndexes];
        newZ[index] = maxZ + 1;
        setZIndexes(newZ);
    };

    const del = (id: number) => {
        const index = windows.findIndex((c) => c.id == id)

        setWindows(prev => prev.filter((c) => c.id != id))
        setZIndexes(prev => prev.splice(index, 1))
    }   

    useEffect(() => {

        setWindows([])
        setZIndexes([])

        React.Children.forEach(children, (child) => {
            addWindow(child)
        })
    }, [children])

    return (
        <WindowManagerProvider addWindow={addWindow} >
            <div className="w-full h-screen relative overflow-hidden">
                {windows.map((win, i) => (
                    <Window
                        key={win.id}
                        zIndex={zIndexes[i]}
                        dragStart={() => bringToFront(i)}
                        startX={Math.random() * 500 + 100}
                        startY={Math.random() * 300 + 100}
                        del={() => del(win.id)}
                    >
                        {win.component}
                    </Window>
                ))}
            </div>
        </WindowManagerProvider>
    );
}
