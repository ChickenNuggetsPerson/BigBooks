'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
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
    const ref = useRef<HTMLDivElement | null>(null);

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

    // const del = (id: number) => {
    //     const index = windows.findIndex((c) => c.id == id)

    //     setWindows(prev => prev.filter((c) => c.id != id))
    //     setZIndexes(prev => prev.splice(index, 1))
    // }

    useEffect(() => {

        setWindows([])
        setZIndexes([])

        const arr = React.Children.toArray(children)
        for (let i = arr.length - 1; i >= 0; i--) {
            addWindow(arr[i])
        }
    }, [children])

    function getStartX(num: number) {
        if (ref.current) {

            const percent = (num - 2) / (windows.length + 1)

            const center = ref.current.clientWidth / 2

            const width = ref.current.clientWidth * 0.3
            let amt = Math.cos(-Math.PI * 2 * percent) 

            amt = amt * width + center

            return amt - 200
        } else {
            return 70 + (Math.random() * 130)
        }
    }
    function getStartY(num: number) {
        if (ref.current) {

            const percent = (num - 2) / (windows.length + 1) 

            const center = ref.current.clientHeight / 2

            const width = ref.current.clientHeight * 0.3
            const amt = Math.sin(-Math.PI * 2 * percent) * width + center

            return amt - 100
        } else {
            return 70 + (Math.random() * 130)
        }
    }

    return (
        <WindowManagerProvider addWindow={addWindow} >
            <div className="w-full relative overflow-hidden bg-background-down/40 rounded-2xl"
                style={{
                    height: "calc(100dvh - 60px)"
                }}
                ref={ref}
            >
                {windows.map((win, i) => (
                    <Window
                        key={win.id}
                        zIndex={zIndexes[i]}
                        dragStart={() => bringToFront(i)}
                        startX={getStartX(i)}
                        startY={getStartY(i)}
                    >
                        {win.component}
                    </Window>
                ))}
            </div>
        </WindowManagerProvider>
    );
}
