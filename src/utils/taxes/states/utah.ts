import { AvaliableStates } from "@/database/generated/prisma";
import { StateTaxBrackets } from "../taxBracketsTypes";




// TODO: Populate with test data

const ut: StateTaxBrackets = {
    state: AvaliableStates.Utah,
    brackets: {
        Single: [ 
            { min: 0, max: 10099, rate: 0.01 },
            { min: 10100, max: 23942, rate: 0.02 },
            { min: 23943, max: 37788, rate: 0.04 },
            { min: 37789, max: 52455, rate: 0.06 },
            { min: 52456, max: 66295, rate: 0.08 },
            { min: 66296, max: 338639, rate: 0.093 },
            { min: 338640, max: 406364, rate: 0.103 },
            { min: 406365, max: 677275, rate: 0.113 },
            { min: 677276, max: null, rate: 0.123 }
        ],
        Joint: [
            { min: 0, max: 10099, rate: 0.01 },
            { min: 10100, max: 23942, rate: 0.02 },
            { min: 23943, max: 37788, rate: 0.04 },
            { min: 37789, max: 52455, rate: 0.06 },
            { min: 52456, max: 66295, rate: 0.08 },
            { min: 66296, max: 338639, rate: 0.093 },
            { min: 338640, max: 406364, rate: 0.103 },
            { min: 406365, max: 677275, rate: 0.113 },
            { min: 677276, max: null, rate: 0.123 }
        ]
    }
}

export default ut