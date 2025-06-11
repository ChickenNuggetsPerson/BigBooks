import { AvaliableStates } from "@/database/generated/prisma";
import { StateTaxBrackets } from "../taxBracketsTypes";


import ut from "./utah"
import other from "./other";





const AllBrackets: Record<AvaliableStates, StateTaxBrackets> = {
    
    [AvaliableStates.Other]: other,

    [AvaliableStates.Utah]: ut,
};

export default AllBrackets; 