import { AvaliableStates, FilingTypes } from "@/database/generated/prisma";






export interface TaxBracket {
    min: number;
    max: number | null;
    rate: number;
}

export interface StateTaxBrackets {
    state: AvaliableStates;
    brackets: Record<FilingTypes, TaxBracket[]>;
}

