'use client'

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";



type FloatingBackgroundProps = React.HTMLAttributes<HTMLDivElement> & {

}

const FloatingBackground = React.forwardRef<HTMLDivElement, FloatingBackgroundProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ children, ...rest }, forwardRef) => {

        const initalPoses = [] as { x: number, y: number, r: number }[]
        React.Children.forEach(children, () => {
            initalPoses.push({
                x: 0,
                y: 0,
                r: 0
            })
        })

        const ref = useRef(null as HTMLDivElement | null)
        const [positions, setPositions] = useState(initalPoses)

        function setInitialPositons() {
            if (!ref || !ref.current) { return }

            const poses = [...positions]
            const width = ref.current.clientWidth
            const height = ref.current.clientHeight

            poses.forEach((p, i) => {
                poses[i].x = Math.random() * width
                poses[i].y = Math.random() * height
            })

            setPositions(poses)
        }
        function updatePositions() {
            console.log("Update Pos")
            if (!ref || !ref.current) { return }

            const poses = [...positions]
            const width = ref.current.clientWidth
            const height = ref.current.clientHeight

            poses.forEach((p, i) => {
                poses[i].x = Math.random() * width
                poses[i].y = Math.random() * height
                poses[i].r = Math.random() * 100 - 50
            })

            setPositions(poses)
        }

        useEffect(() => {
            setInitialPositons()
            const id = setInterval(() => {
                updatePositions()
            }, 7000);
            return () => clearInterval(id)
        }, [])

        return (
            <div
                ref={ref}
                {...rest}
                style={{ ...rest.style }}
                className="w-full h-full"
            >
                {React.Children.map(children, (child, index) => (

                    <motion.div
                        key={`animateChild-${index}`}
                        className="absolute"

                        initial={{ opacity: 0 }}
                        animate={{
                            x: positions[index]?.x ?? 0,
                            y: positions[index]?.y ?? 0,
                            rotate: positions[index]?.r ?? 0,
                            opacity: 1
                        }}
                        transition={{ duration: 7, type: 'spring' }}
                    >
                        {child}
                    </motion.div>

                ))}
            </div>
        )
    })

FloatingBackground.displayName = "FloatingBackground"
export default FloatingBackground
