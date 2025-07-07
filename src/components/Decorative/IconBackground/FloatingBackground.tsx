'use client'

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";



type Vector = { x: number, y: number }
function makeVec(x: number, y: number) : Vector { return { x: x, y: y } }
function addVecs(v1: Vector, v2: Vector) : Vector { return { x: v1.x + v2.x, y: v1.y + v2.y } }
function subVecs(v1: Vector, v2: Vector) : Vector { return { x: v1.x - v2.x, y: v1.y - v2.y } }
function scaleVec(v1: Vector, scale: number) : Vector { return { x: v1.x * scale, y: v1.y * scale } }
function lenVec(v1: Vector) : number { return Math.sqrt( Math.pow(v1.x, 2) + Math.pow(v1.y, 2) ) }
function normalizeVec(v1: Vector) : Vector { return scaleVec(v1, 1 / lenVec(v1)) }

type FloatingBackgroundProps = React.HTMLAttributes<HTMLDivElement> & {
    dt?: number,
    duration?: number,
    padding?: number,
    radius?: number,
    jitter?: boolean,
    dragSpeed?: number,
    dragFac?: number,
    reactForce?: number,
    boundaryNudgeForce?: number
}

const FloatingBackground = React.forwardRef<HTMLDivElement, FloatingBackgroundProps>(
    ({ children, 
        dt = 1000, 
        duration = 1, 
        padding = 50, 
        radius = 50, 
        jitter = false, 
        dragSpeed = 100,
        dragFac = .95, 
        reactForce = 1,
        boundaryNudgeForce = .1,
        ...rest 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, forwardRef) => {

        const initalPoses = [] as { pos: Vector, vel: Vector, r: number, s: number, o: number }[]
        React.Children.forEach(children, () => {
            initalPoses.push({
                pos: makeVec(0, 0),
                vel: makeVec(Math.random() * 10 - 5, Math.random() * 10 - 5),
                r: 0,
                s: 0,
                o: 0
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
                poses[i].pos.x = Math.random() * width
                poses[i].pos.y = Math.random() * height
            })

            setPositions(poses)
        }
        function updatePositions() {
            if (!ref || !ref.current) { return }

            const poses = [...positions]
            const width = ref.current.clientWidth
            const height = ref.current.clientHeight

            const forces = poses.map((self, selfIndex) => {
                let newForce = makeVec(0, 0)

                poses.forEach((other, otherIndex) => {
                    if (selfIndex == otherIndex) { return } // Postion is the same object.

                    const dv = subVecs(self.pos, other.pos)
                    const dist = lenVec(dv)

                    if (dist < radius) {
                        newForce = addVecs(newForce, 
                            scaleVec(
                                normalizeVec(dv), 
                                (1 / dist) * reactForce * radius // Radius should scale react force
                            )
                        )
                    }
                })

                // Nudge if in boundaries
                if (self.pos.x < padding) { 
                    newForce.x += boundaryNudgeForce * (padding - self.pos.x)
                }
                if (self.pos.x > width - padding) { 
                    newForce.x -= boundaryNudgeForce * (self.pos.x - (width - padding))
                }
                if (self.pos.y < padding) { 
                    newForce.y += boundaryNudgeForce * (padding - self.pos.y)
                }
                if (self.pos.y > height - padding) { 
                    newForce.y -= boundaryNudgeForce * (self.pos.y - (height - padding))
                }

                return newForce
            })

            poses.forEach((p, i) => {

                poses[i].vel = addVecs(poses[i].vel, forces[i])
                poses[i].pos = addVecs(poses[i].pos, poses[i].vel)

                if (lenVec(poses[i].vel) >= dragSpeed) {
                    poses[i].vel = scaleVec(poses[i].vel, dragFac)
                }
                const x = poses[i].pos.x
                const y = poses[i].pos.y

                let size = 1
                let opacity = .8
                let rot = 0
                if (jitter) {
                    size = Math.random() * 1.2 + .8
                    opacity = (size - 1) / 3
                    rot = Math.random() * 50 - 25
                }

                poses[i].pos.x = x
                poses[i].pos.y = y
                poses[i].r = rot
                poses[i].s = size
                poses[i].o = opacity
                
            })

            setPositions(poses)
        }

        useEffect(() => { // Inital Load
            setInitialPositons()
            setTimeout(() => {
                updatePositions()
            }, duration * 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        useEffect(() => { // Main Loop
            const id = setTimeout(() => {
                updatePositions()
            }, dt);
            return () => clearInterval(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [positions])

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

                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            x: positions[index]?.pos.x ?? 0,
                            y: positions[index]?.pos.y ?? 0,
                            rotate: positions[index]?.r ?? 0,
                            scale: positions[index]?.s ?? 0,
                            opacity: positions[index]?.o ?? 0
                        }}
                        transition={{ duration: duration, type: 'spring' }}
                    >
                        {child}
                    </motion.div>

                ))}
            </div>
        )
    })

FloatingBackground.displayName = "FloatingBackground"
export default FloatingBackground
