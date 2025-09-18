import { AvaliableStates } from "@/database/generated/prisma"




export const StateOptions = Object.keys(AvaliableStates).map(state => { return { label: state, id: state } })