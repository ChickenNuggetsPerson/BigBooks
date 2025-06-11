import { AvaliableStates } from "@/database/generated/prisma";
import { StateTaxBrackets } from "../taxBracketsTypes";




// TODO: Populate with test data

const other: StateTaxBrackets = {
    state: AvaliableStates.Other,
    brackets: {
        Single: [],
        Joint: []
    }
}

export default other