'use client'

import NumericText from "@/components/Decorative/NumericText/NumericText"
import { Minus } from "lucide-react"
import { useState } from "react"





export default function PingPongPage() {

    const [p1, setP1] = useState(0)
    const [p2, setP2] = useState(0)

    const [p1Name, setP1Name] = useState("Player 1")
    const [p2Name, setP2Name] = useState("Player 2")

    const [switchServe, setSwitch] = useState(false)

    function scoreString(x: number) {
        return `${x}`
    }

    function serveText() {

        const p = getServingPlayer()
        return p ? `${p1Name} Serves` : `${p2Name} Serves`
    }

    function getServingPlayer(): boolean {
        const scoreDifference = Math.abs(p1 - p2);
        const maxScore = Math.max(p1, p2);

        if (maxScore >= 10) {
            
            if (scoreDifference >= 1) {
                return p1 < p2; // Someone wins
            }

            return (p1 + p2) % 2 == 0
        }
        return (Math.floor((p1 + p2) / 5) % 2) === (switchServe ? 0 : 1)
    }

    function winningPlayer() {
        const maxScore = Math.max(p1, p2)
        const scoreDifference = Math.abs(p1 - p2);

        if (maxScore >= 11 && scoreDifference >= 2) {
            return p1 > p2 ? `${p1Name} Wins!` : `${p2Name} Wins!`
        }

        return null
    }


    return (
        <div className="font-bold text-9xl select-none">

            <div className="flex flex-row justify-between mx-20 font-semibold gap-4">
                <input className="bg-gray-200 w-1/2" onChange={(e) => { setP1Name(e.target.value) }} defaultValue={p1Name} ></input>
                <input className="bg-gray-200 w-1/2" onChange={(e) => { setP2Name(e.target.value) }} defaultValue={p2Name} ></input>
            </div>

            <div className="flex flex-row justify-between mx-50 mt-10" style={{ fontSize: 250 }}>
                <div onClick={() => { setP1(p1 + 1) }}>
                    <NumericText val={scoreString(p1)} spacing={140} expand />
                </div>
                <div onClick={() => { setP2(p2 + 1) }}>
                    <NumericText val={scoreString(p2)} spacing={140} expand />
                </div>
            </div>

            <div className="flex flex-row justify-between mx-50">
                <button onClick={() => { setP1(p1 - 1) }}> <Minus size={150}/> </button>
                <button onClick={() => { setP2(p2 - 1) }}> <Minus size={150}/> </button>
            </div>

            <div className="flex flex-row justify-center mx-50" onClick={() => { setSwitch(!switchServe) }}>
                <NumericText val={winningPlayer() ?? serveText()} spacing={60} expand />
            </div>

        </div>
    )
}